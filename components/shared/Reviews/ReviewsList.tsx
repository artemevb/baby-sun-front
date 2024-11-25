"use client"
import React, { useState, useEffect } from "react";
import { cn } from "@lib/utils";
import { ReviewItem } from "../About/Reviews/ReviewItem";
import { useTranslations } from "next-intl";
interface Props {
  className?: string;
}

const reviews = [
  {
    name: "aziza_officiiaal",
    date: "16.11.2021",
    avatar: "/images/ivanov.jpg",
    reviewText:
      "Aynan bu klinikani tanlab adashmadim manga bemalol ishonuvrila qizla",
  },
  {
    name: "muxlisaturgunova1409",
    date: "16.11.2021",
    avatar: "/images/petrov.jpg",
    reviewText:
      "Sharoitla zo'r 👏👏👏 hammasidanam bolalaga o'yin qilib boplapsila 👍👍👍",
  },
  {
    name: "Zilola Nishonova",
    date: "16.11.2021",
    avatar: "/images/petrov.jpg",
    reviewText:
      "Assalamualekum. Hamelaga kottakon rahmat. O'g'limi ikki kurs masaji tugadi. Natijalari ancha yaxshi. Rengendayam natijasi shundo bilindi. Bonupa alohida sizga kottakon rahmat. Vohli borseyam ilojni topb qberganizga. Ichlari ozi kevoti, harakatlari tez bob qogan, emelashga harakat qvomz. Nargizapamgayam alohida rahmat kasmetalog muolajala, maslahatlа uchun 😘😘😘.",
  },
  {
    name: "Мухлиса",
    date: "19.11.2021",
    avatar: "/images/petrov.jpg",
    reviewText:
      "Assalomu alekum baby sun 🌻 jamoasiga. Biz bugun yana bir kurs massajlarimizni tugatvoldik. Har safar borganimizda ochiq cehra, huwmuomilalik bn kutib olasila. Har qanqa vaziyatdayam bollarni konglini birdek topib bollar bn bollarca muloq qilasila. Massaj oliwimizda oz iwini ustasi baby sun masteri mehribon, jonkuya, bollarni sevuvchi Munisa qizimi sevimli masteri Feruza opa. Feruza opa qigam massajlariz wifoli bosin. Wu massaj oliwimiz davomida qizim ozi ornidan turiwga harakatini bowladi azgina bosayam iwtahasi ocildi. Yomon tarafi endi Mazza qilib ovotkanida tugab qoldide. Hudo xoxlasa Yana yaqın kunlada borivlik nasib qisin. Baby sunga va Feruza opam Nargiza opa sizgaym raxmat.",
  },
  {
    name: "Karimahon Manzura",
    date: "16.11.2021",
    avatar: "/images/petrov.jpg",
    reviewText:
      "Assalomu alaykum baby sun jamoasi. Farzandim uchun 10 kunlik bepul massaj yutib oldandim. Shogird bo’lishlariga qaramasdan katta masterladeka massaj qildila, o’g’limni injiqliklarini ko’tarib mehr bilan massaj qilganlari uchun Gulchehraga rahmat etmoqchiman. Alloh rozi bo’lsin, ilmlar ziyoda bo’lsin. O’g’lim opam dib ularga o’rganib qoldi. 😘😍😊👏👏👏🙌🙌",
  },
  {
    name: "Ummu Muhammadsodiq",
    date: "20.11.2021",
    avatar: "/images/petrov.jpg",
    reviewText:
      "Assalamu alaykum rohmattullohi baby sunga omad haqiqatda zoor sila MawaaAlloh ❤️ jamoaialyam iwlaw uslubi bilan. Man qizim ga yaqinda muolaja oldim Juda yam hursandmiz 😄 Allohga wukur sila ni sabab qilib wiwfo oldik. Hamma jamoadigilaga kotta rahmat juda yam smimiyisila. Master imiz Zebo ga kegin Robiyahon ga alohida rahmat. Alloh rozi bolsin 🤲 hammeladan inwaaAlloh bowqa farzandlarim ni yam olib boriw niyatidamiz 🌹🌹.",
  }
];

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

export const ReviewsList = ({ className }: Props) => {
  const t = useTranslations("Reviews");

  const [isExpanded, setIsExpanded] = useState(false);
  const [visibleReviewsCount, setVisibleReviewsCount] = useState(3);

  const toggleReviews = () => {
    setIsExpanded(!isExpanded);
  };

  const adjustVisibleReviews = () => {
    if (window.innerWidth >= 1000) {
      setVisibleReviewsCount(9);
    } else if (window.innerWidth >= 650) {
      setVisibleReviewsCount(6);
    } else {
      setVisibleReviewsCount(3);
    }
  };

  useEffect(() => {
    adjustVisibleReviews();
    window.addEventListener("resize", adjustVisibleReviews);

    return () => {
      window.removeEventListener("resize", adjustVisibleReviews);
    };
  }, []);

  return (
    <section className={cn("py-24", className)}>
      <div className="w-full max-w-[1500px] mx-auto px-4 flex flex-col gap-8">
        <h1 className="text-4xl font-semibold">{t('title')}</h1>
        <div className="grid grid-cols-1 mdx:grid-cols-2 lgx:grid-cols-3 gap-4">
          {reviews
            .slice(0, isExpanded ? reviews.length : visibleReviewsCount)
            .map((review, index) => (
              <ReviewItem
                key={index}
                name={review.name}
                date={review.date}
                avatar={review.avatar}
                reviewText={truncateText(review.reviewText, 400)}
                className="shadow-md p-4"
              />
            ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={toggleReviews}
            className="px-6 py-3 bg-blue-500 rounded-full text-white"
          >
            {isExpanded ? t('collapse') : t('showAll')}
          </button>
        </div>
      </div>
    </section>
  );
};
