'use client';

import React from "react";
import { cn } from "@lib/utils";
import Image from "next/image";
import { Request } from "../Request/Request";
import { useParams, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

interface Props {
  className?: string;
}

const doctors = [
  {
    slug: "muminova-madina-muminqizi",
    doctorKey: "muminova",
    image: "/images/about/doctors/doctor.png",
  },
  {
    slug: "kuchimov-quvondiq-pirnazarovich",
    doctorKey: "kuchimov",
    image: "/images/about/doctors/kuchimov.jpg",
  },
  // ... остальные врачи
];

export const DoctorPage = ({ className }: Props) => {
  const t = useTranslations('DoctorPage');
  const params = useParams();
  const router = useRouter();
  const { slug } = params;

  if (!slug) {
    return null;
  }

  const doctor = doctors.find((doc) => doc.slug === slug);

  if (!doctor) {
    return <p>{t('doctorNotFound')}</p>;
  }

  // Получаем данные врача из переводов
  const doctorData = {
    fullname: t(`${doctor.doctorKey}.fullname`),
    info: t(`${doctor.doctorKey}.info`),
    speciality: t.raw(`${doctor.doctorKey}.speciality`) as string[],
    graphic: t.raw(`${doctor.doctorKey}.graphic`) as string[],
  };

  return (
    <section className={cn("pb-24", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto flex flex-col gap-8 pt-8">
        <div>
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[#009FE3] text-xl font-semibold hover:gap-4 transition-all duration-150"
          >
            <Image
              src="/svg/doctorPage/left-arrow.svg"
              width={100}
              height={100}
              alt="Back icon"
              className="w-2"
            />
            {t('back')}
          </button>
        </div>
        <div className="flex max-mdx:flex-col gap-8">
          <div>
            <Image
              src={doctor.image || "/images/about/doctors/doctor.png"}
              width={1000}
              height={1000}
              quality={100}
              alt="Doctors photo"
              className="h-auto w-full mdx:w-[400px] rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <div className="text-lg font-semibold text-[#009FE3]">
                {doctorData.speciality.map((spec, index) => (
                  <span key={index}>
                    {spec}
                    {index < doctorData.speciality.length - 1 ? " | " : ""}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold mdx:text-4xl">
                {doctorData.fullname}
              </h1>
              <p className="w-full max-w-[500px]">{doctorData.info}</p>
              <hr />
              <div>
                <p className="text-[#009FE3] font-semibold">{t('schedule')}</p>
                <ul>
                  {doctorData.graphic.map((item, index) => (
                    <li className="font-bold text-lg" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <Request
                title={t('makeAppointment')}
                className="max-mdx:w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
