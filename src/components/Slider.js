import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slide from "./Slide";

const data = [
  {
    id: 1,
    src: "https://cdn.pixabay.com/photo/2017/08/06/00/56/top-2596662_1280.jpg",
    headline: "Upgrade Your Wardrobe with Trendy Styles",
    body: "Discover our wide range of clothing options for all occasions. From casual wear to formal attire, our collection offers the perfect combination of comfort and style for your lifestyle.",
    cta: "Shop now",
    category: "clothing",
  },
  {
    id: 2,
    src: "https://cdn.pixabay.com/photo/2017/05/03/16/24/girl-2288221_1280.jpg",
    headline: "Stay Fashionable Everywhere You Go",
    body: "Keep up with the latest fashion trends and elevate your style on-the-go with our selection of accessories. Choose from top brands and affordable options, with unique designs to enhance your outfit.",
    cta: "Shop now",
    category: "accessories",
  },
  {
    id: 3,
    src: "https://cdn.pixabay.com/photo/2017/06/26/02/47/pair-2443211_1280.jpg",
    headline: "Step Up Your Shoe Game",
    body: "Enhance your footwear collection with our range of stylish shoes. From sneakers to formal shoes, choose from popular brands and a variety of styles to complement your outfit.",
    cta: "Shop now",
    category: "shoes",
  },
  {
    id: 4,
    src: "https://cdn.pixabay.com/photo/2015/06/22/08/37/children-817365_1280.jpg",
    headline: "Stay Warm and Stylish",
    body: "Embrace the colder seasons with our selection of cozy outerwear. Choose from jackets, coats, and more, from top brands and the latest fashion trends.",
    cta: "Shop now",
    category: "outerwear",
  },
  {
    id: 5,
    src: "https://cdn.pixabay.com/photo/2016/10/31/18/14/necklace-1784893_1280.jpg",
    headline: "Accessorize Your Look with Elegance",
    body: "Elevate your outfit with our selection of jewelry and accessories. Choose from a variety of options, from earrings to necklaces, to add a touch of elegance to your style.",
    cta: "Shop now",
    category: "jewelry",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? data.length - 1 : (prevSlide) => prevSlide - 1
    );
  };
  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === data.length - 1 ? 0 : (prevSlide) => prevSlide + 1
    );
  };

  return (
    <div className="frame relative overflow-x-hidden">
      <div
        className="slider relative "
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {data.map((image) => (
          <Slide image={image} key={image.id} />
        ))}
      </div>
      <div className="btns absolute z-[1]  text-gray-50 bottom-[50%] w-screen ">
        <div className="flex  justify-between pr-5 pl-1 gap-10 ">
          <button
            onClick={prevSlide}
            className="backdrop-blur-xl bg-black bg-opacity-50 text-sky-50 px-4 py-7"
          >
            <span>
              <BsArrowLeft />
            </span>
          </button>

          <button
            onClick={nextSlide}
            className="backdrop-blur-xl bg-black bg-opacity-50 text-sky-50 px-4 py-5"
          >
            <span>
              <BsArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
