
import React from "react";
import { cn } from "@lib/utils";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface Props {
  className?: string;
}

type Advantage = {
  titleKey: string;
  descriptionKey: string;
  iconSrc: string;
  altKey: string;
  order: {
    base: number;
    mdx?: number;
    lgx?: number;
  };
};

const advantages: Advantage[] = [
  {
    titleKey: "modernEquipment.title",
    descriptionKey: "modernEquipment.description",
    iconSrc: "/images/main/advantages/image (2).png",
    altKey: "modernEquipment.alt",
    order: { base: 1 },
  },
  {
    titleKey: "individualApproach.title",
    descriptionKey: "individualApproach.description",
    iconSrc: "/images/main/advantages/IMG_2170 (1).png",
    altKey: "individualApproach.alt",
    order: { base: 3, mdx: 4, lgx: 3 },
  },
  {
    titleKey: "experiencedSpecialists.title",
    descriptionKey: "experiencedSpecialists.description",
    iconSrc: "/images/main/advantages/Rectangle 4.png",
    altKey: "experiencedSpecialists.alt",
    order: { base: 5, lgx: 6 },
  },
  {
    titleKey: "comfortableConditions.title",
    descriptionKey: "comfortableConditions.description",
    iconSrc: "/images/main/advantages/Advantage.png",
    altKey: "comfortableConditions.alt",
    order: { base: 7, mdx: 8, lgx: 7 },
  },
];

export const Advantages = ({ className }: Props) => {
  const t = useTranslations("Advantages");

  return (
    <div className={cn("py-24", className)}>
      <div className="w-full max-w-[1500px] px-4 space-y-12 mx-auto">
        <h2 className="text-4xl font-bold">{t("title")}</h2>

        {/* Responsive grid layout */}
        <div className="gap-[12px] grid grid-cols-1 mdx:grid-cols-2 lgx:grid-cols-4">
          {advantages.map((advantage, index) => (
            <React.Fragment key={index}>
              <div
                className={`border rounded-3xl flex flex-col items-start justify-center gap-8 px-[16px] py-[16px] order-${advantage.order.base} ${
                  advantage.order.mdx
                    ? `mdx:order-${advantage.order.mdx}`
                    : ""
                } ${
                  advantage.order.lgx
                    ? `lgx:order-${advantage.order.lgx}`
                    : ""
                }`}
              >
                <h3 className="font-medium text-2xl leading-6">
                  {t(`${advantage.titleKey}`)}
                </h3>
                <p className="text-lg leading-5 text-[#333]">
                  {t(`${advantage.descriptionKey}`)}
                </p>
              </div>
              <div
                className={`order-${advantage.order.base + 1} ${
                  advantage.order.mdx
                    ? `mdx:order-${advantage.order.mdx + 1}`
                    : ""
                } ${
                  advantage.order.lgx
                    ? `lgx:order-${advantage.order.lgx + 1}`
                    : ""
                }`}
              >
                <Image
                  src={advantage.iconSrc}
                  quality={100}
                  layout="responsive"
                  width={500}
                  height={500}
                  alt={t(`${advantage.altKey}`)}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
