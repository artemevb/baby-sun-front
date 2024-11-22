"use client"; // Убедитесь, что это клиентский компонент

import React from "react";
import { cn } from "@lib/utils";
import { PhotoProvider, PhotoView } from 'react-photo-view'; // Импортируем react-photo-view
import 'react-photo-view/dist/react-photo-view.css'; // Импортируем стили react-photo-view
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui";
import { useTranslations } from "next-intl";
interface Props {
  className?: string;
}

const licenses = [
  {
    id: 1,
    image: "/images/about/licenses/1_1.jpg", // Путь к вашему изображению
  },
  {
    id: 2,
    image: "/images/about/licenses/1_2.jpg", // То же изображение для демонстрации
  },
  {
    id: 3,
    image: "/images/about/licenses/2.jpg",
  }
];

export const Licenses = ({ className }: Props) => {
  const t = useTranslations("BabySun.history");

  return (
    <div id="licenses" className={cn("py-24", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto space-y-8">
        <h2 className="text-4xl font-bold">{t('licenses')}</h2>

        <PhotoProvider>
          <Carousel className="space-y-12">
            <CarouselContent>
              {licenses.map((license, index) => (
                <CarouselItem key={license.id} className="mdx:basis-1/2 lgx:basis-1/4">
                  <div className="p-2 h-auto rounded-2xl flex justify-center items-center">
                    <PhotoView src={license.image}>
                      <img
                        src={license.image}
                        alt={`License ${index + 1}`}
                        className="cursor-pointer object-contain h-full w-full"
                      />
                    </PhotoView>
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

