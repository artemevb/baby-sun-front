import React from "react";
import { cn } from "@lib/utils";

interface Props {
  className?: string;
}

const services = [
    {
        title: "Массаж для детей",
        description: "Профессиональный массаж для детей от 1 месяца до 15 лет для мальчиков и до 18 лет для девочек",
        price: "Индивидуальная цена",
    },
    {
        title: "Парафиновая терапия",
        description: "Терапия с использованием парафина для улучшения кровообращения и снятия мышечного напряжения",
        price: "Индивидуальная цена",
    },
    {
        title: "Электрофорез",
        description: "Метод физиотерапии, при котором лекарственные вещества вводятся через кожу с помощью электрического тока",
        price: "Индивидуальная цена",
    },
    {
        title: "Гидрованна",
        description: "Водные процедуры для релаксации и укрепления иммунной системы",
        price: "Индивидуальная цена",
    },
    {
        title: "Дарсонваль",
        description: "Аппаратная процедура для улучшения кровообращения и стимуляции обменных процессов в коже",
        price: "Индивидуальная цена",
    },
    {
        title: "УВЧ-терапия",
        description: "Высокочастотная терапия для снятия воспалений и ускорения процесса заживления",
        price: "Индивидуальная цена",
    },
    {
        title: "Процедура против глистов",
        description: "Комплекс процедур, направленных на избавление от паразитов у детей",
        price: "Индивидуальная цена",
    },
    {
        title: "Лечение энуреза",
        description: "Процедуры для лечения недержания мочи у детей",
        price: "Индивидуальная цена",
    }
];

export const List = ({ className }: Props) => {
  return (
    <div className={cn("py-24", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto space-y-8">
        <h1 className="text-5xl max-mdx:text-3xl font-bold">Детский массаж</h1>
        <p className="font-medium text-[#494949] w-full max-w-[1100px]">
          Профессиональный детский массаж и терапевтические процедуры для детей от 1 месяца до 18 лет, направленные на улучшение физического состояния и общего здоровья.
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
