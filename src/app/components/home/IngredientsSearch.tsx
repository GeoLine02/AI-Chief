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
    <div className="flex flex-col max-h-full h-full max-w-72 md:max-w-2xl mx-auto">
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
        className="py-2 px-4 xs:max-w-[320px] mb-8"
      />
      <IngredientsList ingredientsList={ingredientsList} />
      <Button
        rounded="full"
        color="yellow"
        title="Generate Recipe"
        className="py-3 mt-8"
      />
    </div>
  );
};

export default IngredientsSearch;
