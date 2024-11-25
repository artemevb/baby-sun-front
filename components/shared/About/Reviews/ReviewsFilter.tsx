"use client"
import React, { useState } from 'react';
import { cn } from '@lib/utils';
import { Button } from '@/components/ui';
import { ReviewItem } from './ReviewItem';
import { useTranslations } from "next-intl";

interface ReviewsFilterProps {
  className?: string;
}

const reviews = [
  {
    category: 'rubdown',
    name: 'Ominahon Rano',
    date: '06.10.2024',
    avatar: '/images/ivanov.jpg',
    reviewText: 'Assalomu alaykum yaxshimisiz. Sizni va Nargiza opamdan bilim olgan shogird qiz va ayollar bu gapimni qo‘llab quvvatlashadi. Ular o‘zlarini Ibn Sino shogirdlari deb hisoblaydi. Sizlar bolajonlarga “tig‘” tekizmasdan dori ichirmasdan shifo ulashdilar. Shogirdlarga esa tuganmas motivatsiya berishdan charchameng.',
  },
  {
    category: 'rubdown',
    name: 'piskent_ilm_ziyo',
    date: '08.12.2024',
    avatar: '/images/petrov.jpg',
    reviewText: 'Bulani juda hurmat qilaman man iyul oyida bitirdim bu o‘quv markazda xar qanday kasallikda qanday massaj qilish texnikasini sitqi dildan o‘rgatishadi. Ayrim massajiskalaga o‘xshab birovni aybini qidirishmaydi, birovni aybini umuman analiz qilishmaydi. Juda ko‘p massajis guruxlariga obuna bo‘lganman hamma o‘zini zo‘r qilib ko‘rsatib boshqa massajchilarni yomonlaydi. Bu ustozim bebaxo Allox marabayzni bundanam ulug‘ qilsin. Silani tanlaganimdan juda xursandman hamma oqimoqchi bolganlarga baby sun zor tanlov bemalol o‘z ish ochib ishlay olas. ❤️❤️',
  },
  {
    category: 'rubdown',
    name: 'asiya_baby_cake',
    date: '06.10.2024',
    avatar: '/images/ivanov.jpg',
    reviewText: 'Aldangan o‘quvchiladan bittasiman 😢 aldanganim hozirgi zamon nervologiskiy ZPR ZRR bolarni diagnozi to‘g‘ri qo‘yish va massaj matorika elektr farez parafinla bilan davolashni o‘rgandim. 😘 Borilaga shukur.',
  },
  {
    category: 'rubdown',
    name: 'asiya_baby_cake',
    date: '05.10.2024',
    avatar: '/images/petrov.jpg',
    reviewText: '🔥🔥🔥🔥🔥👏👏👏👏👏 hamma Massajistlani 10tadan 1da 1000foiz duch keladigan Kasalik shrotsiz hech qanaqa natija qila olmas ekanmiz. Sizda o‘qiganimdan ming marta shukur yaxshiyam o‘qiman hozirda shu pansentim bilan umumna qiynalmayman Ustozim.',
  },
  {
    category: 'all',
    name: 'piskent_ilm_ziyo',
    date: '08.10.2024',
    avatar: '/images/petrov.jpg',
    reviewText: 'Assalomu alekum ustozim. Ilmingiz ziyoda bo‘lsin, yangicha metodlarni o‘rganishga boramiz.   Inshaalloh baby sun jamoasi zorrr ❤️❤️❤️ Gap yoooo kim massajis bo‘lishni istasa baby sun zor tanlov. Biza xozir bemalol massaj, tashxis xam qovomiz. Buning uchun ustozlarimiz Nargiza opa va Ninufar opamlaga ming rahmat. Allox rozi bo‘lsin. Ilohim opam sizni Allox zevnizni o‘tkir qilsin. Ilm tarqatishdan to‘xtamang 🙌🙌.',
  },
  {
    category: 'all',
    name: 'Tojieva Mahliyo',
    date: '05.9.2024',
    avatar: '/images/petrov.jpg',
    reviewText: 'Assalomu Aleykum hayrli kech. Tushunarli. To‘g‘risini etsamm, yana qiziqim kevotti. Qiziqarli dars o‘tardingiz, rahmat e’tibor qoldirmaganizga. Yana video rasmla kutib qolamiz.',
  },
];

export const ReviewsFilter = ({ className }: ReviewsFilterProps) => {
  const t = useTranslations("ReviewsFilter");
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAllReviews, setShowAllReviews] = useState(false);

  // Определение категорий с использованием переводов
  const categories = [
    { title: t('categories.all'), slug: 'all' },
    { title: t('categories.rubdown'), slug: 'rubdown' },
    { title: t('categories.cosmetology'), slug: 'cosmetology' },
    { title: t('categories.other'), slug: 'other' },
  ];

  const filteredReviews = reviews.filter(
    (review) => activeCategory === 'all' || review.category === activeCategory
  );

  const toggleShowAll = () => setShowAllReviews(!showAllReviews);

  return (
    <div className={cn("py-24", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto space-y-8">
        <h2 className="text-4xl max-mdx:text-3xl font-bold w-full max-w-[400px]">
          {t('title')}
        </h2>
        <div className="w-full space-y-4">
          <div className="w-full flex gap-2 overflow-x-scroll no-scrollbar">
            {categories.map((category, index) => (
              <Button
                key={index}
                className='rounded-full py-3 px-8 hover:text-white'
                variant={activeCategory === category.slug ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category.slug)}
              >
                {category.title}
              </Button>
            ))}
          </div>
          <div className="grid grid-cols-1 lgx:grid-cols-2 gap-2">
            {filteredReviews.slice(0, showAllReviews ? filteredReviews.length : 4).map((review, index) => (
              <ReviewItem
                key={index}
                name={review.name}
                date={review.date}
                avatar={review.avatar}
                reviewText={review.reviewText}
                className="shadow-md p-4"
              />
            ))}
          </div>
          <div className="w-full text-center">
            <Button onClick={toggleShowAll} className="mt-4 py-3 px-8 rounded-full">
              {showAllReviews ? t('buttons.hide') : t('buttons.showAll')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
