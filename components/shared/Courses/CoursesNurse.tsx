import React from 'react';
import { cn } from '@lib/utils';
import { BannerNurse } from './Banner/BannerNurse';
import { AboutNurse } from './About/AboutNurse';
import { ModulesNurse } from './Modules/ModulesNurse';
import { Application } from '../Application/Application';
// import { Map } from '../Map/Map';
import { Teachers } from './Teachers/Teachers';
import { Bonuses } from './Bonuses/Bonuses';

interface Props {
  className?: string;
}

const nurseTeachers = [
  {
    id: 1,
    name: {
      ru: "Каримова Нафиса Саъдуллаевна",
      en: "Karimova Nafisa Sa'dullayevna",
    },
    description: {
      ru: "Обучает студентов основам ухода за пациентами, включая оказание первой помощи и проведение инъекций",
      en: "Talabalarni bemorlarni parvarishlash asoslariga, shu jumladan birinchi yordam ko'rsatish va in'ektsiyalar qilishni o'rgatadi",
    },
    image: "/images/about/doctors/karimova.jpg",
  },
  {
    id: 2,
    name: {
      ru: "Талипова Феруза Ходжимуратовна",
      en: "Talipova Feruza Xodjimuratovna",
    },
    description: {
      ru: "Ассистирует во время операций, обеспечивает стерильность и подготовку инструментов и материалов",
      en: "Operatsiya vaqtida yordam beradi, asbob-uskunalar va materiallarni tayyorlash va sterilizatsiyasini ta'minlaydi",
    },
    image: "/images/about/doctors/talipova.jpg",
  },
];

export const CoursesNurse = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
      <BannerNurse />
      <AboutNurse />
      <ModulesNurse />
      <Teachers teachers={nurseTeachers} />
      <Bonuses />
      <Application />
      {/* <Map /> */}
    </div>
  );
};
