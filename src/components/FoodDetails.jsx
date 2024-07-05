import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "./ItemList";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "9254245faf4947b7a093bef27a2cdb6e";

  useEffect(() => {
    async function fetchFood() {
      const resp = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await resp.json();
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recepieCard}>
        <h1 className={styles.recepieName}>{food.title}</h1>
        <img src={food.image} alt="" className={styles.recepieImage} />
        <div className={styles.recepieDetails}>
          <span>
            <strong>⏰ {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 Vegetarian" : "🥩 Non-Vegetarian"}
            </strong>{" "}
          </span>
          <span>
            <strong>{food.vegan ? "🐄 Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          $
          <span>
            <strong> {food.pricePerServing / 100} Per servings</strong>
          </span>
        </div>
      </div>
      <h2>Ingredients</h2>

      <ItemList food={food} isLoading={isLoading} />
      <h2>Instructions</h2>
      <div className={styles.recepieInstructions}>
        <ol>
          {isLoading ? (
            <p>Loading......</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li>{step.step}</li>
            ))
          )}
        </ol>
      </div>
    </div>
  );
}
