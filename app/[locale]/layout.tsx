import { Raleway } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { unstable_setRequestLocale } from "next-intl/server";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer/Footer";
import "./globals.css";

// Подключение Google Fonts (Raleway)
const raleway = Raleway({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale?: string };
}>) {
  // Устанавливаем локаль для запроса

  // SEO и OG данные для узбекского и русского языков
  const siteUrl = "https://baby-sun.uz";

  type Locales = "ru" | "uz";

  const seoData: Record<
    Locales,
    {
      title: string;
      description: string;
      imageUrl: string;
      canonicalUrl: string;
    }
  > = {
    ru: {
      title: "Baby sun | Ташкент",
      description:
        "Детская клиника",
      imageUrl: `${siteUrl}/favicon.ico`,
      canonicalUrl: `${siteUrl}/ru`,
    },
    uz: {
      title: "Baby sun | Toshkent",
      description:
        "Bolalar klinikasi",
      imageUrl: `${siteUrl}/favicon.ico`,
      canonicalUrl: `${siteUrl}/uz`,
    },
  };

  const locale: Locales = params?.locale === "uz" ? "uz" : "ru"; // Определяем локаль как 'ru' или 'uz'

  const { title, description, imageUrl, canonicalUrl } = seoData[locale];
  unstable_setRequestLocale(locale);

  // Получаем сообщения для текущей локали
  const messages = await getMessages({ locale });

  // Структурированные данные (schema.org)
  // const schemaData = {
  //   "@context": "https://schema.org",
  //   "@type": "Organization",
  //   name: "Baby sun",
  //   url: siteUrl,
  //   logo: imageUrl,
  //   sameAs: [
  //     "https://www.facebook.com/profile.php?id=61550487363700&mibextid=ZbWKwL",
  //     "https://www.instagram.com/babysun_nat_bolalarklinikasi?igsh=OTZ1Z2Y1eDh6bWRq",
  //   ],
  //   contactPoint: {
  //     "@type": "ContactPoint",
  //     telephone: "+998 99 890 93 88",
  //     contactType: "Customer Service",
  //   },
  // };

  // <script type="application/ld+json">{JSON.stringify(schemaData)}</script>

  return (
    <html lang={locale}>
      <head>
        {/* Базовые SEO-теги */}
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Baby sun" />
        <link rel="canonical" href={canonicalUrl} />
        {/* Open Graph (OG) теги */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />{" "}
        {/* Рекомендованные размеры */}
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Baby sun" />
        {/* Теги для Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        {/* Структурированные данные (Schema.org) */}
        <title>{title}</title>
      </head>
      <body className={`${raleway.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
