import FoodItem from "./FoodItem";

export default function FoodList({ foodData }) {
  return (
    <div>
      {foodData.map((foodItem) => (
        <FoodItem foodItem={foodItem} key={foodItem.id} />
      ))}
    </div>
  );
}
