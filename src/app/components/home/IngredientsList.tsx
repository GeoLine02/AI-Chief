import { IngredientType } from "@/types/ingredients";
import IngredientCard from "./IngredientCard";

type IngredientsListPropsType = {
  ingredientsList: IngredientType[];
};

const IngredientsList = ({ ingredientsList }: IngredientsListPropsType) => {
  return (
    <div className="flex justify-center flex-wrap gap-3 overflow-y-auto max-h-[400px] lg:max-h-[600px]">
      {ingredientsList.map((ingredient: IngredientType) => (
        <IngredientCard
          key={ingredient.name}
          ingredientImage={ingredient.image}
          ingredientName={ingredient.name}
        />
      ))}
    </div>
  );
};

export default IngredientsList;
