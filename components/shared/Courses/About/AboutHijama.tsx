import React from "react";
import { cn } from "@lib/utils";
import Image from "next/image";
import { Request } from "../../Request/Request";

interface Props {
  className?: string;
}

export const AboutHijama = ({ className }: Props) => {
  return (
    <section id="course" className={cn("bg-white py-24", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto flex gap-8 max-lgx:flex-col">
        <div className="flex-1 space-y-4">
          <h2
            className="text-4xl mdx:text-5xl max-mdx:hidden font-bold text-black lineHeight30"
            style={{ lineHeight: "60px" }}
          >
            О курсе <br /> <span className="text-[#25A8F5]">Хижома и зулук</span>
          </h2>
          <p className="text-xl max-mdx:hidden font-medium">
            Курс &quot;Хижома и зулук&quot; предназначен для тех, кто хочет глубоко изучить традиционные методы лечения с использованием хиджамы и пиявок. Этот курс охватывает как теоретические основы, так и практические методы, которые помогут вам правильно применять хиджаму и зулук в лечении различных заболеваний. 
          </p>
          <p className="text-xl max-mdx:hidden font-medium">
            В рамках курса вы узнаете, как определять ключевые точки на теле, разрабатывать индивидуальные программы для каждого пациента, а также получите знания о том, как сочетать хиджаму с другими методами оздоровления. По окончании курса вы получите сертификат и специальное пособие по точкам для хиджамы.
          </p>
          <Request className=" max-mdx:hidden" title="Записаться на курс" />
        </div>
        <div className="flex-1">
          <h2
            className="text-3xl mdx:hidden font-bold text-black lineHeight30"
            style={{ lineHeight: "60px" }}
          >
            О курсе <span className="text-[#25A8F5]">Хижома и зулук</span>
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
            Курс &quot;Хижома и зулук&quot; предназначен для тех, кто хочет глубоко изучить традиционные методы лечения с использованием хиджамы и пиявок. Этот курс охватывает как теоретические основы, так и практические методы, которые помогут вам правильно применять хиджаму и зулук в лечении различных заболеваний.
          </p>
          <p className="text-xl mdx:hidden font-medium">
            В рамках курса вы узнаете, как определять ключевые точки на теле, разрабатывать индивидуальные программы для каждого пациента, а также получите знания о том, как сочетать хиджаму с другими методами оздоровления. Курс состоит из четырех модулей, каждый из которых направлен на всестороннее изучение различных аспектов хиджамы и зулука. По окончании курса вы получите сертификат и специальное пособие по точкам для хиджамы.
          </p>
          <Request className="mdx:hidden mt-8" title="Записаться на курс" />
        </div>
      </div>
    </section>
  );
};
