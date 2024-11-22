import React from "react";
import { cn } from "@lib/utils";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
// import { Request } from "../../Request/Request";

interface Props {
  className?: string;
}

interface ModuleData {
  title: string;
  description: string;
  points: string[];
}

const MODULES: ModuleData[] = [
  {
    title: "Основы медсестринства и анатомия",
    description: "Изучение основ медсестринства, истории и анатомии для понимания работы человеческого тела.",
    points: [
      "История и значение профессии медсестры",
      "Анатомия и физиология человека",
      "Изучение структуры органов и систем тела",
      "Понимание ролей медсестры в медицинской практике",
      "Основные принципы гигиены и инфекционного контроля",
      "Подготовка к измерению жизненно важных показателей",
      "Организация медицинской помощи и уход за пациентами",
      "Общение с пациентами и этика в медицине"
    ],
  },
  {
    title: "Измерение жизненно важных показателей и первая помощь",
    description: "Практика измерения артериального давления, пульса и оказания первой помощи.",
    points: [
      "Методы измерения артериального давления",
      "Измерение пульса и частоты сердечных сокращений",
      "Первая помощь при гипертонии и гипотонии",
      "Оказание помощи при гипертермии (повышенной температуре)",
      "Диагностика и лечение анемии",
      "Первая помощь при сердечно-сосудистых заболеваниях",
      "Уход за пациентами с дыхательными заболеваниями",
      "Применение медицинской аптечки в домашних условиях"
    ],
  },
  {
    title: "Инъекции и лечебные процедуры",
    description: "Обучение инъекциям и различным медицинским процедурам, включая венозные и внутримышечные инъекции.",
    points: [
      "Техника выполнения венозных и внутримышечных инъекций",
      "Подкожные инъекции и инъекции в область пупка",
      "Использование банок и горчичников",
      "Применение клизмы для лечения различных заболеваний",
      "Помощь при мигрени и радикулите",
      "Оказание помощи при ожогах и травмах",
      "Рекомендации по введению лекарственных препаратов",
      "Правила использования медицинского оборудования"
    ],
  },
  {
    title: "Специальные медицинские состояния и уход за пациентами",
    description: "Изучение методов диагностики заболеваний и оказания помощи при особых состояниях.",
    points: [
      "Диагностика заболеваний по симптомам и органам",
      "Первая помощь при диабетической коме",
      "Оказание помощи при анафилактическом шоке",
      "Первая помощь при укусах и укусах животных",
      "Уход за пациентами с женскими заболеваниями",
      "Методы спасения утопающих",
      "Роль медсестры в поддержании здоровья",
      "Итоговый экзамен и сертификация"
    ],
  }
];

const ModuleContent = ({ module }: { module: ModuleData }) => (
  <div className="border border-[#DFDFDF] w-[100%] p-8 rounded-lg h-full">
    <p className="text-[#009FE3] font-semibold">{module.title}</p>
    <h3 className="text-3xl font-bold mt-4">{module.title}</h3>
    <p className="mt-2 font-medium">{module.description}</p>
    <hr className="my-8 border-2" />
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {module.points.map((point, index) => (
        <li key={index} className="flex items-start gap-2">
          <img src={"/svg/courses/module/check.svg"} alt="Check" className="w-6 h-6" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ModuleSidebar = () => (
  <div className="w-full xl:w-1/3 relative overflow-hidden bg-[#009FE3] text-white p-8 flex flex-col gap-8 rounded-lg shadow-lg min-h-[310px]">
    <div>
      <h4 className="text-4xl font-medium">1 месяц</h4>
      <p className="text-lg">длительность курса</p>
    </div>
    <hr />
    {/* <div>
      <h4 className="text-4xl font-medium">2 000 000 сум</h4>
      <p className="text-lg">стоимость курса</p>
    </div> */}
    {/* <Request title="Записаться на курс" className="self-start bg-white text-[#009FE3] font-semibold py-4 text-xl px-6 rounded-full hover:bg-gray-100" /> */}
    <a
      href="tel:+998777026688"
      className="self-start bg-white text-[#009FE3] font-semibold py-4 text-xl px-6 rounded-full hover:bg-gray-100 z-[9999] w-full max-w-[280px] flex justify-center items-center"
    >
      Узнать стоимость
    </a>
    <div className="absolute -bottom-12 -right-2">
      <Image src={"/images/application/Mask group.svg"} width={1000} height={1000} alt="Application Icon on Background" className="max-h-[200px] max-w-[200px] h-full w-full" />
    </div>
  </div>
);

export const ModulesNurse = ({ className }: Props) => (
  <div className={cn("py-12", className)}>
    <div className="w-full max-w-[1500px] mx-auto px-4 flex flex-col gap-8 h-full">
      <h2 className="text-4xl font-semibold">Программа курса</h2>
      <div className="w-full">
        <Tabs defaultValue="module1" className="w-full space-y-8">
          <TabsList className="w-full flex justify-between p-2 border-b border-gray-300 max-xl:overflow-x-auto max-xl:no-scrollbar max-xl:whitespace-nowrap">
            {MODULES.map((_, index) => (
              <TabsTrigger
                key={index}
                className="flex-shrink-0 h-full px-4 py-4 text-lg font-semibold data-[state=active]:bg-[#009FE3] data-[state=active]:text-white data-[state=inactive]:bg-transparent data-[state=inactive]:text-black xl:max-w-[350px] xl:w-full"
                value={`module${index + 1}`}
              >
                Модуль {index + 1}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="w-full h-full block max-md:h-[1300px] h-[900px] relative xl:h-[500px]">
            {MODULES.map((module, index) => (
              <TabsContent key={index} className="flex gap-4 absolute inset-0 flex-col xl:flex-row" value={`module${index + 1}`}>
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
