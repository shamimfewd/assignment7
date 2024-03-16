import "./Banner.css";
const Banner = () => {
  return (
    <div className="heroImage flex  justify-center items-center  py-24">
      <div className="space-y-4 lg:space-y-8">
        <h1 className="text-4xl lg:text-6xl font-bold lg:w-3/4 text-white  text-center mx-auto">
          Discover an exceptional cooking class tailored for you!
        </h1>

        <p className="text-white p-4 lg:w-2/3  text-center mx-auto">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ coding problems to become an exceptionally
          well world-class Programmer.
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
