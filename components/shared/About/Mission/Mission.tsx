import React from "react";
import { cn } from "@lib/utils";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface Props {
  className?: string;
}

export const Mission = ({ className }: Props) => {
  const t = useTranslations("Mission");

  return (
    <div className={cn("py-24", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto space-y-8">
        <h2 className="text-3xl font-bold">{t('title')}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="rounded-3xl order-1 p-8 space-y-4 border border-[#DFDFDF] h-[200px] mdx:h-[250px] lgx:h-[300px]">
            <h3 className="text-xl lgx:text-2xl font-semibold">
              {t('sections.care.title')}
            </h3>
            <p className="leading-5 lgx:text-lg font-medium">
              {t('sections.care.description')}
            </p>
          </div>
          <Image
            src={"/images/about/mission/mission-1.png"}
            width={1000}
            height={1000}
            alt={t('sections.care.alt')}
            quality={100}
            className="rounded-3xl order-2 h-[200px] mdx:h-[250px] object-cover lgx:h-[300px]"
          />
          <div className="rounded-3xl order-3 lgx:order-4 p-8 space-y-4 border border-[#DFDFDF] h-[200px] mdx:h-[250px] lgx:h-[300px]">
            <h3 className="text-xl lgx:text-2xl font-semibold">
              {t('sections.safety.title')}
            </h3>
            <p className="leading-5 lgx:text-lg font-medium">
              {t('sections.safety.description')}
            </p>
          </div>
          <Image
            src={"/images/about/mission/mission-2.png"}
            width={1000}
            height={1000}
            alt={t('sections.safety.alt')}
            quality={100}
            className="rounded-3xl order-4 lgx:order-3 h-[200px] mdx:h-[250px] object-cover lgx:h-[300px]"
          />
        </div>
      </div>
    </div>
  );
};