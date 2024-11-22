import React from "react";
import { cn } from "@lib/utils";
import { AboutDoctorsItem } from "../../About/Doctors/AboutDoctorsItem";

interface Props {
  className?: string;
}

const doctors = [
  {
    image: "/images/about/doctors/doctor.png",
    fullname: "Муминова Мадина Мумин кизи",
    slug: 'muminova-madina-muminqizi',
    speciality: ["Хирург", "Ортопед"],
  },
  {
    image: "/images/about/doctors/doctor.png",
    fullname: "Муминова Мадина Мумин кизи",
    slug: 'muminova-madina-muminqizi',
    speciality: ["Хирург", "Ортопед"],
  },
  {
    image: "/images/about/doctors/doctor.png",
    fullname: "Муминова Мадина Мумин кизи",
    slug: 'muminova-madina-muminqizi',
    speciality: ["Хирург", "Ортопед"],
  },
  {
    image: "/images/about/doctors/doctor.png",
    fullname: "Муминова Мадина Мумин кизи",
    slug: 'muminova-madina-muminqizi',
    speciality: ["Хирург", "Ортопед"],
  },
  {
    image: "/images/about/doctors/doctor.png",
    fullname: "Муминова Мадина Мумин кизи",
    slug: 'muminova-madina-muminqizi',
    speciality: ["Хирург", "Ортопед"],
  },
  {
    image: "/images/about/doctors/doctor.png",
    fullname: "Муминова Мадина Мумин кизи",
    slug: 'muminova-madina-muminqizi',
    speciality: ["Хирург", "Ортопед"],
  },
  {
    image: "/images/about/doctors/doctor.png",
    fullname: "Муминова Мадина Мумин кизи",
    slug: 'muminova-madina-muminqizi',
    speciality: ["Хирург", "Ортопед"],
  },
  {
    image: "/images/about/doctors/doctor.png",
    fullname: "Муминова Мадина Мумин кизи",
    slug: 'muminova-madina-muminqizi',
    speciality: ["Хирург", "Ортопед"],
  },
];

export const Specials = ({ className }: Props) => {
  return (
    <section className={cn("py-24", className)}>
      <div className="flex flex-col gap-8 w-full max-w-[1500px] px-4 mx-auto">
        <h2 className="text-4xl font-semibold">
          Специалисты, предостовляющие услуги
        </h2>
        <div className="grid grid-cols-1 mdx:grid-cols-2 lgx:grid-cols-4 gap-4">
          {doctors.map((doctor, index) => (
            <AboutDoctorsItem
              key={index}
              image={doctor.image}
              fullname={doctor.fullname}
              speciality={doctor.speciality}
              slug={doctor.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
