import type { Recipe } from "@/app/data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div style={{
      border: "1px solid #444",
      borderRadius: "12px",
      padding: "16px",
      textAlign: "center"
    }}>
      <div style={{ fontSize: "3rem" }}>{recipe.emoji}</div>
      <h3 style={{ margin: "10px 0" }}>{recipe.title}</h3>
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "10px", fontSize: "0.9rem" }}>
        <span>⏱ {recipe.minutes} min</span>
        <span>{recipe.difficulty}</span>
        <span>{recipe.cuisine}</span>
      </div>
    </div>
  );
}