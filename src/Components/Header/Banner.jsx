import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <div className="heroImage">
        <h1 className="text-6xl font-bold text-white">
          Discover an exceptional cooking class tailored for you!
        </h1>

        <p className="text-white">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ coding problems to become an exceptionally
          well world-class Programmer.
        </p>
        <button className="btn">Explore Now</button>
        <button className="btn">Our Feedback</button>
      </div>
    </div>
  );
};

export default Banner;
