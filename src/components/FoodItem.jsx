export default function FoodItem({ foodItem }) {
  return (
    <div>
      <img src={foodItem.image} alt="" />
      <h1>{foodItem.title}</h1>
      <button>View Recepie</button>
    </div>
  );
}
