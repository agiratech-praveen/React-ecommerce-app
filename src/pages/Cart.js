import { useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);

  return (
    <div className="h-[30rem] flex flex-col gap-5 items-center justify-center">
      {cart.length > 0 ? (
        <>
          {/* Render cart items here */}
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              {/* Render cart item details */}
            </div>
          ))}
        </>
      ) : (
        <h1 className="text-center text-xl font-semibold text-gray-700">
          No Products added yet!
        </h1>
      )}
      <Link
        to="/product"
        className="text-xl py-1 text-center hover:text-cyan-500 duration-300 select-none"
      >
        &larr; Go to Products
      </Link>
    </div>
  );
};

export default Cart;
