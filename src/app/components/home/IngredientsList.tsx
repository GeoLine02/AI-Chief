import { IngredientType } from "@/types/ingredients";
import IngredientCard from "./IngredientCard";

type IngredientsListPropsType = {
  ingredientsList: IngredientType[];
  handleSelectIngredient: (ingredientName: string) => void;
  selectedIngredients: string[];
};

const IngredientsList = ({
  ingredientsList,
  handleSelectIngredient,
  selectedIngredients,
}: IngredientsListPropsType) => {
  return (
    <div className="flex justify-center flex-wrap gap-3 h-full overflow-y-auto max-h-[400px] lg:max-h-[600px] py-2">
      {ingredientsList.map((ingredient: IngredientType) => (
        <IngredientCard
          selectedIngredients={selectedIngredients}
          handleSelectIngredient={handleSelectIngredient}
          key={ingredient.name}
          ingredientImage={ingredient.image}
          ingredientName={ingredient.name}
        />
      ))}
    </div>
  );
};

export default IngredientsList;
