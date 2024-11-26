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

  const locale: Locales = params?.locale === "uz" ? "uz" : "ru";

  const { title, description, imageUrl, canonicalUrl } = seoData[locale];
  unstable_setRequestLocale(locale);


  const messages = await getMessages({ locale });


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

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Baby sun",
            "url": siteUrl,
            "logo": `${siteUrl}/favicon.ico`,
            "sameAs": [
              "https://www.youtube.com/@babysunbybolalar.massaji",
              "https://www.facebook.com/people/Nilufar-Shukrullayevna/pfbid02D1gS3K8vPPpYUfA6WkxNeJH6mzdKuq2YMKb7aETan9xLup5miNvC9WrxH5xDZH5fl/?mibextid=qi2Omg&rdid=apvvmhWHC9qyoxlr&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FKFm7J2eZ84uXdKEq%2F%3Fmibextid%3Dqi2Omg",
              "https://t.me/bolalarmassajibabysun",
              "https://www.instagram.com/baby.sunnat?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+998777026688",
              "areaServed": "UZ",
              "availableLanguage": ["Uzbek", "Russian"],
              "contactType": "Customer Service"
            }
          })}
        </script>

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
