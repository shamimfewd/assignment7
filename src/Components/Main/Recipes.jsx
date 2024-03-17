import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import PropTypes from "prop-types";

const Recipes = ({ handleCartBtn }) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mb-32 mx-auto gap-6 ">
      {recipes.map((recipe, index) => (
        <div key={index}>
          <Recipe recipe={recipe} handleCartBtn={handleCartBtn}></Recipe>
        </div>
      ))}
    </div>
  );
};

Recipes.propTypes = {
  handleCartBtn: PropTypes.func.isRequired,
};

export default Recipes;
