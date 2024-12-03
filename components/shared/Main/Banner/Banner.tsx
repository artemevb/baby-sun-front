// "use client";
// import React from "react";
// import { cn } from "@lib/utils";
// import Image from "next/image";

// interface Props {
//   className?: string;
// }

// export const Banner = ({ className }: Props) => {
//   return (
//     <section
//       className={cn(
//         "w-full h-screen70 max-mdx:h-screen60 relative bg-[#F1F8FF]",
//         className
//       )}
//     >
//       <div className="w-full flex max-lgx:flex-col h-full">
//         <div className="flex-1 h-full flex flex-col items-start justify-center p-8">
//           <h2 className="text-5xl text-[#008CFF] font-bold mb-4">Хирургия</h2>
//           <p className="text-lg text-[#4A4A4A] mb-6">
//             Высокоточные операции с применением современных методик для быстрого
//             восстановления и максимальной безопасности пациента
//           </p>
//           <button className="bg-[#008CFF] text-white py-3 px-6 rounded-full hover:bg-[#006FCC] transition-all">
//             Подробнее
//           </button>
//         </div>
//         <div className="flex-1 h-full relative flex justify-end">
//           <Image
//             src={'/images/main/banner/image-desktop.png'}
//             width={2000}
//             height={2000}
//             alt="Image Desktop banner"
//             className="h-full w-full object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

'use client';
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@lib/utils";
import Image from "next/image";
import { RequestAppointment } from "../../Request/RequestAppointment";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

interface Props {
  className?: string;
}

interface BannerItem {
  id: number;
  title: string;
  description: string;
  buttonName: string;
  link: string;
  bannerPhoto: string;
}

export const Banner = ({ className }: Props) => {
  const t = useTranslations("Banner");

  const bannerData: BannerItem[] = [
    {
      id: 1,
      title: t("banner1.title"),
      description: t("banner1.description"),
      buttonName: t("banner1.buttonName"),
      link: "/about",
      bannerPhoto: "/images/main/banner/new2.png",
    },
    {
      id: 2,
      title: t("banner2.title"),
      description: t("banner2.description"),
      buttonName: t("banner2.buttonName"),
      link: "/courses/hijoma-and-zuluk",
      bannerPhoto: "/images/main/banner/image_22.png",
    },
    {
      id: 3,
      title: t("banner3.title"),
      description: t("banner3.description"),
      buttonName: t("banner3.buttonName"),
      link: "/",
      bannerPhoto: "/images/main/banner/2224.png",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === bannerData.length - 1 ? 0 : prev + 1));
    }, 8000); // 8 seconds interval
    return () => clearInterval(interval);
  }, [bannerData.length]);

  const handleSwipe = (e: TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX.current !== null) {
      const touchStartXValue = touchStartX.current;
      if (touchEndX - touchStartXValue > 50) {
        prevSlide();
      } else if (touchStartXValue - touchEndX > 50) {
        nextSlide();
      }
    }
    touchStartX.current = null; // Reset the start point after swipe
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX; // Save the initial touch point
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === bannerData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? bannerData.length - 1 : prev - 1));
  };

  useEffect(() => {
    const slider = slideRef.current;
    if (slider) {
      // Cast event handlers to unknown and then to EventListener to satisfy TypeScript
      slider.addEventListener("touchstart", handleTouchStart as unknown as EventListener);
      slider.addEventListener("touchend", handleSwipe as unknown as EventListener);
    }
    return () => {
      if (slider) {
        slider.removeEventListener("touchstart", handleTouchStart as unknown as EventListener);
        slider.removeEventListener("touchend", handleSwipe as unknown as EventListener);
      }
    };
  }, []);

  const slideAnimation = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
    transition: { duration: 0.7 },
  };

  return (
    <section
      className={cn(
        "w-full mdx:h-screen70 overflow-hidden flex flex-col relative bg-[#F1F8FF]",
        className
      )}
    >
      <div
        ref={slideRef}
        className="w-full flex justify-between max-lgx:flex-col flex-grow"
      >
        <div className="flex-1 flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.7, ease: "easeInOut" }}
              variants={slideAnimation}
              className="flex flex-col w-full lgx:max-w-[500px] max-lgx:px-4 max-lgx:py-12"
            >
              <h2 className="text-5xl text-[#009FE3] font-bold mb-4">
                {bannerData[currentSlide].title}
              </h2>
              <p className="text-lg text-[#4A4A4A] mb-6">
                {bannerData[currentSlide].description}
              </p>
              {bannerData[currentSlide].id === 3 ? (
                <RequestAppointment
                  className="bg-[#009FE3] text-white py-3 px-12 rounded-full hover:bg-[#006FCC] transition-all"
                  title={t("banner3.buttonName")}
                />
              ) : (
                <Link href={bannerData[currentSlide].link}>
                  <button className="bg-[#009FE3] text-white py-3 px-12 rounded-full hover:bg-[#006FCC] transition-all">
                    {bannerData[currentSlide].buttonName}
                  </button>
                </Link>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="h-full relative flex items-center justify-center flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.7, ease: "easeInOut" }}
              variants={slideAnimation}
              className="flex flex-col w-full h-full items-center justify-center"
            >
              <Image
                src={bannerData[currentSlide].bannerPhoto}
                width={3000}
                height={3000}
                quality={100}
                alt={t("bannerAlt", { id: bannerData[currentSlide].id })}
                className="w-full h-full object-contain"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="w-full h-[80px] gap-4 bg-white flex justify-center items-center">
        {bannerData.map((_, index) => (
          <div key={index} className="w-[40px] bg-[#E4F1FF] h-[3px] overflow-hidden relative">
            <div
              className={`absolute transition-all duration-0 -left-1/2 h-[3px] ${index === currentSlide ? "w-full" : "w-1/3"
                } bg-[#009FE3] ${currentSlide === index ? "line-anima" : ""}`}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
};
