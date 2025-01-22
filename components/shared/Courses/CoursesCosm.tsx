// CoursesCosm.tsx
import React from 'react';
import { cn } from '@lib/utils';
import { BannerCosm } from './Banner/BannerCosm';
import { AboutCosm } from './About/AboutCosm';
import { ModulesCosm } from './Modules/ModulesCosm';
import { Application } from '../Application/Application';
// import { Map } from '../Map/Map';
import { Teachers } from './Teachers/Teachers';
import { Bonuses } from './Bonuses/Bonuses';

interface Props {
  className?: string;
}

const cosmTeachers = [
  {
    id: 1,
    name: {
      ru: "Абдуллаева Наргиза Шукруллаевна",
      en: "Abdullayeva Nargiza Shukrullayevna",
    },
    description: {
      ru: "Специализируется на проведении различных видов косметологических процедур и массажей",
      en: "Turli xil kosmetologik muolajalar va massajlarni o'tkazishga ixtisoslashgan",
    },
    image: "/images/about/doctors/nargiza.jpg",
  },
];

export const CoursesCosm = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
      <BannerCosm />
      <AboutCosm />
      <ModulesCosm />
      <Teachers teachers={cosmTeachers} />
      <Bonuses />
      <Application />
      {/* <Map /> */}
    </div>
  );
};
