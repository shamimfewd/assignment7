// import { useState } from "react";
import "../Styles/CartBox.css";
import PropTypes from "prop-types";

const CartBox = ({ cartItems, handlePreparingCart }) => {
  // const [currentlyItems, setCurrentlyItems] = useState([]);

  // const handleTest = (item) => {
  //   const newData = [...currentlyItems, item];
  //   // const newData = currentlyItems.filter(
  //   //   (cart) => cart.recipe_id !== item.recipe_id
  //   // );
  //   setCurrentlyItems(newData);
  // };

  return (
    <div className="border p-4 rounded-md">
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
      {/* =========== Currently Cooking================================================= */}
      <div>
        <div className="mt-6">
          <h3 className="text-3xl mb-2 text-center font-bold">
            Currently Cooking:{}
          </h3>

          <h1>hello</h1>
          {/* <table className="styled-table">
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
                </tr>
              ))}
            </tbody>
          </table> */}
        </div>
      </div>
    </div>
  );
};

CartBox.propTypes = {
  cartItems: PropTypes.array,
};

export default CartBox;
