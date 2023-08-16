import Whyme from "../components/Whyme";
import Herotext from "../components/Herotext";
import OurTeam from "../components/OurTeam";
const About = () => {
  return (
    <>
      <Herotext textt="About Us" />
      <section className=" bg-gray-50 py-20 px-20 ">
        <div className="container mx-auto grid grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col gap-3">
              <h1 className="text-6xl font-semibold text-gray-700">
                Who we are?
              </h1>
              <p className="text-lg text-gray-700">
              We are a team of enthusiastic individuals committed to providing exceptional customer service and top-notch products. We want to make technology available to everyone, anywhere on the planet. Shop with us to learn what it's like to collaborate with a team that is dedicated to prioritising the requirements of the customer.
              </p>
            </div>
          </div>
          <div>
            <img
              className="w-[80%] mx-auto"
              src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="team img"
            />
          </div>
        </div>
      </section>
      <OurTeam />
      <Whyme />
    </>
  );
};

export default About;
