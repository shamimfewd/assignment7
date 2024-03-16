import { useState } from "react";
import CartBox from "./CartBox";
import Recipes from "./Recipes";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleCartBtn = (recipe) => {
    const existingItem = cartItems.find((item) => item.recipe_id === recipe.recipe_id);
    if (!existingItem) {
      setCartItems([...cartItems, recipe]);
    } else {
      toast.info("Already Exist");
    }
  };

  return (
    <div>
      <div className="my-24 text-center mx-auto">
        <h2 className="text-4xl font-bold mb-6">Our Recipes</h2>
        <p className=" lg:w-2/3 p-4 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          aliquid obcaecati ullam ut est beatae aliquam sapiente ipsam illum,
          assumenda fugit excepturi fuga cum atque hic nam ea, maxime repellat!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="col-span-7 mr-4">
          <Recipes handleCartBtn={handleCartBtn}></Recipes>
        </div>
        <div className="col-span-5 ml-4">
          <CartBox cartItems={cartItems}></CartBox>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Main;
