import React from 'react';
import { cn } from '@lib/utils';
import { BannerHijama } from './Banner/BannerHijama';
import { AboutHijama } from './About/AboutHijama';
import { ModulesHijama } from './Modules/ModulesHijama';
import { Application } from '../Application/Application';
import { Map } from '../Map/Map';
import { Teachers } from './Teachers/Teachers';
import { Bonuses } from './Bonuses/Bonuses';

interface Props {
  className?: string;
}

const hijamaTeachers = [
  {
    id: 1,
    name: {
      ru: "Абдуллаева Наргиза Шукруллаевна",
      en: "Abdullayeva Nargiza Shukrullayevna",
    },
    description: {
      ru: "Cпециализируется на проведении различных видов косметологических процедур и массажей",
      en: "Turli xil kosmetologik muolajalar va massajlarni o'tkazishga ixtisoslashgan",
    },
    image: "/images/about/doctors/Nargiza.jpg",
  },
  {
    id: 2,
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
];

export const CoursesHijama = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
      <BannerHijama />
      <AboutHijama />
      <ModulesHijama />
      <Teachers teachers={hijamaTeachers} />
      <Bonuses />
      <Application />
      <Map />
    </div>
  );
};
