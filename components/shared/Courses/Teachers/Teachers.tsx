// Teachers.tsx
"use client";
import React from "react";
import { cn } from "@lib/utils";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

type SupportedLocales = 'ru' | 'en';

interface Teacher {
  id: number;
  name: Record<SupportedLocales, string>;
  description: Record<SupportedLocales, string>;
  image: string;
}

interface Props {
  className?: string;
  teachers: Teacher[];
}

export const Teachers = ({ className, teachers }: Props) => {
  const t = useTranslations(); 
  const locale = useLocale();
  const currentLanguage: SupportedLocales = ['ru', 'en'].includes(locale) ? (locale as SupportedLocales) : 'en';

  return (
    <div className={cn("py-24", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto space-y-8">
        <h2 className="text-4xl font-semibold">{t("Main.Teachers.teachers")}</h2>

        <PhotoProvider>
          <Carousel className="space-y-12">
            <CarouselContent>
              {teachers.map((teacher) => (
                <CarouselItem key={teacher.id} className="md:basis-1/2 lg:basis-1/4">
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <PhotoView src={teacher.image}>
                      <Image
                        src={teacher.image}
                        width={500}
                        height={500}
                        alt={teacher.name[currentLanguage]}
                        className="cursor-pointer object-cover rounded-xl h-[400px] w-full"
                      />
                    </PhotoView>
                    <div className="p-4">
                      <h3 className="text-lg font-bold">{teacher.name[currentLanguage]}</h3>
                      <p className="text-sm text-gray-600 mt-2">
                        {teacher.description[currentLanguage]}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </PhotoProvider>
      </div>
    </div>
  );
};


