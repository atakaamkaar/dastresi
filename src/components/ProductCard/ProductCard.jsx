import React from "react";

const ProductCard = ({ image, title, oldPrice, discount, newPrice, link }) => {
  return (
    <a href={link} className="group   flex-1 h-full">
      <div className="rounded-xl shadow flex flex-row items-center lg:flex-col bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 gap-2 p-3 flex-1 h-full">
        {/* Image */}
        <div className="relative flex justify-center w-40 lg:w-full">
          <img
            src={image}
            alt={title}
            className="w-32 lg:w-48 mx-auto rounded-lg object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col flex-1 justify-between gap-2 p-3 text-right">
          <h3 className="text-sm font-medium text-gray-800 leading-6 line-clamp-2">
            {title}
          </h3>

          {/* Prices */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-row justify-between">
              <span className="font-bold text-gray-400 line-through text-sm">
                {oldPrice.toLocaleString()}
              </span>
              <span className="text-red-500 bg-red-50 px-2 py-0.5 rounded-xl text-xs font-medium">
                {discount.toLocaleString()} تومان تخفیف
              </span>
            </div>

            <div className="flex flex-row items-center justify-end gap-1">
              <span className="text-green-600 font-bold text-lg">
                {newPrice.toLocaleString()}
              </span>
              <span className="text-gray-500 text-xs">تومان</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
