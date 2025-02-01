"use client";

import { useState } from "react";
import Input from "../ui/Input";
import { Search } from "lucide-react";
import IngredientsList from "./IngredientsList";
import { ingredients } from "@/data/ingredients";
import { IngredientType } from "@/types/ingredients";
import Button from "../ui/Button";

const IngredientsSearch = () => {
  const [ingredientsList, setIngredientsList] =
    useState<IngredientType[]>(ingredients);
  const [searchIngredients, setSearchIngredients] = useState<string>("");

  return (
    <div className="max-w-72 max-h-screen md:max-w-3xl lg:max-w-6xl mx-auto p-4 space-y-6 flex flex-col items-center">
      {/* Search Input */}
      <Input
        hasInnerShadow={true}
        name="ingredients"
        type="text"
        Icon={Search}
        roundPecentage="full"
        setValue={setSearchIngredients}
        value={searchIngredients}
        iconSize={25}
        placeholder="Search ingredients"
        className="py-2 px-4 xs:max-w-[320px]"
      />

      <IngredientsList ingredientsList={ingredientsList} />

      <Button
        rounded="full"
        color="yellow"
        title="Generate Recipe"
        className="py-3 w-full md:w-fit md:px-24"
      />
    </div>
  );
};

export default IngredientsSearch;
