"use client";

import { useRecipesContext } from "@/context/RecipesContext";

const Recipes = () => {
  const { recipiesList } = useRecipesContext();
  console.log("@@@@@@@@@@@@@@", recipiesList);
  return <div>Recipes</div>;
};

export default Recipes;
