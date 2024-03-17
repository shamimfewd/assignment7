import "./Banner.css";
const Banner = () => {
  return (
    <div className="heroImage flex  justify-center items-center  py-24">
      <div className="space-y-4 lg:space-y-8">
        <h1
          style={{ lineHeight: "6rem" }}
          className="text-4xl lg:text-6xl font-bold  lg:w-4/5  text-white  text-center mx-auto"
        >
          Discover an exceptional cooking class tailored for you!
        </h1>

        <p
          style={{ lineHeight: "2rem" }}
          className="text-white p-4 lg:w-2/3  text-center mx-auto"
        >
          Explore a personalized cooking experience, crafted to suit your tastes
          and skill level, in an exceptional cooking class designed just for
          you!
        </p>
        <div className="mx-auto text-center space-x-4">
          <button className="btn rounded-full font-bold bg-[#0BE58A] border border-[#0BE58A]">
            Explore Now
          </button>
          <button className="btn bg-transparent hover:border-[#0BE58A] hover:text-black hover:bg-[#0BE58A] text-white rounded-full font-bold">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
