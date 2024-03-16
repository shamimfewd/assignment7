import { useEffect, useState } from "react";
import Recipe from "./Recipe";

const Recipes = ({handleCartBtn}) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {recipes.map((recipe, index) => (
        <Recipe key={index} recipe={recipe} handleCartBtn={handleCartBtn}></Recipe>
      ))}
    </div>
  );
};

export default Recipes;
