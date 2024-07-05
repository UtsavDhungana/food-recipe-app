import styles from "./fooditem.module.css";
export default function FoodItem({ foodItem, setFoodId }) {
  return (
    <div className={styles.itemContainer}>
      <img src={foodItem.image} alt="" className={styles.itemImage} />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{foodItem.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.itemButton}
          onClick={() => setFoodId(foodItem.id)}
        >
          View Recepie
        </button>
      </div>
    </div>
  );
}
