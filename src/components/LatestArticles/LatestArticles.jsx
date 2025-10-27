import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { articles } from "./ArticlesData";

const LatestArticles = () => {
  return (
    <section className="max-w-7xl mx-auto pb-16 px-4 md:px-8 xl:rounded-xl" dir="rtl">
      {/* Header */}
      <div className="flex w-full justify-between items-center py-6">
        <span className="text-2xl text-right font-bold text-gray-800">
          آخرین مقالات
        </span>
        <a
          href="/blog"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition"
        >
          <span className="text-sm hidden md:block">ورود به بلاگ</span>
          <i className="icon-arrow-square-left text-xl" />
        </a>
      </div>

      {/* Swiper */}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        breakpoints={{
          426: { slidesPerView: 3, spaceBetween: 20 },
          769: { slidesPerView: 4, spaceBetween: 25 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
        modules={[Navigation, Autoplay]}
      >
        {articles.map((article) => (
          <SwiperSlide key={article.id}>
            <a
              href={article.link}
              className="flex flex-col justify-between m-4 rounded-xl bg-white shadow-md hover:shadow-2xl transition-shadow  duration-300 h-full"
            >
              <div className="flex flex-col">
                {/* Image */}
                <img
                  src={article.image}
                  alt={article.title}
                  className="mx-auto rounded-t-xl mb-2 w-auto h-40 object-contain"
                />

                {/* Title */}
                <div className="flex flex-col justify-around flex-1 text-center p-2">
                  <h3 className="leading-7 text-xs md:text-sm overflow-hidden h-16 flex items-center justify-center">
                    {article.title}
                  </h3>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default LatestArticles;
