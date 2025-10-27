import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import CountdownTimer from "../DailyDiscount/CountdownTimer";
import Imagep1 from "../../assets/imgs/product1anker.jpg"
import Imagep2 from "../../assets/imgs/product2handsfree.jpg"
import Imagep3 from "../../assets/imgs/product3masagor.jpg"
import Imagep4 from "../../assets/imgs/product4powerbank10000.jpg"
import Imagep5 from "../../assets/imgs/product5powerbank20000.jpg"
import ImageDiscount from "../../assets/imgs/discount-percent-svgrepo-com.svg"

const DailyDiscount = () => {
  const products = [
      {
          image: Imagep2,
          title: "هندزفری بلوتوثی دورگردنی مک دودو مدل Mcdodo HP-0210",
          oldPrice: 2190000,
          discount: 300000,
          newPrice: 1890000,
          link: "#",
        },
        {
            image: Imagep4,
            title: "پاوربانک 10000 میلی آمپر 22.5 واتی مک دودو مدل Mcdodo MC-4220",
            oldPrice: 1597000,
            discount: 200000,
            newPrice: 1397000,
            link: "#",
        },
        {
            image: Imagep1,
            title: "شارژر دیواری 30 واتی Zolo انکر مدل Anker A2698",
            oldPrice: 1079000,
            discount: 200000,
            newPrice: 879000,
            link: "#",
        },
        {
            image: Imagep5,
            title: "پاوربانک 20000 میلی آمپر 22.5 واتی انکر مدل Anker A1647H11",
            oldPrice: 3040000,
            discount: 200000,
            newPrice: 2840000,
            link: "#",
        },
        {
            image: Imagep3,
            title: "ماساژور ULTRA-MINI پاورولوژی مدل Powerology SM011",
            oldPrice: 3650000,
            discount: 255000,
            newPrice: 3395000,
            link: "#",
        }
  ];

  return (
    <section className="max-w-7xl mx-auto my-8 px-4 py-8 bg-gray-200 rounded-xl flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="hidden md:block text-lg text-gray-600">
          <CountdownTimer />
        </div>
        <h2
          className="text-4xl md:text-3xl font-bold flex items-center gap-2"
          dir="rtl"
        >
          <i className="icon-percent text-red-500">
            {" "}
            <img className="w-10 h-10 " src={ImageDiscount} alt="" />
          </i>
          تخفیف‌های روزانه دسترسی
        </h2>
      </div>

      {/* Product Layout */}
      <div className="flex flex-col lg:flex-row gap-4 lg:items-stretch lg:content-stretch min-h-[700px]">
        {/* Column 1 (3 stacked cards)  */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          <ProductCard {...products[0]} />
          <ProductCard {...products[1]} />
          <ProductCard {...products[2]} />
        </div>

        {/* Column 2 */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4 flex-1 ">
          <ProductCard {...products[3]} />
        </div>

        <div className="w-full lg:w-1/3 flex flex-col gap-4 flex-1">
          {/* Column 3 */}
          <ProductCard {...products[4]} />
        </div>
      </div>
    </section>
  );
};

export default DailyDiscount;
