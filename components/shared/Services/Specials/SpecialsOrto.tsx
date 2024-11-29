import React from "react";
import { cn } from "@lib/utils";
import { AboutDoctorsItem } from "../../About/Doctors/AboutDoctorsItem";
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

export const SpecialsOrto = ({ className }: Props) => {
    const t = useTranslations('SpecialsOrto');

    return (
        <section className={cn("py-24", className)}>
            <div className="flex flex-col gap-8 w-full max-w-[1500px] px-4 mx-auto">
                <h2 className="text-4xl font-semibold">
                    {t('title')}
                </h2>
                <div className="grid grid-cols-1 mdx:grid-cols-2 lgx:grid-cols-4 gap-4">
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
        </section>
    );
};
