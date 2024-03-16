import "../Styles/CartBox.css";

const CartBox = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <div className="border">
      <h3 className="text-3xl ">Want to Cook: {cartItems.length}</h3>
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
                  <button className=" btn rounded-full bg-[#0BE58A] text-white">
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartBox;