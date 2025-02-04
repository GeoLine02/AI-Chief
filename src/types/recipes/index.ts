import { IngredientType } from "../ingredients";

export type RecipeType = {
  id: number;
  name: string;
  category: string;
  ingredients: Omit<IngredientType, "image"> & { quantity: string }[];
  steps: string[];
};
