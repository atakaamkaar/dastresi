import React from "react";
import LogoImage from "../../assets/imgs/logo.png";
import SearchBar from "./SearchBar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";
import "flowbite/dist/flowbite.css";

// megamenu items
const megaMenuItems = [
  { id: 1, title: " خانه", links: [] },
  {
    id: 2,
    title: "  لوازم جانبی موبایل و کامپیوتر     ",
    links: [
      "ماوس و کیبورد و پدموس",
      "اسپیکر",
      "تجهیزات ذخیره سازی",
      "هولدر و نگهدارنده",
      "کابل شارژ",
      "آداپتور و شارژر",
      "هندزفری و هدست، میکروفون",
      "پاوربانک و جامپ استارتر",
      "دسته بازی و خنک کننده موبایل",
      "انواع تبدیل برق",
      "کابل و دانگل انتقال تصویر",
      "انواع هاب",
      "فن خنک کننده کامپیوتر",
    ],
  },
  {
    id: 3,
    title: " کابل - مبدل - رابط  ",
    links: [
      "کابل HDMI",
      "کابل پرینتر",
      "کابل هارد اکسترنال",
      "انواع رابط و تبدیل",
      "کابل AUX",
      "کابل 2 به 1 صدا",
      "کابل اپتیکال",
      "کابل و فیش OTG",
    ],
  },
  {
    id: 4,
    title: " لوازم تولید محتوا  ",
    links: ["میکروفون", "رینگ لایت و پایه"],
  },
  {
    id: 5,
    title: "   لوازم شبکه  ",
    links: ["مودم - روتر", "هاب شبکه", "مودم همراه", "لوازم  جانبی"],
  },
  {
    id: 6,
    title: "کنسول بازی و لوازم جانبی  ",
    links: [
      "کیف",
      "کنسول",
      "موس و کیبورد",
      "دسته بازی",
      "هندزفری و هدست",
      "شارژر دسته بازی",
    ],
  },
  {
    id: 7,
    title: " لوازم خانگی و شخصی ",
    links: [
      "انواع گجت های جذاب",
      "باتری و شارژر",
      "اندروید باکس و گیرنده دیجیتال",
      "آنتن رومیزی",
      "مچ بند و ساعت هوشمند",
      "محصولات کمبو",
      "رابط برق و USB",
      "اف ام پلیر",
    ],
  },
  {
    id: 8,
    title: "برند‌ها",
    links: [
      "Haylou",
      "Die Hard",
      "SkullCandy",
      "Apple",
      "Camelion",
      "Koluman Plus",
      "yesido",
      "Naztech",
    ],
  },
];

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [activeDropdown, setActiveDropdown] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className=" pedar" dir="rtl">
      {/* ========== HEADER ========== */}
      <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
        <nav className="relative max-w-7xl w-full gap-5 mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8 flex">
          {/* Logo + Collapse Button */}
          {/* Collapse Button */}
          <button
            type="button"
            className="hs-collapse-toggle md:hidden relative w-9 h-9 flex justify-center items-center font-medium text-sm rounded-lg border border-gray-500 text-gray-800 bg-gray-400 hover:bg-gray-600 focus:outline-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            id="hs-header-base-collapse"
            aria-expanded="false"
            aria-controls="hs-header-base"
            data-hs-collapse="#hs-header-base"
          >
            <svg
              className="hs-collapse-open:hidden w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            <svg
              className="hs-collapse-open:block hidden w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
            <span className="sr-only">Toggle navigation</span>
          </button>
          <div className="flex justify-between items-center gap-x-1">
            <a
              className="flex-none font-semibold text-xl text-black dark:text-white"
              href="#"
              aria-label="Brand"
            >
              <img src={LogoImage} alt="Logo" className="h-10" />
            </a>
          </div>

          {/* Collapse */}
          <div
            id="hs-header-base"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 md:block md:basis-auto md:grow"
            aria-labelledby="hs-header-base-collapse"
          >
            <div className="overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 py-2 md:py-0">
                {/* Navigation Links */}
                <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-1 md:order-1">
                  {/* Search Bar */}
                  <div className="flex items-center gap-16 outline-none">
                    <SearchBar />
                  </div>

                  <a
                    href="/customer-club"
                    className="block pl-3 py-3 text-sm text-gray-light font-bold hover-icon hover:text-blue-500 mx-5"
                  >
                    باشگاه مشتریان
                  </a>

                  <a
                    href="/blog"
                    className="block pl-3 py-3 text-sm text-gray-light font-bold hover-icon  hover:text-blue-500"
                  >
                    بلاگ
                  </a>

                  <a
                    href="/contact"
                    className="block pl-3 py-3 text-sm text-gray-light font-bold hover-icon  hover:text-blue-500"
                  >
                    ارتباط ما
                  </a>

                  <a
                    href="/about"
                    className="block pl-3 py-3 text-sm text-gray-600 font-bold hover-icon  hover:text-blue-500"
                  >
                    درباره ما
                  </a>
                  {/* sign-in  */}
                  <div className="flex flex-wrap items-center gap-x-1.5 right-auto left-4 absolute top-2">
                    <a
                      href="#"
                      className="py-3 px-3 inline-flex items-center font-extrabold font-serif text-sm rounded-lg bg-blue-800 text-white hover:bg-green-900 dark:bg-blue-500 dark:hover:bg-blue-600 justify-end"
                    >
                      <span>ورود و ثبت‌نام</span>
                    </a>
                  </div>
                  {/* end of sign- in button  */}
                </div>

                {/* Divider */}
                <div className="my-2 md:my-0 md:mx-2">
                  <div className="w-full h-px md:w-px md:h-4 bg-gray-100 md:bg-gray-300 dark:bg-neutral-700"></div>
                </div>

                {/* Button Group */}
              </div>
            </div>
          </div>
          {/* End Collapse */}
        </nav>
        {/* mega menu start */}
        <div className="hidden lg:flex justify-between max-w-[1300px] w-full gap-4 text-gray-500 bg-white border-t border-gray-200 pr-[200px] ">
          {megaMenuItems.map((item) => (
            <div
              key={item.id}
              className="relative px-3 py-2 cursor-pointer flex "
              onMouseEnter={() => setActiveDropdown(item.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span className="font-bold hover:text-orange-400 justify-between">
                {item.title}
              </span>
              {activeDropdown === item.id && (
                <div className="absolute top-full left-0 bg-white shadow-lg w-64 p-4 z-50">
                  {item.links.map((link, i) => (
                    <a
                      key={i}
                      href="#"
                      className=" py-2.5 hover:text-blue-500 block"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* mega menu end */}
      </header>
      {/* ========== END HEADER ========== */}
    </div>
  );
};

export default Header;
