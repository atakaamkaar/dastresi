import React from "react";
import PhoneSvg from "../../assets/imgs/call-phone-service-svgrepo-com.svg"
import ClockSvg from "../../assets/imgs/clock-square.svg"
import LocationSvg from "../../assets/imgs/location-svgrepo-com.svg"
import DastresiLogo from "../../assets/imgs/logo.png"
import InstaLogo from "../../assets/imgs/instagram-1-svgrepo-com.svg"
import EnamadLogo from "../../assets/imgs/e-namad.jpg"
const Footer = () => {
  return (
    <footer dir="rtl" className="disable-select relative w-full">
      {/* Contact Bar */}
      <div className="bg-gray-300">
        <div className="portlet" id="yw18">
          <div className="portlet-content">
            <div className="flex flex-col lg:flex-row justify-between text-black-87 p-6 text-sm max-w-7xl mx-auto">
              <div className="flex items-center mb-4 lg:mb-0">
                <span className="flex gap-2 items-center text-gray">
                  <i className="icon-phone text-lg w-[18px] h-[17px]">
                    {" "}
                    <img src={PhoneSvg} alt="" />
                  </i>
                  <span>021-33902646</span>
                </span>
              </div>

              <div className="flex items-center mb-4 lg:mb-0 leading-7">
                <span className="flex gap-2 items-center text-gray">
                  <i className="icon-clock text-xl w-[18px] h-[17px]">
                    {" "}
                    <img src={ClockSvg} alt="" />
                  </i>
                  <span>
                    شنبه تا چهارشنبه از ساعت 10 صبح الی ساعت 18 پنجشنبه ها از 10
                    صبح الی ساعت 16
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-2 leading-7 lg:items-center text-gray">
                <i className="icon-location text-xl  lg:mt-0 w-[25px] h-[25px]">
                  <img src={LocationSvg} alt="" />
                </i>
                <span>
                  تهران - میدان امام خمینی - پاساژ لباف - همکف - پلاک 3 -
                  فروشگاه بدیع
                </span>
              </div>

              <div
                id="button"
                className="hidden xl:flex bg-white text-xs text-gray rounded-xl p-2 pr-2 pl-1 cursor-pointer hover-black items-center show w-24 justify-between leading-5 shadow-md"
              >
                <span>برو بالا</span>
                <i className="icon-up-open text-xs text-gray align-middle p-2"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-black-04">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8 py-4 lg:py-8">
          {/* Logo & Social */}
          <div className="justify-center items-center flex flex-col gap-8 pt-8 lg:pt-0">
            <img
              style={{ maxWidth: "190px" }}
              src={DastresiLogo}
              alt="Dastresi Logo"
            />
            <div className="flex flex-row flex-wrap gap-4 justify-center">
              <div className="flex text-sm">با ما در ارتباط باشید:</div>
              <a
                href="https://www.instagram.com/dastresii"
                className="px-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-[25px] h-[25px]"
                  src={InstaLogo}
                  alt="Instagram"
                />
              </a>
            </div>
          </div>

          {/* About / Description */}
          <div className="mt-4 md:mt-0">
            <div className="font-bold text-xl text-black-87 mb-4">
              فروشگاه اینترنتی دسترسی
            </div>
            <div className="text-black-60 leading-7">
              فروشگاه دسترسی فعالیت خود را از سال 1389 به صورت فروش فیزیکی کالا
              در حوزه لوازم جانبی کامپیوتر و موبایل در تهران شروع کرد و از سال
              1398 از طریق پیج اینستاگرام وارد فروش آنلاین شد و به خاطر ارائه
              کالای اصلی و مشاوره های دقیق در بازه بسیار کوتاهی توانست اعتماد
              بسیاری از مشتریانش را جلب کند و سرانجام در سال 1399 فروش از طریق
              سایت را هم به فعالیت های خود اضافه کرد تا اینکه بتواند با بررسی
              دقیق کالاها انتخاب صحیح شما را به ارمغان آورد. و امروز دسترسی
              فعالیت خود را در زمینه آداپتور موبایل، کابل شارژ، پاوربانک، ساعت
              هوشمند، هندزفری و هدست، لوازم گیمینگ، باتری و شارژر، لوازم شبکه،
              تجهیزات ذخیره سازی، گیرنده دیجیتال و هزاران گجت جذاب ادامه میدهد.
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full">
            <h3 className="font-bold text-xl mb-4 text-center md:text-right">
              دسترسی سریع
            </h3>
            <div className="portlet" id="4">
              <div className="portlet-content">
                <div className="flex flex-row gap-16 justify-between">
                  <div className="flex flex-col">
                    <a
                      href="/customer-club"
                      className="text-sm text-gray hover-black mb-4"
                    >
                      باشگاه مشتریان
                    </a>
                    <a
                      href="/faq"
                      className="text-sm text-gray hover-black mb-4"
                    >
                      سوالات متداول
                    </a>
                    <a
                      href="/blog"
                      className="text-sm text-gray hover-black mb-4"
                    >
                      بلاگ
                    </a>
                    <a
                      href="/terms"
                      className="text-sm text-gray hover-black mb-4"
                    >
                      شرایط و قوانین
                    </a>
                    <a
                      href="/contact"
                      className="text-sm text-gray hover-black mb-4"
                    >
                      ارتباط ما
                    </a>
                    <a
                      href="/about"
                      className="text-sm text-gray hover-black mb-4"
                    >
                      درباره ما
                    </a>
                  </div>
                  <div className="flex flex-col"></div>
                </div>
              </div>
            </div>
          </div>

          {/* E-namad Trust Seal */}
          <div className="mt-4 md:mt-0 w-full flex items-center justify-center">
            <a
              referrerPolicy="origin"
              target="_blank"
             
            >
              <img
                referrerPolicy="origin"
                src={EnamadLogo}
                alt="E-Namad Trust Seal"
                style={{ cursor: "pointer" }}
              
              />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="font-medium text-sm text-center bg-blue-700 text-white py-3">
        تمامی حقوق این سایت محفوظ و متعلق به فروشگاه اینترنتی دسترسی می‌باشد.
      </div>
    </footer>
  );
};

export default Footer;
