import React from "react";
import { cn } from "@lib/utils";

interface Props {
  className?: string;
}

const services = [
    {
        title: "Косметологический осмотр",
        description: "Комплексная диагностика состояния кожи для подбора оптимального ухода",
        price: "Индивидуальная цена",
    },
    {
        title: "Пилинг лица",
        description: "Очищающая процедура для обновления кожи и улучшения её текстуры",
        price: "Индивидуальная цена",
    },
    {
        title: "Массаж лица",
        description: "Расслабляющий массаж для улучшения кровообращения и повышения тонуса кожи",
        price: "Индивидуальная цена",
    },
    {
        title: "Чистка лица",
        description: "Глубокая чистка кожи лица для удаления загрязнений и улучшения её состояния",
        price: "Индивидуальная цена",
    },
    {
        title: "Карбокситерапия",
        description: "Процедура для насыщения кожи углекислым газом, что улучшает её цвет и упругость",
        price: "Индивидуальная цена",
    }
];

export const List = ({ className }: Props) => {
  return (
    <div className={cn("py-24", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto space-y-8">
        <h1 className="text-5xl max-mdx:text-3xl font-bold">Косметология</h1>
        <p className="font-medium text-[#494949] w-full max-w-[1100px]">
          Профессиональный косметолог предлагает комплексные процедуры для ухода за кожей лица, которые помогут улучшить её состояние и вернуть сияющий вид.
        </p>
        <div className="grid w-full grid-cols-1 mdx:grid-cols-2 lgx:grid-cols-3 gap-4">
            {
              services.map((item, index) => (
                <div key={index} className="p-6 flex flex-col gap-8 justify-between rounded-2xl bg-[#F1F4F8]">
                  <div className="flex flex-col gap-2">
                    <h4 className="text-xl font-semibold">
                      {item.title}
                    </h4>
                    <p className="text-[#90A0B5]">
                      {item.description}
                    </p>
                  </div>
                  <p className="text-xl text-[#009FE3] font-semibold">
                    {item.price}
                  </p>
                </div>
              ))
            }
        </div>
      </div>
    </div>
  );
};
