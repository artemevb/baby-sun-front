import React from "react";
import { cn } from "@lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui";
import { useTranslations } from "next-intl"; 

interface Props {
  className?: string;
}

export const AboutBanner = ({ className }: Props) => {
  const t = useTranslations("BabySun"); 

  return (
    <div
      className={cn("w-full pb-24 relative bg-white flex max-lgx:flex-col lgx:items-center", className)}
    >
      <div className="w-full max-lgx:hidden flex">
        <div className="relative flex-1">
          <Image
            src={'/svg/about/banner/down-circles.svg'}
            width={200}
            height={200}
            alt="Cilcles Neon"
            className="h-8 w-auto absolute top-0 left-0"
          />
          <Image
            src={'/svg/about/banner/up-circles.svg'}
            width={200}
            height={200}
            alt="Cilcles Neon"
            className="h-8 w-auto absolute bottom-0 right-12"
          />
        </div>
        <div className="flex-1">
          <Image
            src={"/svg/about/banner/BS-about.png"}
            width={2000}
            height={2000}
            alt="Baby Sun Group Photo"
            quality={100}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="absolute max-lgx:relative w-full max-w-[1550px] h-full left-1/2 transform -translate-x-1/2 px-4">
        <div className="space-y-6 w-full max-w-[500px]">
          <h1 className="text-5xl max-mdx:text-4xl max-mdx:mt-8 font-bold">
            {t("title")} <span className="text-[#009FE3]">{t("subtile")}</span>
          </h1>
          <p className="text-lg leading-6 font-medium">
            {t("description")}
          </p>
          <div>
            <a href="tel:+998 99 890 93 88">
              <Button className="text-xl rounded-full px-8 py-4 bg-[#009FE3] text-white">
                {t("call")}
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="lgx:hidden px-4 mt-8">
        <Image
          src={'/svg/about/banner/about.jfif'}
          width={1000}
          height={1000}
          alt="About Mobile photo"
          className="w-full h-auto max-h-[400px] object-cover rounded-3xl"
        />
      </div>
    </div>
  );
};
