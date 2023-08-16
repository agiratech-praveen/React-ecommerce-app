import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ product, addToCart }) => {
  const { imgUrl, productName, brand, price } = product;
  

  return (
    <div className="single-product flex flex-col bg-gray-50 gap-3 shadow-md hover:shadow-xl hover:scale-105 duration-300 px-4 py-7 rounded-sm overflow-hidden">
      <div className="flex justify-center">
        <img
          className="w-72 h-48 object-contain hover:scale-110 duration-500"
          src={imgUrl}
          alt={productName}
        />
      </div>
      <Link
        to={productName}
        state={product}
        className="hover:text-rose-500 duration-300 flex justify-between items-center"
      >
        <h2 className="text-stone-950 font-semibold text-xl capitalize">
          {productName.slice(0, 20)}
        </h2>
      </Link>
      <p className="text-sm text-gray-600">
        Price: <span className="text-rose-500 font-semibold">{price}</span>
      </p>
      <div className="flex justify-between items-center">
        <Link
          to={productName}
          state={product}
          className="hover:text-rose-50 text-gray-900 duration-300 flex justify-between items-center"
        >
          <button className="text-sky-400 px-2 py-1 border border-sky-400 rounded-md hover:bg-sky-400 hover:text-sky-50 duration-300">
            More Info
          </button>
        </Link>
        <Link
          to={productName}
          state={product}
          className="hover:text-rose-50 text-gray-900 duration-300 flex justify-between items-center"
        >
          <button className="text-sky-400 px-2 py-1 border border-sky-400 rounded-md hover:bg-sky-400 hover:text-sky-50 duration-300">
           Add to cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleProduct;