import React from "react";
import { cn } from "@lib/utils";
import { AboutDoctorsItem } from "../../About/Doctors/AboutDoctorsItem";
import { useTranslations } from 'next-intl';

import nargizaImage from '@/public/images/about/doctors/nargiza.jpg';
import zarifaImage from '@/public/images/about/doctors/zarifa.jpg';

interface Props {
    className?: string;
}

const doctors = [
    {
        image: nargizaImage,
        doctorKey: 'abdullayeva',
        slug: 'abdullayeva-nargiza-shukrullayevna',
    },
    {
        image: zarifaImage, 
        doctorKey: 'ismoilova',
        slug: 'zarifa-ismoilova-abduvohid-qizi',
    }
];

export const SpecialsSpa = ({ className }: Props) => {
    const t = useTranslations('SpecialsSpa');

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
