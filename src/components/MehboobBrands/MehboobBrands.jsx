import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Logo1anker from "../../assets/imgs/logo1anker.jpg"
import Logo2inoben from "../../assets/imgs/logo2inoben.jpg";
import Logo3ravpower from "../../assets/imgs/logo3ravpower.jpg";
import Logo4mcdodo from "../../assets/imgs/logo4mcdodo.jpg";
import Logo5calemion from "../../assets/imgs/logo5calemion.jpg";
import Logo6powerology from "../../assets/imgs/logo6powerology.jpg";
import Logo7acefast from "../../assets/imgs/logo7acefast.jpg";

const brands = [
  {
    id: 1,
    name: "انکر",
    image: Logo1anker,
    link: "/brands/anker",
  },
  {
    id: 2,
    name: "آینوبن",
    image: Logo2inoben,
    link: "/brands/inoben",
  },
  {
    id: 3,
    name: "راوپاور",
    image: Logo3ravpower,
    link: "/brands/ravpower",
  },
  {
    id: 4,
    name: "مک دودو",
    image:
      Logo4mcdodo,
    link: "/brands/mcdodo",
  },
  {
    id: 5,
    name: "کملیون",
    image: Logo5calemion,
    link: "/products?brands[0]=21",
  },
  {
    id: 6,
    name: "پاورولوژی",
    image: Logo6powerology,
    link: "/brands/powerology",
  },
  {
    id: 7,
    name: "ایس فست",
    image: Logo7acefast,
    link: "/brands/AceFast",
  },
];

const PopularBrands = () => {
  return (
    <section className="max-w-7xl mx-auto mb-4 px-4 ">
      {/* Header */}
      <div className="flex flex-row items-center relative mb-3">
        <div className="flex flex-1 flex-col">
          <div className="flex justify-end mb-2">
            <span className="text-2xl text-center font-bold text-gray-800">
              محبوب ترین برندها
            </span>
          </div>
        </div>
      </div>

      {/* Swiper */}
      <div className="flex items-center justify-center rounded-xl mx-auto">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            426: { slidesPerView: 6 },
            769: { slidesPerView: 6 },
            1280: { slidesPerView: 6 },
          }}
          modules={[Navigation, Autoplay]}
        >
          {brands.map((brand) => (
            <SwiperSlide key={brand.id}>
              <a
                href={brand.link}
                className="flex flex-col items-center p-2 justify-center rounded-xl shadow-md bg-white my-4 hover:shadow-lg transition"
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-24 object-contain"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularBrands;
