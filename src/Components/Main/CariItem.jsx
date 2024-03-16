
const CariItem = ({item}) => {
    const {recipe_name}=item
    console.log(item);
    return (
        <div>
            <h4>{recipe_name}</h4>
        
                <tr>
                    <th>Name</th>
                </tr>
                <tr>
                    <th>Time</th>
                </tr>
                <tr>
                    <th>Calories</th>
                </tr>
            
        </div>
    );
};

export default CariItem;