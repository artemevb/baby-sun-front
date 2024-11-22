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
    title: "Основы ШРОТ-терапии",
    description: "Введение в основы ШРОТ-терапии, анатомию и физиологию позвоночника, базовые принципы диагностики сколиоза.",
    points: [
      "Введение в методику",
      "Изучение базовых принципов лечения сколиоза",
      "Особенности анатомии и физиологии позвоночника",
      "Основы диагностики и анализ искривлений позвоночника",
      "Подготовка пациента к началу курса",
      "Обучение первой группе упражнений на дыхание",
      "Обзор методик коррекции осанки"
    ],
  },
  {
    title: "Углубленное изучение техник ШРОТ-терапии",
    description: "Техники и упражнения для глубокого понимания и работы с искривлениями позвоночника.",
    points: [
      "Продвинутая техника дыхания",
      "Постановка целей и задач для коррекции осанки",
      "Разработка индивидуальных программ упражнений",
      "Методика работы с грудным отделом позвоночника",
      "Основы безопасного выполнения упражнений",
      "Принципы и методы контроля прогресса пациента",
      "Работа с поясничным отделом позвоночника",
      "Особенности работы с подростками и детьми"
    ],
  },
  {
    title: "Практическое применение ШРОТ-терапии",
    description: "Практические занятия с фокусом на построение корректных схем терапии и обучения пациентов техникам поддержания осанки.",
    points: [
      "Анализ ошибок и корректировка упражнений",
      "Методы работы с тяжелыми случаями сколиоза",
      "Обучение пациентов для самостоятельной коррекции осанки",
      "Использование различных инструментов и оборудования для упражнений",
      "Техники расслабления и восстановления мышц",
      "Психологический подход к работе с пациентами",
      "Создание и корректировка программы занятий",
      "Принципы устойчивости результатов и поддержание здоровья позвоночника"
    ],
  },
  {
    title: "Заключительный этап и оценка прогресса",
    description: "Завершение курса с акцентом на оценку прогресса, поддержание результатов и разработку долгосрочных рекомендаций для пациентов.",
    points: [
      "Методы оценки прогресса и результатов терапии",
      "Поддержание полученных результатов на длительный срок",
      "Разработка рекомендаций для повседневной жизни пациентов",
      "Обучение пациентов упражнениям для самостоятельной работы",
      "Принципы и правила консультаций после курса",
      "Работа с группами и проведение лекций для коллег",
      "Анализ исследований и статистики в области лечения сколиоза",
      "Итоговая аттестация и сертификация"
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
      <h4 className="text-4xl font-medium">4 месяца</h4>
      <p className="text-lg">длительность курса</p>
    </div>
    <hr />
    {/* <div>
      <h4 className="text-4xl font-medium">2 000 у.е.</h4>
      <p className="text-lg">стоимость курса</p>
    </div> */}
    {/* <Request title="Записаться на курс" className="self-start bg-white text-[#009FE3] font-semibold py-4 text-xl px-6 rounded-full hover:bg-gray-100" /> */}
    <a
      href="tel:+998777026688"
      className="self-start bg-white text-[#009FE3] font-semibold py-4 text-xl px-6 rounded-full hover:bg-gray-100 z-[9999]"
    >
      Узнать стоимость
    </a>
    <div className="absolute -bottom-12 -right-2">
      <Image src={"/images/application/Mask group.svg"} width={1000} height={1000} alt="Application Icon on Background" className="max-h-[200px] max-w-[200px] h-full w-full" />
    </div>
  </div>
);

export const Modules = ({ className }: Props) => (
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

          <div className="w-full h-full block max-md:h-[1300px] h-[700px] relative xl:h-[500px]">
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
