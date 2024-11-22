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
    title: "Основы косметологии и диагностика кожи",
    description: "Изучение основ косметологии, анатомии кожи и методов диагностики.",
    points: [
      "Введение в косметологию",
      "Строение и функции кожи",
      "Методы диагностики кожи",
      "Подбор ухода в зависимости от типа кожи",
      "Изучение факторов, влияющих на состояние кожи",
      "Оценка кожных проблем и рекомендаций по их устранению",
      "Гигиенические аспекты работы косметолога",
      "Этика и профессиональное общение с клиентами"
    ],
  },
  {
    title: "Методы очищения и косметические процедуры",
    description: "Практика различных техник очищения и ухода за кожей лица.",
    points: [
      "Основы легкого и глубокого очищения кожи",
      "Приготовление питательных кремов",
      "Создание косметических средств в домашних условиях",
      "Использование парафиновых масок для лица",
      "Методы механической и химической чистки",
      "Приготовление лечебных кремов",
      "Работа с кожными проблемами: пигментация, акне",
      "Правильный выбор и применение SPF-защиты"
    ],
  },
  {
    title: "Эстетические процедуры и профессиональные техники",
    description: "Изучение техник массажа, масок и других эстетических процедур.",
    points: [
      "Основы косметического массажа лица",
      "Пилинг и его виды",
      "Приготовление и использование альгинатных масок",
      "Скатка и брашинг лица",
      "Использование лечебных масок для домашнего ухода",
      "Работа с чувствительными зонами кожи",
      "Процедуры для снятия усталости и омоложения кожи",
      "Подготовка средств для массажа и процедур"
    ],
  },
  {
    title: "Инъекционные процедуры и инновационные методы",
    description: "Изучение инъекционных методик и современных технологий в косметологии.",
    points: [
      "Введение в инъекционные методики (ботокс, филлеры)",
      "Основы липолитической терапии",
      "Техника карбокситерапии",
      "Работа с папилломами и их удаление",
      "Мезотерапия и её применение",
      "Использование космецевтических средств",
      "Лечение и профилактика акне и шрамов",
      "Завершение курса и рекомендации по уходу"
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
      <h4 className="text-4xl font-medium">20 дней</h4>
      <p className="text-lg">длительность курса</p>
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
      Узнать стоимость
    </a>

    <div className="absolute -bottom-12 -right-2">
      <Image src={"/images/application/Mask group.svg"} width={1000} height={1000} alt="Application Icon on Background" className="max-h-[200px] max-w-[200px] h-full w-full" />
    </div>
  </div>
);

export const ModulesCosm = ({ className }: Props) => (
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
