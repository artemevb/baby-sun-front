import React from "react";
import { cn } from "@lib/utils";
import { useTranslations } from "next-intl";

interface Props {
  className?: string;
}

interface ServiceData {
  title: string;
  description: string;
  price: string;
}

const SERVICES: ServiceData[] = [
  {
    title: "services.service1.title",
    description: "services.service1.description",
    price: "services.service1.price",
  },
  {
    title: "services.service2.title",
    description: "services.service2.description",
    price: "services.service2.price",
  },
  {
    title: "services.service3.title",
    description: "services.service3.description",
    price: "services.service3.price",
  },
  {
    title: "services.service4.title",
    description: "services.service4.description",
    price: "services.service4.price",
  },
  {
    title: "services.service5.title",
    description: "services.service5.description",
    price: "services.service5.price",
  },
  {
    title: "services.service6.title",
    description: "services.service6.description",
    price: "services.service6.price",
  },
  {
    title: "services.service7.title",
    description: "services.service7.description",
    price: "services.service7.price",
  },
  {
    title: "services.service8.title",
    description: "services.service8.description",
    price: "services.service8.price",
  },
  {
    title: "services.service9.title",
    description: "services.service9.description",
    price: "services.service9.price",
  },
  {
    title: "services.service10.title",
    description: "services.service10.description",
    price: "services.service10.price",
  },
  {
    title: "services.service11.title",
    description: "services.service11.description",
    price: "services.service11.price",
  }
];

export const List = ({ className }: Props) => {
  const t = useTranslations("ListSpaWomen");

  return (
    <div className={cn("py-24", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto space-y-8">
        <h1 className="text-5xl max-mdx:text-3xl font-bold">{t("title")}</h1>
        <p className="font-medium text-[#494949] w-full max-w-[1100px]">
          {t("description")}
        </p>
        <div className="grid w-full grid-cols-1 mdx:grid-cols-2 lgx:grid-cols-3 gap-4">
          {SERVICES.map((item, index) => (
            <div
              key={index}
              className="p-6 flex flex-col gap-8 justify-between rounded-2xl bg-[#F1F4F8]"
            >
              <div className="flex flex-col gap-2">
                <h4 className="text-xl font-semibold">{t(item.title)}</h4>
                <p className="text-[#90A0B5]">{t(item.description)}</p>
              </div>
              <p className="text-xl text-[#009FE3] font-semibold">{t(item.price)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
