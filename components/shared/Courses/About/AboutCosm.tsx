import React from "react";
import { cn } from "@lib/utils";
import Image from "next/image";
import { Request } from "../../Request/Request";

interface Props {
  className?: string;
}

export const AboutCosm = ({ className }: Props) => {
  return (
    <section id="course" className={cn("bg-white py-24", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto flex gap-8 max-lgx:flex-col">
        <div className="flex-1 space-y-4">
          <h2
            className="text-4xl mdx:text-5xl max-mdx:hidden font-bold text-black lineHeight30"
            style={{ lineHeight: "60px" }}
          >
            О курсе <br /> <span className="text-[#25A8F5]">Косметология</span>
          </h2>
          <p className="text-xl max-mdx:hidden font-medium">
            Курс &quot;Косметология&quot; предназначен для тех, кто хочет освоить базовые и продвинутые методы ухода за кожей, разработки косметических средств, а также процедур по улучшению состояния кожи. Вы научитесь техникам массажа, подготовке различных косметических масок и кремов, а также современным процедурам, таким как мезотерапия и ботокс.
          </p>
          <p className="text-xl max-mdx:hidden font-medium">
            Курс длится 20 дней и включает как теоретические занятия, так и практическую работу, что позволяет участникам сразу применять полученные знания. По окончании курса вы получите сертификат и необходимые навыки для работы в сфере косметологии.
          </p>
          <Request className=" max-mdx:hidden" title="Записаться на курс" />
        </div>
        <div className="flex-1">
          <h2
            className="text-3xl mdx:hidden font-bold text-black lineHeight30"
            style={{ lineHeight: "60px" }}
          >
            О курсе <span className="text-[#25A8F5]">Косметология</span>
          </h2>
          <Image
            src={"/images/courses/about/desktop.png"}
            width={1000}
            height={1000}
            alt="About Image"
            quality={100}
            className="w-full max-lgx:hidden"
          />
          <Image
            src={"/images/courses/about/mobile.png"}
            width={1000}
            height={1000}
            alt="About Image"
            quality={100}
            className="w-full lgx:hidden mt-6"
          />
          <p className="text-xl mdx:hidden mt-8 font-medium">
            Курс длится 20 дней и включает как теоретические занятия, так и практическую работу, что позволяет участникам сразу применять полученные знания. По окончании курса вы получите сертификат и необходимые навыки для работы в сфере косметологии.
          </p>
          <Request className="mdx:hidden mt-8" title="Записаться на курс" />
        </div>
      </div>
    </section>
  );
};
