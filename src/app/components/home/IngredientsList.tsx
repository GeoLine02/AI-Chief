import { IngredientType } from "@/types/ingredients";
import IngredientCard from "./IngredientCard";

type IngredeintsListPropsType = {
  ingredientsList: IngredientType[];
};

const IngredientsList = ({ ingredientsList }: IngredeintsListPropsType) => {
  return (
    <div className="flex gap-3 flex-wrap overflow-y-auto max-h-[500px]">
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
