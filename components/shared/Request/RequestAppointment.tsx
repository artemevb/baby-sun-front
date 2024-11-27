"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import axios from "axios";
import { Response } from "./Response";
import { useTranslations } from "next-intl";

interface Props {
  className?: string;
  title?: string;
}

export const RequestAppointment = ({
  className,
  title = "Записаться",
}: Props) => {
  const t = useTranslations("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [responseStatus, setResponseStatus] = useState<
    "success" | "error" | null
  >(null);

  // Данные формы
  const [formData, setFormData] = useState({
    fullname: "", // Имя пользователя
    number: "", // Номер телефона
    service: "", // Тип услуги
  });

  // Изменение значений в полях
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Отправка данных
  const handleSubmit = async () => {
    setIsLoading(true); // Включить лоадер

    try {
      // Отправляем основную форму данных
      const response = await axios.post(
        "https://baby-sun.uz/api/application",
        formData,
        {
          headers: {
            "API-Key":
              "aFE~&#siAhCs9_Ni]AoC)HMF#y0V)!-kIh0h-3.eR0_W.gA~gk", // Укажите API ключ
          },
        }
      );

      if (response.status === 200) {
        setResponseStatus("success");
        setIsOpen(false);
      } else {
        setResponseStatus("error");
      }
    } catch (err) {
      setResponseStatus("error");
      console.error("Ошибка при отправке запроса:", err);
    } finally {
      setIsLoading(false); // Выключить лоадер
    }
  };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            className={cn(
              "rounded-full lg:px-12 py-3 font-semibold",
              className
            )}
          >
            {title === "Записаться" ? t("request") : title}
          </Button>
        </DialogTrigger>

        <DialogContent className="max-w-[430px] px-6 py-6 bg-white shadow-lg rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold">
              {t("Main.Form.titleModalAppointment")}
            </DialogTitle>
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsOpen(false)}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            <Input
              name="fullname"
              placeholder={t("Main.Form.fields.name")}
              className="py-6 px-3 bg-gray-100 text-black font-semibold text-lg rounded-2xl"
              onChange={handleInputChange}
              value={formData.fullname}
            />
            <Input
              name="number"
              placeholder={t("Main.Form.fields.phone")}
              className="py-6 px-3 bg-gray-100 text-black font-semibold text-lg rounded-2xl"
              onChange={handleInputChange}
              value={formData.number}
            />
            <Input
              name="service"
              placeholder={t("Main.Form.fields.service")}
              className="py-6 px-3 bg-gray-100 text-black font-semibold text-lg rounded-2xl"
              onChange={handleInputChange}
              value={formData.service}
            />
          </div>

          <div className="mt-4">
            <Button
              className="rounded-full w-full px-8 py-4 text-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <Loader2 className="animate-spin" size={25} />
                  <span>{t("Main.Form.loading")}</span>
                </div>
              ) : (
                `${t("Main.Form.submitButton")}`
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {responseStatus && (
        <Response
          status={responseStatus}
          onClose={() => setResponseStatus(null)}
        />
      )}
    </div>
  );
};
