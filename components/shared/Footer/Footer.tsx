import React from "react";
import { cn } from "@lib/utils";
import Image from "next/image";
// import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
interface Props {
  className?: string;
}

export const Footer = ({ className }: Props) => {
  const t = useTranslations("Contacts");

  return (
    <footer className={cn("bg-[#F1F4F8] flex flex-col gap-4", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto py-12 grid grid-cols-1 mdx:grid-cols-2 lgx:grid-cols-4 gap-8">
        <div className="space-y-8">
          <a href="/">
            <Image
              src={"/images/footer/Footer-logo.png"}
              width={1000}
              height={1000}
              quality={100}
              alt="Footer Logo of Baby Sun"
              className="w-full max-w-[200px] h-auto"
            />

          </a>
          <div className="flex gap-4 items-center">
            <a target="_blank" href="https://www.instagram.com/babysun_nat_bolalarklinikasi?igsh=emxpZzZraXgxeTV4">
              <Image
                src={"/svg/footer/Inst.svg"}
                width={100}
                height={100}
                alt="Instagrm Icon in Footer"
                className="w-10 max-mdx:w-12"
              />

            </a>
            <a target="_blank" href="https://t.me/bolalarmassajibabysun">
              <Image
                src={"/svg/footer/telegram.svg"}
                width={100}
                height={100}
                alt="Instagrm Icon in Footer"
                className="w-10 max-mdx:w-12"
              />
            </a>
            <a href="https://www.facebook.com/share/KFm7J2eZ84uXdKEq/?mibextid=qi2Omg">
              <Image
                src={"/svg/footer/facebook.svg"}
                width={100}
                height={100}
                alt="Instagrm Icon in Footer"
                className="w-10 max-mdx:w-12"
              />

            </a>
            <a href="https://www.youtube.com/@babysunbybolalar.massaji">
              <Image
                src={"/svg/footer/youtube.svg"}
                width={100}
                height={100}
                alt="Instagrm Icon in Footer"
                className="w-10 max-mdx:w-12"
              />

            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl max-mdx:text-4xl font-semibold">{t('address')}</h3>
          <p className="text-sm leading-5 max-mdx:text-xl font-medium w-full max-mdx:max-w-full max-w-[250px]">
            {t('address_info')}
          </p>
          {/* <Link
            href={"/contacts"}
            className="text-[#009FE3] max-mdx:text-xl flex gap-4 font-bold items-center"
          >
            Построить маршрут
            <Image
              src={"/svg/main/services/right-arrow.svg"}
              width={100}
              height={100}
              alt="Footer right Arrow"
              className="w-2"
            />
          </Link> */}
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl max-mdx:text-4xl font-semibold">
            {t('connection')}
          </h3>
          <a
            href="tel:+998777026688"
            className="text-sm max-mdx:text-xl leading-5 font-medium w-full max-w-[250px]"
          >
            +998 (77) 702-66-88
          </a>
          {/* <a
            href="tel:+998909999999"
            className="text-sm max-mdx:text-xl leading-5 font-medium w-full max-w-[250px]"
          >
            +998 (90) 123-45-67
          </a> */}
          {/* <a
            href="milto:name@domain.com"
            className="text-sm max-mdx:text-xl leading-5 font-medium w-full max-w-[250px]"
          >
            name@domain.com
          </a> */}
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl max-mdx:text-4xl font-semibold">
            {t('graphik')}
          </h3>
          <p className="text-sm max-mdx:text-xl leading-5 font-medium w-full max-w-[250px]">
            {t('graphik_1')}
          </p>
          <p className="text-sm max-mdx:text-xl leading-5 font-medium w-full max-w-[250px]">
            {t('graphik_2')}
          </p>
        </div>
      </div>
      <hr />
      <div className="flex w-full justify-between max-w-[1500px] px-4 mx-auto py-4">
        <div className="flex gap-12 max-mdx:gap-4 max-lgx: flex-wrap">
          <p className="text-[#879EBC]">{t('rules')}</p>
          <p className="text-[#879EBC]">{t('politics')}</p>
          <p className="text-[#879EBC]">{t('users accept')}</p>
        </div>
        <a target="_blank" href="https://result-me.uz/">
          <Image
            src={"/svg/footer/result-logo.svg"}
            width={1000}
            height={1000}
            quality={100}
            alt="Result Agency footer Logo"
            className="w-full max-mdx:hidden max-w-[150px]"
          />

        </a>
      </div>
      <hr className="mdx:hidden" />
      <div className="mdx:hidden w-full flex justify-center py-8">
        <Image
          src={"/svg/footer/result-logo.svg"}
          width={1000}
          height={1000}
          quality={100}
          alt="Result Agency footer Logo"
          className="w-full mdx:hidden max-w-[150px]"
        />
      </div>
    </footer>
  );
};
