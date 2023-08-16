import { Link, useLocation } from "react-router-dom";

const ProductDetails = () => {
  const { state: product } = useLocation();

  const { imgUrl, productName, description, id, price, brand } = product;

  return (
    <section className="flex flex-col gap-16 py-10 bg-gray-100">
      <div className="container mx-auto flex justify-around items-center w-[80%]">
        <div className="w-96 flex justify-end">
          <img src={imgUrl} alt={productName} className="w-full select-none" />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-gray-500">
            {"Home/"}
            <Link to="/product">product</Link>
            {`/${productName}`}
          </p>
          <h2 className="text-4xl">{productName.slice(0, 30)}</h2>
          <span className="font-semibold">
            Price: <span className="text-2xl">{price}</span>
          </span>
          <span className="font-semibold">Brand: {brand}</span>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl">Key features</h1>
            <p className="text-gray-800">{description.slice(0, 35)}</p>
            {/* ... other description slices ... */}
          </div>
          {/* ... rest of the code ... */}
        </div>
      </div>
      <Link
        to="/product"
        className="text-xl py-1 text-center hover:text-cyan-500 duration-300 select-none"
      >
        &larr; Go to Product
      </Link>
    </section>
  );
};

export default ProductDetails;
