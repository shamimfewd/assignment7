import "../Styles/CartBox.css";

const CartBox = ({ cartItems }) => {
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
                  <button className=" btn rounded-full bg-[#0BE58A] ">
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
