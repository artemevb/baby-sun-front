import React from "react";
import { cn } from "@lib/utils";
import { AboutDoctorsItem } from "../../About/Doctors/AboutDoctorsItem";
import { useTranslations } from 'next-intl';

import doctor1 from '../../../../public/images/about/doctors/doctor.png';
import doctor2 from '../../../../public/images/about/doctors/zarifa.jpg';
import doctor3 from '../../../../public/images/about/doctors/azizov.jpg';

interface Props {
    className?: string;
}

const doctors = [
    {
        image: doctor1,
        doctorKey: 'muminova',
        slug: 'muminova-madina-muminqizi',
    },
    {
        image: doctor2,
        doctorKey: 'ismoilova',
        slug: 'zarifa-ismoilova-abduvohid-qizi',
    },
    {
        image: doctor3,
        doctorKey: 'azizov',
        slug: 'azizov-abduhalil-abduqodirovich',
    },
];

export const SpecialsChild = ({ className }: Props) => {
    const t = useTranslations('SpecialsChild');

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
