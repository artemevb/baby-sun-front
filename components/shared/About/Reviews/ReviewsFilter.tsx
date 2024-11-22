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
    name: 'неизвестно',
    date: '06.10.2024',
    avatar: '/images/ivanov.jpg',
    reviewText: 'Александр, благодарим Вас за проделанную работу, за полученные знания! 12 занятий пролетели на одном дыхании, очень верим в результат! Желаем процветания и дальнейшего развития Вашего (такого нужного) дела и чтобы ещё не один ребёнок смог обрести здоровую и красивую спину! Спасибо!!',
  },
  {
    category: 'rubdown',
    name: 'flirtanika7',
    date: '08.12.2024',
    avatar: '/images/petrov.jpg',
    reviewText: 'Александр, хочу поблагодарить за пройденный курс шрот-терапии. Все очень подробно и доступно объяснили. С полученным багажом знаний продолжаем заниматься дома и надеемся на хороший результат. Спасибо за Ваш труд!',
  },
  {
    category: 'rubdown',
    name: 'oksana.borbit',
    date: '06.10.2024',
    avatar: '/images/ivanov.jpg',
    reviewText: 'Очень благодарны за обучение. Результат очень хороший, превзошел ожидания. Большое спасибо. Теперь сможем самостоятельно заниматься дома.',
  },
  {
    category: 'rubdown',
    name: 'ozholik',
    date: '05.10.2024',
    avatar: '/images/petrov.jpg',
    reviewText: 'Александр! Огромное спасибо за курс! За 12 занятий проделана огромная работа. Совершен огромный вклад в здоровье ребёнка! Вы — профессионал, который вкладывает душу в своё дело, который погружается полностью в ребёнка и очень хочет помочь. Спасибо за эмоциональную поддержку. Спасибо за ответы на все вопросы. Спасибо за индивидуальный подход. Спасибо за хорошее настроение на занятиях. Спасибо за подарок!',
  },
  {
    category: 'rubdown',
    name: 'flirtanika7',
    date: '08.10.2024',
    avatar: '/images/petrov.jpg',
    reviewText: 'Александр, спасибо большое за курс гимнастики! Первые результаты видны уже сейчас. Очень позитивная атмосфера у вас и настрой! С радостью приедем ещё.',
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
