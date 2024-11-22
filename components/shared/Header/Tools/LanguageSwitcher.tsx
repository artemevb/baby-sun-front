"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Подключаем useRouter для навигации
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const LanguageSwitcher = ({ className }: Props) => {
  const availableLocales = ["uz", "ru"];
  const router = useRouter(); // Получаем роутер для навигации
  const [locale, setLocale] = useState("ru"); // Локаль по умолчанию "ru"

  // Функция для извлечения локали из URL (например, /uz/path или /ru/path)
  const extractLocaleFromPath = () => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname.split("/")[1]; // Получаем первую часть пути
      if (availableLocales.includes(path)) {
        return path; // Если путь соответствует локали (например, "uz" или "ru"), возвращаем ее
      }
    }
    return "ru"; // Возвращаем "ru" по умолчанию, если локаль не найдена
  };

  useEffect(() => {
    const detectedLocale = extractLocaleFromPath();
    setLocale(detectedLocale); // Устанавливаем локаль из URL
  }, []);

  // Функция для изменения языка и обновления URL
  const handleLocaleChange = (newLocale: string) => {
    const currentPath = window.location.pathname.replace(/^\/(ru|uz)/, ""); // Удаляем текущий префикс локали
    router.push(`/${newLocale}${currentPath}`); // Навигация с новой локалью
  };

  return (
    <div className={cn(className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"secondary"}
            className="inline-flex items-center gap-2"
          >
            <Image
              src={"/svg/header/language.svg"}
              width={100}
              height={100}
              alt="LanguageSwitcher Icon | World"
              className="h-6 w-6"
            />
            {locale.toUpperCase() === "RU" ? "РУ" : "UZ"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-4">
          <div className="flex flex-col gap-2">
            {availableLocales.map((lng: string) => (
              <button
                key={lng}
                onClick={() => handleLocaleChange(lng)} // Вызываем функцию изменения локали
                className={`flex items-center gap-2 hover:font-semibold ${
                  lng === locale && "font-semibold"
                }`}
              >
                <Image
                  src={
                    lng === "uz"
                      ? "/svg/header/flags/flag-uz-svgrepo-com.svg"
                      : "/svg/header/flags/flag-ru-svgrepo-com.svg"
                  }
                  width={16}
                  height={16}
                  alt={`${lng} flag`}
                />
                {lng === "ru" ? "РУ" : "UZ"}
              </button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
