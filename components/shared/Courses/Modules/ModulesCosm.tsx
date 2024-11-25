import React from "react";
import { cn } from "@lib/utils";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import { useTranslations } from "next-intl";

interface Props {
  className?: string;
}

interface ModuleData {
  title: string;       // Ключ для заголовка модуля
  description: string; // Ключ для описания модуля
  points: string[];    // Ключи для пунктов
}

const MODULES: ModuleData[] = [
  {
    title: "module1.title",
    description: "module1.description",
    points: [
      "module1.points.0",
      "module1.points.1",
      "module1.points.2",
      "module1.points.3",
      "module1.points.4",
      "module1.points.5",
      "module1.points.6",
      "module1.points.7"
    ],
  },
  {
    title: "module2.title",
    description: "module2.description",
    points: [
      "module2.points.0",
      "module2.points.1",
      "module2.points.2",
      "module2.points.3",
      "module2.points.4",
      "module2.points.5",
      "module2.points.6",
      "module2.points.7"
    ],
  },
  {
    title: "module3.title",
    description: "module3.description",
    points: [
      "module3.points.0",
      "module3.points.1",
      "module3.points.2",
      "module3.points.3",
      "module3.points.4",
      "module3.points.5",
      "module3.points.6",
      "module3.points.7"
    ],
  },
  {
    title: "module4.title",
    description: "module4.description",
    points: [
      "module4.points.0",
      "module4.points.1",
      "module4.points.2",
      "module4.points.3",
      "module4.points.4",
      "module4.points.5",
      "module4.points.6",
      "module4.points.7"
    ],
  }
];

export const ModulesCosm = ({ className }: Props) => {
  const t = useTranslations("ModulesCosm");

  const ModuleContent = ({ module }: { module: ModuleData }) => (
    <div className="border border-[#DFDFDF] w-[100%] p-8 rounded-lg h-full">
      <p className="text-[#009FE3] font-semibold">{t(module.title)}</p>
      <h3 className="text-3xl font-bold mt-4">{t(module.title)}</h3>
      <p className="mt-2 font-medium">{t(module.description)}</p>
      <hr className="my-8 border-2" />
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {module.points.map((pointKey, index) => (
          <li key={index} className="flex items-start gap-2">
            <img src={"/svg/courses/module/check.svg"} alt="Check" className="w-6 h-6" />
            <span>{t(pointKey)}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const ModuleSidebar = () => (
    <div className="w-full xl:w-1/3 relative overflow-hidden bg-[#009FE3] text-white p-8 flex flex-col gap-8 rounded-lg shadow-lg min-h-[310px]">
      <div>
        <h4 className="text-4xl font-medium">{t("Duration")}</h4>
        <p className="text-lg">{t("DurationText")}</p>
      </div>
      <hr />
      {/* <div>
        <h4 className="text-4xl font-medium">500 у.е.</h4>
        <p className="text-lg">стоимость курса</p>
      </div> */}
      <a
        href="tel:+998777026688"
        className="self-start bg-white text-[#009FE3] font-semibold py-4 text-xl px-6 rounded-full hover:bg-gray-100 z-[9999]"
      >
        {t("FindOutCost")}
      </a>

      <div className="absolute -bottom-12 -right-2">
        <Image
          src={"/images/application/Mask group.svg"}
          width={1000}
          height={1000}
          alt="Application Icon on Background"
          className="max-h-[200px] max-w-[200px] h-full w-full"
        />
      </div>
    </div>
  );

  return (
    <div className={cn("py-12", className)}>
      <div className="w-full max-w-[1500px] mx-auto px-4 flex flex-col gap-8 h-full">
        <h2 className="text-4xl font-semibold">{t("CourseProgram")}</h2>
        <div className="w-full">
          <Tabs defaultValue="module1" className="w-full space-y-8">
            <TabsList className="w-full flex justify-between p-2 border-b border-gray-300 max-xl:overflow-x-auto max-xl:no-scrollbar max-xl:whitespace-nowrap">
              {MODULES.map((_, index) => (
                <TabsTrigger
                  key={index}
                  className="flex-shrink-0 h-full px-4 py-4 text-lg font-semibold data-[state=active]:bg-[#009FE3] data-[state=active]:text-white data-[state=inactive]:bg-transparent data-[state=inactive]:text-black xl:max-w-[350px] xl:w-full"
                  value={`module${index + 1}`}
                >
                  {t("Module")} {index + 1}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="w-full h-full block max-md:h-[1300px] h-[900px] relative xl:h-[500px]">
              {MODULES.map((module, index) => (
                <TabsContent
                  key={index}
                  className="flex gap-4 absolute inset-0 flex-col xl:flex-row"
                  value={`module${index + 1}`}
                >
                  <ModuleContent module={module} />
                  <ModuleSidebar />
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
