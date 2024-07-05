import FoodItem from "./FoodItem";

export default function FoodList({ foodData, setFoodId }) {
  return (
    <div>
      {foodData.map((foodItem) => (
        <FoodItem foodItem={foodItem} key={foodItem.id} setFoodId={setFoodId} />
      ))}
    </div>
  );
}
