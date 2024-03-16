import { MdOutlineAccessTime } from "react-icons/md";
import { RiFireLine } from "react-icons/ri";

const Recipe = ({ recipe, handleCartBtn }) => {
  const {
    recipe_name,
    short_description,
    ingredients,
    calories,
    preparing_time,
  } = recipe;
  
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{recipe_name}</h2>
          <p>{short_description}</p>
          <h4>Ingredients: {ingredients.length}</h4>
          <div>
            <ul style={{ listStyleType: "disc" }}>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div className="flex justify-between items-center">
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
              className="btn bg-[#0BE58A] rounded-full"
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
