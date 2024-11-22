import React from "react";
import { cn } from "@lib/utils";
import { useTranslations } from "next-intl";
interface Props {
  className?: string;
}

export const ContactsInfo = ({ className }: Props) => {
  const t = useTranslations("Contacts"); 

  return (
    <section className={cn("pt-8", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto flex flex-col gap-8">
        <h1 className="text-4xl font-semibold">{t('title')}</h1>
        <div className="w-full grid grid-cols-1 mdx:grid-cols-2 lgx:grid-cols-4 gap-6">
          <div className="border border-[#DFDFDF] rounded-2xl p-8 flex flex-col gap-4">
            <h2 className="text-xl font-semibold">
            {t('address_info')}
            </h2>
            <p className="text-[#9C9C9C]">{t('address')}</p>
          </div>
          <div className="border border-[#DFDFDF] rounded-2xl p-8 flex flex-col gap-4">
            <div className="flex flex-col">
              <a
                href="tel:+998777026688"
                className="text-xl font-semibold"
              >
                +998 (77) 702-66-88
              </a>
              {/* <a
                href="tel:+998 (90) 123-45-67"
                className="text-xl font-semibold"
              >
                +998 (90) 123-45-67
              </a> */}
            </div>
            <p className="text-[#9C9C9C]">{t('telephone')}</p>
          </div>
          <div className="border border-[#DFDFDF] rounded-2xl p-8 flex flex-col gap-4">
            <div>
              <h2 className="text-xl font-semibold">{t('graphik_1')}</h2>
              <h2 className="text-xl font-semibold">{t('graphik_2')}</h2>
            </div>
            <p className="text-[#9C9C9C]">{t('graphik')}</p>
          </div>
          {/* <div className="border border-[#DFDFDF] rounded-2xl p-8 flex flex-col gap-4">
            <a href="milto:name@domain.com" className="text-xl font-semibold">
            name@domain.com
            </a>
            <p className="text-[#9C9C9C]">Эл.почта</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};
