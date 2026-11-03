import RecipeCard from "./components/RecipeCard";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Find your next bite.</h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
        gap: "1.5rem",
        marginTop: "1.5rem"
      }}>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}