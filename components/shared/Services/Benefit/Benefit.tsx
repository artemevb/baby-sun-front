import React from "react";
import { cn } from "@lib/utils";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface Props {
  className?: string;
}

interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

const ITEMS: BenefitItem[] = [
  {
    icon: "/svg/services/benefits/1.svg",
    title: "benefit1.title",
    description: "benefit1.description",
  },
  {
    icon: "/svg/services/benefits/4operac.svg",
    title: "benefit2.title",
    description: "benefit2.description",
  },
  {
    icon: "/svg/services/benefits/3operac.svg",
    title: "benefit3.title",
    description: "benefit3.description",
  },
  {
    icon: "/svg/services/benefits/2operac.svg",
    title: "benefit4.title",
    description: "benefit4.description",
  },
];

export const Benefit = ({ className }: Props) => {
  const t = useTranslations("Benefit");

  return (
    <div className={cn("py-24", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto flex flex-col gap-8">
        <h2 className="text-4xl font-semibold">{t("sectionTitle")}</h2>
        <div className="grid w-full grid-cols-1 mdx:grid-cols-2 lgx:grid-cols-4 gap-4">
          {ITEMS.map((item, index) => (
            <div
              key={index}
              className="border border-[#DFDFDF] rounded-3xl p-6 flex flex-col gap-6"
            >
              <Image
                src={item.icon}
                width={100}
                height={100}
                alt={t(`benefitIconAlt`, { index: index + 1 })}
                className="w-full max-w-10 h-full max-h-10"
              />
              <h4 className="text-2xl font-semibold">{t(item.title)}</h4>
              <p className="font-medium">{t(item.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
