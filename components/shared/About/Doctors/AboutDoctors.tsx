// AboutDoctors.tsx
import React from 'react';
import { cn } from '@lib/utils';
import { AboutDoctorsItem } from './AboutDoctorsItem';
import { useTranslations } from 'next-intl';

interface Props {
  className?: string;
}

const doctors = [
  {
    image: '/images/about/doctors/sagdullaeva.jpg',
    doctorKey: 'sagdullayeva',
    slug: 'sagdullayeva-nilufar-shukrullayevna',
  },
  {
    image: '/images/about/doctors/kuchimov.jpg',
    doctorKey: 'kuchimov',
    slug: 'kuchimov-quvondiq-pirnazarovich',
  },
  {
    image: '/images/about/doctors/nargiza.jpg',
    doctorKey: 'abdullayeva',
    slug: 'abdullayeva-nargiza-shukrullayevna',
  },
  {
    image: '/images/about/doctors/talipova.jpg',
    doctorKey: 'talipova',
    slug: 'talipova-feruza-xodjimuratovna',
  },
  {
    image: '/images/about/doctors/ziganshina.jpg',
    doctorKey: 'ziganshina',
    slug: 'ziganshina-layli-sharofitdinovna',
  },
  {
    image: '/images/about/doctors/karimova.jpg',
    doctorKey: 'karimova',
    slug: 'karimova-nafisa-sadullayevna',
  },
  {
    image: '/images/about/doctors/zarifa.jpg',
    doctorKey: 'ismoilova',
    slug: 'zarifa-ismoilova-abduvohid-qizi',
  },
  {
    image: '/images/about/doctors/azizov.jpg',
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
        <div className="grid grid-cols-1 mdx:grid-cols-2 lgx:grid-cols-4 gap-4 h-auto">
          {doctors.map((doctor, index) => (
            <AboutDoctorsItem
              key={index}
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
