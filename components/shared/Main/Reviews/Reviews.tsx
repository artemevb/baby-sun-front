import React from "react";
import { cn } from "@lib/utils";
import { Button } from "@/components/ui";
import { Link } from "@/i18n/routing";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui";
import { useTranslations } from "next-intl";
interface Props {
  className?: string;
}

const reviews = [
  {
    nickname: "aziza_officiiaal",
    date: "16.11.2021",
    review: "Aynan bu klinikani tanlab adashmadim manga bemalol ishonuvrila qizla",
    link: "https://www.instagram.com/stories/highlights/17989197019462526/",
    social: "instagram",
  },
  {
    nickname: "muxlisaturgunova1409",
    date: "19.11.2021",
    review: "Sharoitla zo'r 👏👏👏 hammasidanam bolalaga o'yin qilib boplapsila 👍👍👍",
    link: "https://www.instagram.com/stories/highlights/17989197019462526/",
    social: "instagram",
  },
  {
    nickname: "Zilola Nishonova",
    date: "16.11.2021",
    review: "Assalamualekum. Hamelaga kottakon rahmat. O'g'limi ikki kurs masaji tugadi. Natijalari ancha yaxshi. Rengendayam natijasi shundo bilindi. Bonupa alohida sizga kottakon rahmat. Vohli borseyam ilojni topb qberganizga. Ichlari ozi kevoti, harakatlari tez bob qogan, emelashga harakat qvomz. Nargizapamgayam alohida rahmat kasmetalog muolajala, maslahatlа uchun 😘😘😘.",
    link: "https://www.instagram.com/stories/highlights/17989197019462526/",
    social: "instagram",
  },
  {
    nickname: "Мухлиса",
    date: "19.11.2021",
    review: "Assalomu alekum baby sun 🌻 jamoasiga. Biz bugun yana bir kurs massajlarimizni tugatvoldik. Har safar borganimizda ochiq cehra, huwmuomilalik bn kutib olasila. Har qanqa vaziyatdayam bollarni konglini birdek topib bollar bn bollarca muloq qilasila. Massaj oliwimizda oz iwini ustasi baby sun masteri mehribon, jonkuya, bollarni sevuvchi Munisa qizimi sevimli masteri Feruza opa.\n\nFeruza opa qigam massajlariz wifoli bosin. Wu massaj oliwimiz davomida qizim ozi ornidan turiwga harakatini bowladi azgina bosayam iwtahasi ocildi. Yomon tarafi endi Mazza qilib ovotkanida tugab qoldide. Hudo xoxlasa Yana yaqın kunlada borivlik nasib qisin. Baby sunga va Feruza opam Nargiza opa sizgaym raxmat.",
    link: "https://www.instagram.com/stories/highlights/17989197019462526/",
    social: "instagram",
  },
  {
    nickname: "Karimahon Manzura",
    date: "16.11.2021",
    review: "Assalomu alaykum baby sun jamoasi. Farzandim uchun 10 kunlik bepul massaj yutib oldandim. Shogird bo’lishlariga qaramasdan katta masterladeka massaj qildila, o’g’limni injiqliklarini ko’tarib mehr bilan massaj qilganlari uchun Gulchehraga rahmat etmoqchiman. Alloh rozi bo’lsin, ilmlar ziyoda bo’lsin. O’g’lim opam dib ularga o’rganib qoldi. 😘😍😊👏👏👏🙌🙌",
    link: "https://www.instagram.com/stories/highlights/17989197019462526/",
    social: "instagram",
  },
  {
    nickname: "Ummu Muhammadsodiq",
    date: "20.11.2021",
    review: "Assalamu alaykum rohmattullohi baby sunga omad haqiqatda zoor sila MawaaAlloh ❤️ jamoaialyam iwlaw uslubi bilan. Man qizim ga yaqinda muolaja oldim Juda yam hursandmiz 😄 Allohga wukur sila ni sabab qilib wiwfo oldik. Hamma jamoadigilaga kotta rahmat juda yam smimiyisila. Master imiz Zebo ga kegin Robiyahon ga alohida rahmat. Alloh rozi bolsin 🤲 hammeladan inwaaAlloh bowqa farzandlarim ni yam olib boriw niyatidamiz 🌹🌹.",
    link: "https://www.instagram.com/stories/highlights/17989197019462526/",
    social: "instagram",
  },
];

export const Reviews = ({ className }: Props) => {
  const t = useTranslations("Reviews");

  return (
    <div className={cn("py-24", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto space-y-8">
        <h2 className="text-4xl font-bold">{t('title')}</h2>

        <Carousel className="space-y-12">
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="pl-1 mdx:basis-1/2 lgx:basis-1/3">
                <div className="bg-[#F8FBFF] mx-2 p-8 h-[400px] rounded-2xl flex flex-col justify-between">
                  <div className="space-y-8">
                    <div>
                      <h6 className="text-2xl font-semibold">{review.nickname}</h6>
                      <p className="text-neutral-300 text-lg">{review.date}</p>
                    </div>
                    <p className="text-xl font-medium line-clamp-6">
                      {review.review}
                    </p>
                  </div>
                  <Link
                    className="text-lg font-medium text-[#009FE3]"
                    href={review.link}
                  >
                    {review.social}
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="w-full flex justify-center items-center">
          <Link href={'/reviews'}>
            <Button className="rounded-full text-xl py-4 px-12">{t('all_reviews')}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
