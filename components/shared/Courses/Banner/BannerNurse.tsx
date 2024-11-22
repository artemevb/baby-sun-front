import React from "react";
import { cn } from "@lib/utils";
import { Request } from "../../Request/Request";
import Image from "next/image";

interface Props {
  className?: string;
}

export const BannerNurse = ({ className }: Props) => {
  return (
    <div className={cn("bg-[#F1F8FF] relative lgx:h-screen70", className)}>
      <div className="w-full max-w-[1500px] max-lgx:mp-8 lgx:min-h-full absolute max-lgx:relative h-auto left-1/2 transform -translate-x-1/2 px-4 flex flex-col items-start justify-center gap-8">
        <div className="flex flex-col gap-4 w-full max-w-[400px]">
          <h1 className="text-[#009FE3] text-5xl font-bold leading-[55px] break-words custom-hyphens">
            Курс по <br /> Медсестринству
          </h1>

          <p className="text-[#494949] font-medium">
            Курс подготовит вас к работе в сфере медсестринства. Вы научитесь основам ухода за пациентами, оказания первой помощи и диагностике распространенных заболеваний.
          </p>
        </div>
        <Request title="Записаться на курс" />
      </div>

      {/* Контейнер для изображения */}
      <div className="absolute right-0 top-0 bottom-0 overflow-hidden h-full max-lgx:hidden w-[50%] flex justify-end items-center">
        <Image
          src={"/images/courses/banner/nurse.png"} // оставил изображение, чтобы потом можно было заменить
          alt="Courses Banner Photo"
          layout="intrinsic" // сохраняет пропорции
          width={2000}
          height={2000}
          quality={100}
          className="min-h-full w-auto object-contain"
        />
      </div>
      <Image
        src={"/images/courses/banner/nurse.png"}
        alt="Courses Banner Photo"
        layout="intrinsic" // сохраняет пропорции
        width={2000}
        height={2000}
        quality={100}
        className="h-auto w-full mt-8 lgx:hidden"
      />
    </div>
  );
};
