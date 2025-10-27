import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { bestSellers } from "./BestSellersData"; // You’ll create this file next

const BestSellers = () => {
  return (
    <section className="max-w-7xl mx-auto mb-12 px-8 md:px-8 xl:rounded-xl h-[450px] bg-gray-200" >
      {/* Header */}
      <div className="flex flex-row justify-between items-center mb-6">
        <a
          href="https://www.dastresi.com/products?sort=0&avaliable_products=1"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition"
        >
          <span className="text-sm hidden md:block">مشاهده همه محصولات</span>
          <i className="icon-arrow-square-left text-xl" />
        </a>
        <h3 className="text-2xl font-bold text-gray-800 pt-5">
          پرفروش‌ترین محصولات
        </h3>
      </div>

      {/* Swiper */}
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        navigation={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 20 },
          768: { slidesPerView: 4, spaceBetween: 25 },
          1024: { slidesPerView: 5, spaceBetween: 30 },
        }}
        modules={[Navigation, Autoplay]}
      >
        {bestSellers.map((item) => (
          <SwiperSlide key={item.id}>
            <a
              href={item.link}
              className="flex flex-col justify-between rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 relative h-[360px]"
            >
              {/* Status Dots */}
              <div className="hidden md:flex flex-col absolute left-1 top-1 p-2 gap-1">
                {item.colors?.map((color, i) => (
                  <span
                    key={i}
                    className="w-3 h-3 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>

              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="mx-auto rounded-t-xl w-[200px] h-[200px] object-contain"
              />

              {/* Text Section */}
              <div className="flex flex-col flex-1 justify-between p-2 text-center">
                <span className="text-xs text-gray-400 hidden md:block">
                  {item.category}
                </span>
                <h3 className="leading-6 text-sm text-gray-800 line-clamp-2">
                  {item.title}
                </h3>
              </div>

              {/* Prices */}
              {item.status === "sold-out" ? (
                <div className="flex items-center justify-center border-t border-gray-200 bg-red-100 text-red-700 text-sm rounded-b-xl py-2">
                  ناموجود
                </div>
              ) : (
                <div className="flex flex-col gap-1 pb-3 px-2">
                  {item.oldPrice && (
                    <div className="text-gray-400 line-through text-sm text-center">
                      {item.oldPrice.toLocaleString()}
                    </div>
                  )}
                  {item.price && (
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-blue-600 font-bold text-xl">
                        {item.price.toLocaleString()}
                      </span>
                      <span className="text-gray-500 text-xs">تومان</span>
                    </div>
                  )}
                </div>
              )}
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BestSellers;
