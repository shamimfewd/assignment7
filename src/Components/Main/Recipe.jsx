import { MdOutlineAccessTime } from "react-icons/md";
import { RiFireLine } from "react-icons/ri";
import PropTypes from "prop-types";

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
      {/* ===================== */}
      <div className="card  rounded-md h-[40rem]  bg-[#F2F2F2]  shadow-xl">
        <figure className="px-4 pt-4">
          <img
            src={recipe_image}
            alt="Shoes"
            className="rounded-xl w-full h-[200px] object-cover"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-[#000000dd]">{recipe_name}</h2>
          <p className="text-[#000000bf]">{short_description}</p>
          <hr />
          <h4 className="font-bold text-[#000000dd]">
            Ingredients: {ingredients.length}
          </h4>
          <div className="ml-8 text-[#000000cd]">
            <ul style={{ listStyleType: "disc" }} className="text-[#000000b8]">
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <hr />
          <div className="flex justify-between items-center font-bold text-gray-500">
            <p className="flex items-center gap-2">
              <MdOutlineAccessTime />
              <span>{preparing_time} minutes</span>
            </p>
            <p className="flex items-center gap-2">
              <RiFireLine />
              <span>{calories} calories</span>
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

Recipe.propTypes = {
  recipe: PropTypes.object,
  handleCartBtn: PropTypes.func,
};

export default Recipe;
