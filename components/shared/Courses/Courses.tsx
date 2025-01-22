import React from 'react';
import { cn } from '@lib/utils';
import { Banner } from './Banner/Banner';
import { About } from './About/About';
import { Modules } from './Modules/Modules';
import { Application } from '../Application/Application';
// import { Map } from '../Map/Map';
import { Teachers } from './Teachers/Teachers';
import { Bonuses } from './Bonuses/Bonuses';

interface Props {
  className?: string;
}

const coursTeachers = [
  {
    id: 1,
    name: {
      ru: "Сагдуллаева Нилуфар Шукруллаевна",
      en: "Sagdullayeva Nilufar Shukrullayevna",
    },
    description: {
      ru: "Специализируется на реабилитации пациентов после травм и операций, восстановлении двигательной функции",
      en: "Bemorlarni jarohat va operatsiyalardan keyin reabilitatsiya qilish va harakat funktsiyalarini tiklashga ixtisoslashgan",
    },
    image: "/images/about/doctors/sagdullaeva.jpg",
  },
];

export const Courses = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
      <Banner />
      <About />
      <Modules />
      <Teachers teachers={coursTeachers} />
      <Bonuses />
      <Application />
      {/* <Map /> */}
    </div>
  );
};