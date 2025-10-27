import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { products } from "./ProductsAvailable";

const AvailableNow = () => {
  return (
    <section className="max-w-7xl mx-auto p-4 mb-8 xl:rounded-xl bg-gray-200">
      <h3 className="text-2xl text-center font-bold text-black-87 mb-6">
        همین الان موجود شد...
      </h3>

      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        navigation={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
          1280: { slidesPerView: 4, spaceBetween: 20 },
        }}
        modules={[Navigation, Autoplay]}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <a href={product.link} className="flex justify-center">
              <div className="flex flex-col rounded-xl bg-white shadow hover:shadow-lg transition-shadow w-[290px] h-[380px] relative">
                {/* Status Dot */}
                <span
                  className="w-3 h-3 absolute top-2 left-2 rounded-full border border-gray-300"
                  style={{
                    backgroundColor:
                      product.status === "sold-out" ? "#FF0000" : "#000000",
                  }}
                ></span>

                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[250px] object-contain rounded-t-xl mx-auto"
                />

                {/* Product Info */}
                <div className="flex-1 flex flex-col justify-between p-2">
                  <span className="text-xs text-gray-light mb-1 hidden md:block text-center">
                    {product.category}
                  </span>
                  <h3 className="text-sm text-center leading-6 overflow-hidden">
                    {product.title}
                  </h3>

                  {product.oldPrice && (
                    <div className="text-gray-light line-through text-sm text-center mt-1">
                      {product.oldPrice.toLocaleString()} تومان
                    </div>
                  )}

                  {product.price && (
                    <div className="text-color font-bold text-xl text-center mt-1">
                      {product.price.toLocaleString()} تومان
                    </div>
                  )}
                </div>

                {/* Sold Out Banner */}
                {product.status === "sold-out" && (
                  <div className="absolute bottom-0 w-full flex items-center justify-center border-t border-gray bg-red-100 text-red-800 text-sm rounded-b-xl py-1">
                    ناموجود
                  </div>
                )}
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default AvailableNow;
