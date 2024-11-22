import React from "react";
import { cn } from "@lib/utils";

interface Props {
  className?: string;
}

const services = [
    {
        title: "Релакс-массаж",
        description: "Расслабляющий массаж для снятия стресса и улучшения самочувствия",
        price: "Индивидуальная цена",
    },
    {
        title: "Медовый массаж",
        description: "Процедура с использованием натурального меда для улучшения состояния кожи и общего тонуса",
        price: "Индивидуальная цена",
    },
    {
        title: "Баночный массаж",
        description: "Терапевтический массаж с использованием вакуумных банок для улучшения кровообращения",
        price: "Индивидуальная цена",
    },
    {
        title: "Оздоровительный массаж",
        description: "Комплексный массаж для укрепления здоровья и повышения иммунитета",
        price: "Индивидуальная цена",
    },
    {
        title: "Антицеллюлитный массаж",
        description: "Массаж для уменьшения объема тела и борьбы с целлюлитом",
        price: "Индивидуальная цена",
    },
    {
        title: "Стоун-массаж",
        description: "Массаж горячими камнями для глубокого расслабления и улучшения циркуляции крови",
        price: "Индивидуальная цена",
    },
    {
        title: "Огненный массаж",
        description: "Экзотический массаж с использованием огня для снятия напряжения и восстановления энергии",
        price: "Индивидуальная цена",
    },
    {
        title: "Неврологический массаж",
        description: "Массаж для расслабления нервной системы и снятия напряжения",
        price: "Индивидуальная цена",
    },
    {
        title: "Массаж головы, шеи и рук",
        description: "Массаж для улучшения кровообращения и снятия напряжения в области головы, шеи и рук",
        price: "Индивидуальная цена",
    },
    {
        title: "Массаж живота, поясницы и ног",
        description: "Массаж для улучшения работы органов и снятия мышечного напряжения в зоне живота, поясницы и ног",
        price: "Индивидуальная цена",
    },
    {
        title: "Лимфодренажный массаж",
        description: "Массаж для улучшения лимфотока и уменьшения отеков",
        price: "Индивидуальная цена",
    }
];

export const List = ({ className }: Props) => {
  return (
    <div className={cn("py-24", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto space-y-8">
        <h1 className="text-5xl max-mdx:text-3xl font-bold">СПА для женщин</h1>
        <p className="font-medium text-[#494949] w-full max-w-[1100px]">
          Зарина Исмаилова, квалифицированный специалист по массажу с двумя сертификатами и опытом обучения в 2024 году, предлагает широкий спектр СПА процедур для женщин.
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
