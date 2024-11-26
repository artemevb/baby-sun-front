import React from 'react';
import { cn } from '@lib/utils';
import Image, { StaticImageData } from 'next/image';
import { Link } from '@/i18n/routing';

interface Props {
  className?: string;
  image: string | StaticImageData;  
  fullname: string;
  speciality: string[];
  slug: string;
}

export const AboutDoctorsItem = ({ className, image, fullname, speciality, slug }: Props) => {
  return (
    <Link href={`/doctors/${slug}`} className={cn('rounded-lg shadow-md bg-white py-4', className)}>
      <div className="relative w-full aspect-w-4 aspect-h-3 overflow-hidden h-[450px]">
        <Image
          width={1000}
          height={1000}
          quality={100}
          src={image}
          alt={fullname}
          className="object-cover rounded-3xl h-[450px]"
        />
      </div>
      <div className="pt-4">
        <h3 className="text-lg font-semibold">{fullname}</h3>
        <div className="text-sm text-gray-500">
          {speciality.map((spec, index) => (
            <span key={index}>
              {spec}
              {index < speciality.length - 1 ? ' | ' : ''}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
