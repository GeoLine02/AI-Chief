"use client";

import { RecipeType } from "@/types/recipes";
import { createContext, useContext, useState } from "react";

interface IRecipeContext {
  recipiesList: RecipeType[];
  setRecipesList: React.Dispatch<React.SetStateAction<RecipeType[]>>;
}

const RecipesContext = createContext<IRecipeContext | undefined>(undefined);

export const useRecipesContext = () => {
  const recipesContext = useContext(RecipesContext);

  if (!recipesContext) {
    throw new Error("useRecipies must be used within a RecipesProvider");
  } else {
    return recipesContext;
  }
};

const RecipesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [recipiesList, setRecipesList] = useState<RecipeType[]>([]);

  return (
    <RecipesContext.Provider value={{ recipiesList, setRecipesList }}>
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesContextProvider;
