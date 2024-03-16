import { useState } from "react";
// import CartBox from "./CartBox";
import "../Styles/CartBox.css";
import Recipes from "./Recipes";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItems2, setCartItems2] = useState([]);

  const handleCartBtn = (recipe) => {
    const existingItem = cartItems.find(
      (item) => item.recipe_id === recipe.recipe_id
    );
    if (!existingItem) {
      setCartItems([...cartItems, recipe]);
    } else {
      toast.info("Already Exist");
    }
  };

  const handlePreparingCart = (curItem) => {
    const removeCart = cartItems.filter(
      (item) => item.recipe_id !== curItem.recipe_id
    );
    setCartItems2([...cartItems2, curItem]);
    setCartItems(removeCart);
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
        {/* ===================================================== */}
        <div className="col-span-5 ml-4 ">
          <div className="border-collapse border border-gray-400 rounded-md
          ">
            <h3 className="text-3xl mb-2 text-center font-bold">
              Want to Cook: {cartItems.length}
            </h3>
            <div>
              <table className="styled-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.recipe_name}</td>
                      <td>{item.preparing_time}</td>
                      <td>{item.calories}</td>
                      <td>
                        <button
                          onClick={() => handlePreparingCart(item)}
                          className=" btn rounded-full bg-[#0BE58A] "
                        >
                          Preparing
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ================================================= */}
            <div className="mt-6">
              <h3 className="text-3xl mb-2 text-center font-bold">
                Currently Cooking: {cartItems2.length}
              </h3>
              <div>
                <table className="styled-table">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Time</th>
                      <th>Calories</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems2.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.recipe_name}</td>
                        <td>{item.preparing_time}</td>
                        <td>{item.calories}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* <CartBox
            handlePreparingCart={handlePreparingCart}
            cartItems={cartItems}
          ></CartBox> */}
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Main;

// let arrayOfObjects = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Alice" },
//     { id: 3, name: "Bob" }
// ];
// arrayOfObjects = arrayOfObjects.filter(obj => obj.id !== 2);
// setCart(arrayOfObjects)
