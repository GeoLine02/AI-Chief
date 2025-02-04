import Image from "next/image";
import React from "react";
import CheckBox from "@/app/assets/icons/checkbox.svg";
import EmptyCheckBox from "@/app/assets/icons/empty-checkbox.svg";

type IngredeintCardPropsType = {
  ingredientName: string;
  ingredientImage: string;
  handleSelectIngredient: (ingredientName: string) => void;
  selectedIngredients: string[];
};

const IngredientCard = ({
  ingredientName,
  // ingredientImage,
  handleSelectIngredient,
  selectedIngredients,
}: IngredeintCardPropsType) => {
  const isSelected = selectedIngredients.includes(ingredientName);

  return (
    <div
      className="min-w-[50px] max-w-[50px] max-h-[50px] aspect-square border border-yellow flex flex-col items-center justify-center gap-2 rounded-[8px] relative bg-white shadow-black shadow-md cursor-pointer md:max-w-40 md:flex-row md:w-full md:justify-normal md:px-3"
      title={ingredientName}
      onClick={() => handleSelectIngredient(ingredientName)}
    >
      <div className="absolute left-2 top-2">
        {isSelected ? (
          <Image src={CheckBox} alt="checkbox" />
        ) : (
          <Image src={EmptyCheckBox} alt="checkbox" />
        )}
      </div>

      {/* <Image
        className="max-w-[20px] max-h-[20px] bg-coral"
        alt={ingredientName}
        src={ingredientImage}
      /> */}
      <span className="text-vsm whitespace-nowrap truncate max-w-[40px]">
        {ingredientName}
      </span>
    </div>
  );
};

export default IngredientCard;
