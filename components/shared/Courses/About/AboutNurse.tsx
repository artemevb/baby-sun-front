import React from "react";
import { cn } from "@lib/utils";
import Image from "next/image";
import { Request } from "../../Request/Request";

interface Props {
  className?: string;
}

export const AboutNurse = ({ className }: Props) => {
  return (
    <section id="course" className={cn("bg-white py-24", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto flex gap-8 max-lgx:flex-col">
        <div className="flex-1 space-y-4">
          <h2
            className="text-4xl mdx:text-5xl max-mdx:hidden font-bold text-black lineHeight30"
            style={{ lineHeight: "60px" }}
          >
            О курсе <br /> <span className="text-[#25A8F5]">Хамширалик</span>
          </h2>
          <p className="text-xl max-mdx:hidden font-medium">
            Курс &quot;Хамширалик&quot; (Медсестринство) подготовлен для тех, кто стремится овладеть основами медицинского ухода и первой помощи. В рамках курса рассматриваются важные темы, начиная с анатомии и методов измерения жизненно важных показателей, и заканчивая техниками оказания помощи при различных заболеваниях и состояниях.
          </p>
          <p className="text-xl max-mdx:hidden font-medium">
            Под руководством квалифицированных специалистов студенты получат теоретические знания и практические навыки, которые помогут им работать в сфере медицинского ухода. Курс рассчитан на один месяц и завершится итоговым экзаменом, после которого участники получат сертификат.
          </p>
          <Request className=" max-mdx:hidden" title="Записаться на курс" />
        </div>
        <div className="flex-1">
          <h2
            className="text-3xl mdx:hidden font-bold text-black lineHeight30"
            style={{ lineHeight: "60px" }}
          >
            О курсе <span className="text-[#25A8F5]">Хамширалик</span>
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
            Курс &quot;Хамширалик&quot; (Медсестринство) подготовлен для тех, кто стремится овладеть основами медицинского ухода и первой помощи. В рамках курса рассматриваются важные темы, начиная с анатомии и методов измерения жизненно важных показателей, и заканчивая техниками оказания помощи при различных заболеваниях и состояниях.
          </p>
          <p className="text-xl mdx:hidden font-medium">
            Курс рассчитан на один месяц и завершится итоговым экзаменом, после которого участники получат сертификат. Участникам курса будет доступна поддержка опытных инструкторов и обучение по самым актуальным медицинским темам.
          </p>
          <Request className="mdx:hidden mt-8" title="Записаться на курс" />
        </div>
      </div>
    </section>
  );
};
