import React from "react";
import Icon1Phone from "../../assets/imgs/icon1phone.png"
import Icon2Price from "../../assets/imgs/icon2price.png"
import Icon3Delivery from "../../assets/imgs/icon3delivery.png"
import Icon4Emkan from "../../assets/imgs/icon4emkanhuzuri.png"

const WhyDastresi = () => {
  return (
    <div className="max-w-7xl mx-auto hidden md:block p-4 mb-8">
      <h3 className="text-2xl text-center font-bold text-gray-900 mb-8">
        چرا دسترسی رو برای خرید انتخاب کنیم؟
      </h3>

      <div className="flex">
        {/* 1. مشاوره تخصصی */}
        <div className="flex flex-col flex-1 h-full justify-center items-center p-4">
          <img
            className="w-16 mb-2"
            src={Icon1Phone}
            alt="مشاوره تخصصی"
          />
          <p className="flex-1 text-center font-bold text-gray-600 mb-2">
            مشاوره تخصصی برای خرید محصول
          </p>
          <p className="text-center text-sm text-gray-800 leading-7">
            برای خرید هر محصول با تیم دسترسی در ارتباط باشید تا بهترین انتخاب رو
            انجام دهید.
          </p>
        </div>

        {/* 2. قیمت مناسب */}
        <div className="flex flex-col flex-1 h-full justify-center items-center p-4">
          <img
            className="w-16 mb-2"
            src={Icon2Price}
            alt="قیمت مناسب"
          />
          <p className="flex-1 text-center font-bold text-gray-600 mb-2">
            قیمت مناسب با بالاترین کیفیت
          </p>
          <p className="text-center text-sm text-gray-800 leading-7">
            گروه دسترسی در تلاش است که کالای با کیفیت را با مناسب‌ترین قیمت به
            دست شما برساند.
          </p>
        </div>

        {/* 3. ارسال سریع */}
        <div className="flex flex-col flex-1 h-full justify-center items-center p-4">
          <img
            className="w-16 mb-2"
            src={Icon3Delivery}
            alt="ارسال سریع"
          />
          <p className="flex-1 text-center font-bold text-gray-600 mb-2">
            ارسال سریع
          </p>
          <p className="text-center text-sm text-gray-800 leading-7">
            ارسال از طریق تیپاکس، پست پیشتاز و پیک موتوری (ویژه تهران) صورت
            می‌گیرد.
          </p>
        </div>

        {/* 4. خرید حضوری */}
        <div className="flex flex-col flex-1 h-full justify-center items-center p-4">
          <img
            className="w-16 mb-2"
            src={Icon4Emkan}
            alt="خرید حضوری"
          />
          <p className="flex-1 text-center font-bold text-gray-600 mb-2">
            امکان خرید حضوری
          </p>
          <p className="text-center text-sm text-gray-800 leading-7">
            مشتری گرامی جهت خرید حضوری می‌توانید به آدرس مندرج در پایین سایت
            مراجعه نمایید.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyDastresi;
