"use client";
import { useState, ChangeEvent } from "react";
import React from "react";
import { cn } from "@lib/utils";
import TextField from "@mui/material/TextField";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { Button } from "@/components/ui";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface Props {
  className?: string;
}

interface FormState {
  fullname: string;
  number: string;
  service: string;
}

export const Application = ({ className }: Props) => {
  const t = useTranslations("Application");

  const [form, setForm] = useState<FormState>({
    fullname: "",
    number: "",
    service: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Обработчик изменения значений в текстовых полях
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: keyof FormState
  ) => {
    setForm((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
  };

  // Обработчик изменения значения в Select
  const handleSelectChange = (
    e: SelectChangeEvent<string>,
    name: keyof FormState
  ) => {
    setForm((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
  };

  // Обработчик отправки формы
  const handleSubmit = async () => {
    setIsSubmitting(true);

    const API_URL = "https://baby-sun.uz/api/application";
    const API_KEY = "aFE~&#siAhCs9_Ni]AoC)HMF#y0V)!-kIh0h-3.eR0_W.gA~gk";

    // Логирование запроса перед отправкой
    console.log("Отправка запроса:", {
      url: API_URL,
      headers: {
        "API-Key": API_KEY,
      },
      body: form,
    });

    try {
      // 1. Отправка запроса для кнопки "route"
      await fetch("https://baby-sun.uz/api/count?button=route", {
        method: "POST",
        headers: {
          "API-Key": API_KEY,
        },
      });

      // 2. Отправка данных формы
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "API-Key": API_KEY,
        },
        body: JSON.stringify(form),
      });

      // Логирование ответа
      console.log("Ответ сервера:", response);

      if (response.ok) {
        const result = await response.json();
        console.log("Успех:", result);
        alert(t("successMessage"));
      } else if (response.status === 401 || response.status === 403) {
        console.error("Ошибка авторизации: API-ключ отсутствует или недействителен.");
        alert(t("authErrorMessage"));
      } else {
        console.error("Ошибка:", response.statusText);
        alert(t("submitErrorMessage"));
      }
    } catch (error) {
      console.error("Ошибка сети:", error);
      alert(t("networkErrorMessage"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={cn("py-24", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto relative">
        <div className="w-full lgx:p-12 relative p-6 mdx:p-10 flex max-mdx:flex-col lgx:rounded-[40px] rounded-3xl bg-[#009FE3] text-white gap-6">
          <div className="absolute -bottom-12 -left-2">
            <Image
              src={"/images/application/application-icon.png"}
              width={1000}
              height={1000}
              alt={t("applicationIconAlt")}
              className="max-h-[200px] max-w-[200px] h-full w-full"
            />
          </div>
          <div className="flex-1 space-y-4">
            <h3 className="text-4xl font-semibold leading-12 w-full max-w-[300px]">
              {t("titleLine1")} <br /> {t("titleLine2")}
            </h3>
            <p className="w-full max-w-[300px] max-mdx:text-lg">
              {t("description")}
            </p>
          </div>
          <div className="flex-1">
            <div className="w-full space-y-8 lgx:max-w-[500px]">
              <TextField
                label={t("fullnameLabel")}
                value={form.fullname}
                onChange={(e) => handleInputChange(e, "fullname")}
                variant="standard"
                fullWidth
                sx={{
                  input: { color: "white" },
                  "& .MuiInput-underline:before": { borderBottomColor: "white" },
                  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                    borderBottomColor: "white",
                  },
                  "& .MuiInput-underline:after": { borderBottomColor: "gold" },
                }}
                InputLabelProps={{
                  style: { color: "white" },
                }}
              />
              <TextField
                label={t("phoneLabel")}
                value={form.number}
                onChange={(e) => handleInputChange(e, "number")}
                variant="standard"
                fullWidth
                sx={{
                  input: { color: "white" },
                  "& .MuiInput-underline:before": { borderBottomColor: "white" },
                  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                    borderBottomColor: "white",
                  },
                  "& .MuiInput-underline:after": { borderBottomColor: "gold" },
                }}
                InputLabelProps={{
                  style: { color: "white" },
                }}
              />
              <FormControl
                fullWidth
                variant="standard"
                sx={{ mb: 3, color: "white" }}
              >
                <InputLabel sx={{ color: "white" }}>{t("selectServiceLabel")}</InputLabel>
                <Select
                  value={form.service}
                  onChange={(e) => handleSelectChange(e, "service")}
                  sx={{
                    color: "white",
                    "& .MuiSelect-icon": { color: "white" },
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "white",
                    },
                    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                      borderBottomColor: "white",
                    },
                    "&:before": { borderBottomColor: "white" },
                    "&:after": { borderBottomColor: "gold" },
                  }}
                >
                  <MenuItem value="consultation">{t("services.consultation")}</MenuItem>
                  <MenuItem value="treatment">{t("services.treatment")}</MenuItem>
                  <MenuItem value="diagnostics">{t("services.diagnostics")}</MenuItem>
                </Select>
              </FormControl>
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-white text-[#009FE3] max-lgx:w-full text-xl font-semibold py-3 hover:bg-white px-16 rounded-full"
              >
                {isSubmitting ? t("sending") : t("submitButton")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
