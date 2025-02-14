import React from "react";
import { cn } from "@lib/utils";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Request } from "../../Request/Request";

interface Props {
  className?: string;
}

export const About = ({ className }: Props) => {
  const t = useTranslations("Main.About"); // Указываем пространство имен для переводов

  return (
    <section id="course" className={cn("bg-white py-24", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto flex gap-8 max-lgx:flex-col">
        <div className="flex-1 space-y-4">
          <h2
            className="text-4xl mdx:text-5xl max-mdx:hidden font-bold text-black lineHeight30"
            style={{ lineHeight: "60px" }}
          >
            {t("title")} <br />{" "}
            <span className="text-[#25A8F5]">{t("subtitle")}</span>
          </h2>
          <p className="text-xl max-mdx:hidden font-medium">{t("description")}</p>
          <Request className="max-mdx:hidden" title={t("requestTitle")} />
        </div>
        <div className="flex-1">
          <h2
            className="text-3xl mdx:hidden font-bold text-black lineHeight30"
            style={{ lineHeight: "60px" }}
          >
            {t("title")}{" "}
            <span className="text-[#25A8F5]">{t("subtitle")}</span>
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
          <p className="text-xl mdx:hidden mt-8 font-medium">{t("description")}</p>
          <Request className="mdx:hidden mt-8" title={t("requestTitle")} />
        </div>
      </div>
    </section>
  );
};
