import { MdOutlineAccessTime } from "react-icons/md";
import { RiFireLine } from "react-icons/ri";

const Recipe = ({ recipe, handleCartBtn }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    calories,
    preparing_time,
  } = recipe;

  return (
    <div className="">
      <div className="card  bg-base-100 shadow-xl">
        <figure className="">
          <img
            className="w-full h-[200px] object-cover"
            src={recipe_image}
            alt=""
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title text-[#000000dd]">{recipe_name}</h2>
          <p className="text-[#000000dd]">{short_description}</p>
          <hr />
          <h4 className="font-bold text-[#000000dd]">
            Ingredients: {ingredients.length}
          </h4>

          <div className="ml-8 text-[#000000cd]">
            <ul style={{ listStyleType: "disc" }}>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <hr />
          <div className="flex justify-between items-center font-bold text-gray-500">
            <p className="flex items-center gap-2">
              <MdOutlineAccessTime />
              <span>{preparing_time}</span>
            </p>
            <p className="flex items-center gap-2">
              <RiFireLine />
              <span>{calories}</span>
            </p>
          </div>

          <div className="card-actions justify-start">
            <button
              onClick={() => handleCartBtn(recipe)}
              className="btn bg-[#0BE58A]  font-bold rounded-full"
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;

//   https://ibb.co/dWXQg5z
// https://ibb.co/ZKm5y61
// https://ibb.co/7zpDVjY
// https://ibb.co/GT5zT1Q
// https://ibb.co/Q6QdkpZ
// https://ibb.co/ysdbYmL
// https://ibb.co/LJxbMTj
