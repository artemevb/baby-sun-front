import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Обрабатываем только интернационализированные маршруты
  matcher: ['/', '/(ru|uz)/:path*'],
};
