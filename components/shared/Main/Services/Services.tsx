import React from "react";
import { cn } from "@lib/utils";
import { Link } from "@/i18n/routing";
import Image from "next/image";
// import { Button } from "@/components/ui";
import { useTranslations } from "next-intl";

interface Props {
  className?: string;
}

type Card = {
  icon: string;
  titleKey: string;
  slug: string;
};

const ServiceCard = ({ card }: { card: Card }) => {
  const t = useTranslations("Services");

  return (
    <Link
      href={card.slug}
      className="bg-[#F1F4F8] p-6 rounded-xl space-y-12 shadow-md hover:shadow-lg transition-shadow flex flex-col items-start"
    >
      <div className="w-full h-full max-w-10 max-h-10 flex items-center">
        <Image
          src={card.icon}
          width={100}
          height={100}
          alt={t("serviceCardAlt", { service: t(`services.${card.titleKey}`) })}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-1">
        <h3 className="text-xl font-semibold">{t(`services.${card.titleKey}`)}</h3>
        <p className="text-[#009FE3] flex gap-3 items-center font-semibold hover:underline">
          {t("goTo")}{" "}
          <Image
            src={"/svg/main/services/right-arrow.svg"}
            width={100}
            height={100}
            alt={t("arrowAlt")}
            className="w-2"
          />
        </p>
      </div>
    </Link>
  );
};

export const Services = ({ className }: Props) => {
  const t = useTranslations("Services");

  const cards: Card[] = [
    {
      icon: "/svg/main/services/surgery.svg",
      titleKey: "surgery",
      slug: "/services/surgery",
    },
    {
      icon: "/svg/main/services/orthopedy.svg",
      titleKey: "orthopedics",
      slug: "/services/orthopedics",
    },
    {
      icon: "/svg/main/services/spa.svg",
      titleKey: "womenSpa",
      slug: "/services/women-spa",
    },
    {
      icon: "/svg/main/services/cosmetology.svg",
      titleKey: "cosmetology",
      slug: "/services/cosmetology",
    },
    {
      icon: "/svg/main/services/guidance_massage.svg",
      titleKey: "childMassage",
      slug: "/services/child-massage",
    },
    // {
    //   icon: "/svg/main/services/scissors.svg",
    //   titleKey: "pediatrics",
    //   slug: "/services/pediatrics",
    // },
  ];

  return (
    <div className={cn("py-24", className)}>
      <div className="w-full max-w-[1500px] px-4 flex flex-col gap-8 mx-auto">
        <h2 className="text-4xl font-bold">{t("ourServices")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <ServiceCard key={index} card={card} />
          ))}
        </div>
        {/* <div className="w-full flex items-center justify-center">
          <Link href={"/services"}>
            <Button className="px-8 rounded-full py-4 text-xl">
              Показать все услуги
            </Button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};