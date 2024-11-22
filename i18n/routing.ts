import {defineRouting} from 'next-intl/routing';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['ru', 'uz'], // Локали проекта
  defaultLocale: 'ru',   // Локаль по умолчанию
});

// Экспортируем обертки для Next.js API навигации
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation(routing);
