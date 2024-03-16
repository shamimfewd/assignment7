import { useState } from "react";
import CartBox from "./CartBox";
import Recipes from "./Recipes";

const Main = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleCartBtn = (recipe) => {
    // const newItem = [...cartItems, recipe]
    const existingItem = cartItems.find((item) => item.id === recipe.id);
    if (!existingItem) {
      setCartItems([...cartItems, recipe]);
    } else {
      alert("Already Exist");
    }
  };
  console.log(cartItems);
  return (
    <div>
      <div className="my-24 text-center mx-auto">
        <h2 className="text-4xl font-bold">Our Recipes</h2>
        <p className="w-2/3 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          aliquid obcaecati ullam ut est beatae aliquam sapiente ipsam illum,
          assumenda fugit excepturi fuga cum atque hic nam ea, maxime repellat!
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="col-span-7">
          <Recipes handleCartBtn={handleCartBtn}></Recipes>
        </div>
        <div className="col-span-5">
          <CartBox cartItems={cartItems}></CartBox>
        </div>
      </div>
    </div>
  );
};

export default Main;
