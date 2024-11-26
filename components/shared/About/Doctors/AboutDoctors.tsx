// AboutDoctors.tsx
import React from 'react';
import { cn } from '@lib/utils';
import { AboutDoctorsItem } from './AboutDoctorsItem';
import { useTranslations } from 'next-intl';

import kuchimovImg from '../../../../public/images/about/doctors/kuchimov.jpg';
import abdullayevaImg from '../../../../public/images/about/doctors/nargiza.jpg';
import muminovaImg from '../../../../public/images/about/doctors/doctor.png';
import sagdullaevaImg from '../../../../public/images/about/doctors/sagdullaeva.jpg';
import talipovaImg from '../../../../public/images/about/doctors/talipova.jpg';
import ziganshinaImg from '../../../../public/images/about/doctors/ziganshina.jpg';
import karimovaImg from '../../../../public/images/about/doctors/karimova.jpg';
import ismoilovaImg from '../../../../public/images/about/doctors/zarifa.jpg';
import azizovImg from '../../../../public/images/about/doctors/azizov.jpg';

interface Props {
  className?: string;
}

const doctors = [
  {
    image: kuchimovImg,
    doctorKey: 'kuchimov',
    slug: 'kuchimov-quvondiq-pirnazarovich',
  },
  {
    image: abdullayevaImg,
    doctorKey: 'abdullayeva',
    slug: 'abdullayeva-nargiza-shukrullayevna',
  },
  {
    image: muminovaImg,
    doctorKey: 'muminova',
    slug: 'muminova-madina-muminqizi',
  },
  {
    image: sagdullaevaImg,
    doctorKey: 'sagdullayeva',
    slug: 'sagdullayeva-nilufar-shukrullayevna',
  },
  {
    image: talipovaImg,
    doctorKey: 'talipova',
    slug: 'talipova-feruza-xodjimuratovna',
  },
  {
    image: ziganshinaImg,
    doctorKey: 'ziganshina',
    slug: 'ziganshina-layli-sharofitdinovna',
  },
  {
    image: karimovaImg,
    doctorKey: 'karimova',
    slug: 'karimova-nafisa-sadullayevna',
  },
  {
    image: ismoilovaImg,
    doctorKey: 'ismoilova',
    slug: 'zarifa-ismoilova-abduvohid-qizi',
  },
  {
    image: azizovImg,
    doctorKey: 'azizov',
    slug: 'azizov-abduhalil-abduqodirovich',
  },
];

export const AboutDoctors = ({ className }: Props) => {
  const t = useTranslations('AboutDoctors');

  return (
    <div className={cn('py-24', className)}>
      <div className="space-y-12 w-full max-w-[1500px] px-4 mx-auto">
        <h2 className="text-5xl max-mdx:text-4xl font-bold">{t('title')}</h2>
        <div className="grid grid-cols-1 mdx:grid-cols-2 lgx:grid-cols-4 gap-4">
          {doctors.map((doctor) => (
            <AboutDoctorsItem
              key={doctor.slug}
              image={doctor.image}
              fullname={t(`${doctor.doctorKey}.fullname`)}
              speciality={t.raw(`${doctor.doctorKey}.speciality`)}
              slug={doctor.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
