'use client'
import React from "react";
import { cn } from "@lib/utils";
import Image from "next/image";
import { useTranslations } from "next-intl";

// Определяем типы пропсов
interface Props {
  className?: string;
}

export const Footer = ({ className }: Props) => {
  const t = useTranslations("Contacts");

  // Ваш токен авторизации
  const API_KEY = "aFE~&#siAhCs9_Ni]AoC)HMF#y0V)!-kIh0h-3.eR0_W.gA~gk";

  // Обработчик клика на соцсети
  const handleSocialClick = async (button: string) => {
    try {
      // Отправка запроса на API с заголовком API-Key и кнопкой, на которую кликнули
      const response = await fetch(`https://baby-sun.uz/api/count?button=${button}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "API-Key": API_KEY,
        },
      });

      // Проверка на успешный ответ
      if (!response.ok) {
        throw new Error(`Ошибка при отправке запроса: ${response.status} ${response.statusText}`);
      }

      // Если вам нужно обработать ответ, вы можете сделать это здесь
      // Например:
      // const data = await response.json();
      // Используйте `data` по необходимости

    } catch (error) {
      // Обработка ошибки
      // Если хотите, можете использовать alert или другой способ уведомления пользователя
      console.error(`Ошибка при отправке запроса для кнопки "${button}":`, error);
    }
  };

  // Обработчик клика на номер телефона
  const handlePhoneClick = async () => {
    try {
      // Отправка запроса на API с заголовком API-Key
      const response = await fetch("https://baby-sun.uz/api/count?button=call", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "API-Key": API_KEY,
        },
      });

      // Проверка на успешный ответ
      if (!response.ok) {
        throw new Error(`Ошибка при отправке запроса: ${response.status} ${response.statusText}`);
      }

      // Если вам нужно обработать ответ, вы можете сделать это здесь
      // Например:
      // const data = await response.json();
      // Используйте `data` по необходимости

    } catch (error) {
      // Обработка ошибки
      console.error("Ошибка при отправке запроса для кнопки 'call':", error);
    }
  };

  return (
    <footer className={cn("bg-[#F1F4F8] flex flex-col gap-4", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto py-12 grid grid-cols-1 mdx:grid-cols-2 lgx:grid-cols-4 gap-8">
        {/* Логотип и соц.сети */}
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
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/babysun_nat_bolalarklinikasi?igsh=emxpZzZraXgxeTV4"
              onClick={() => handleSocialClick('instagram')} // Отправляем запрос при клике на Instagram
            >
              <Image
                src={"/svg/footer/Inst.svg"}
                width={100}
                height={100}
                alt="Instagram Icon in Footer"
                className="w-10 max-mdx:w-12"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/bolalarmassajibabysun"
              onClick={() => handleSocialClick('telegram')} // Отправляем запрос при клике на Telegram
            >
              <Image
                src={"/svg/footer/telegram.svg"}
                width={100}
                height={100}
                alt="Telegram Icon in Footer"
                className="w-10 max-mdx:w-12"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/share/KFm7J2eZ84uXdKEq/?mibextid=qi2Omg"
              onClick={() => handleSocialClick('facebook')} // Отправляем запрос при клике на Facebook
            >
              <Image
                src={"/svg/footer/facebook.svg"}
                width={100}
                height={100}
                alt="Facebook Icon in Footer"
                className="w-10 max-mdx:w-12"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/@babysunbybolalar.massaji"
              onClick={() => handleSocialClick('youtube')} // Отправляем запрос при клике на YouTube
            >
              <Image
                src={"/svg/footer/youtube.svg"}
                width={100}
                height={100}
                alt="YouTube Icon in Footer"
                className="w-10 max-mdx:w-12"
              />
            </a>
          </div>
        </div>

        {/* Адрес */}
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl max-mdx:text-4xl font-semibold">{t('address')}</h3>
          <p className="text-sm leading-5 max-mdx:text-xl font-medium w-full max-mdx:max-w-full max-w-[250px]">
            {t('address_info')}
          </p>
        </div>

        {/* Контакты */}
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl max-mdx:text-4xl font-semibold">{t('connection')}</h3>
          <a
            href="tel:+998777026688"
            className="text-sm max-mdx:text-xl leading-5 font-medium w-full max-w-[250px] cursor-pointer"
            onClick={handlePhoneClick} // Отправляем запрос при клике на номер телефона
          >
            +998 (77) 702-66-88
          </a>
        </div>

        {/* График */}
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
        <div className="flex gap-12 max-mdx:gap-4 max-lgx:flex-wrap">
          <p className="text-[#879EBC]">{t('rules')}</p>
          <p className="text-[#879EBC]">{t('politics')}</p>
          <p className="text-[#879EBC]">{t('users accept')}</p>
        </div>
        <a target="_blank" rel="noopener noreferrer" href="https://result-me.uz/">
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
