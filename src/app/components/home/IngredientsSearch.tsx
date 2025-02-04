"use client";

import { ChangeEvent, useState } from "react";
import Input from "../ui/Input";
import { Search } from "lucide-react";
import IngredientsList from "./IngredientsList";
import { ingredients } from "@/data/ingredients";
import { IngredientType } from "@/types/ingredients";
import Button from "../ui/Button";
import { generateRecipes } from "@/services/recipes";
import { useRecipesContext } from "@/context/RecipesContext";
import { useRouter } from "next/navigation";
import { routes } from "@/app/routes/routes";
import { MoonLoader } from "react-spinners";

const IngredientsSearch = () => {
  const [ingredientsList] = useState<IngredientType[]>(ingredients);
  const [searchIngredients, setSearchIngredients] = useState<string>("");
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [isRecipeiesFetching, setIsRecipesFetching] = useState<boolean>(false);
  const { setRecipesList } = useRecipesContext();
  const router = useRouter();

  const filteredIngredients = ingredientsList.filter((ingredient) =>
    ingredient.name.toLowerCase().includes(searchIngredients.toLowerCase())
  );
  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchIngredients(e.target.value);
  };

  const handleSelectIngredients = (ingredientName: string) => {
    if (!selectedIngredients.includes(ingredientName)) {
      setSelectedIngredients([...selectedIngredients, ingredientName]);
    } else {
      const filteredSelectedIngredients = selectedIngredients.filter(
        (selectedIngredientName: string) =>
          selectedIngredientName !== ingredientName
      );
      setSelectedIngredients(filteredSelectedIngredients);
    }
  };

  const fetchGeneratedRecipes = async () => {
    try {
      setIsRecipesFetching(true);
      const res = await generateRecipes(selectedIngredients);
      if (res?.status === 200) {
        console.log("enters", res);
        setRecipesList(res.data.content);
        router.push(routes.RECIPES);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsRecipesFetching(false);
    }
  };

  return (
    <div className="max-w-72 max-h-screen md:max-w-3xl lg:max-w-6xl mx-auto justify-center items-center p-4 space-y-6 flex flex-col">
      {/* Search Input */}
      <Input
        hasInnerShadow={true}
        name="ingredients"
        type="text"
        Icon={Search}
        roundPecentage="full"
        value={searchIngredients}
        iconSize={25}
        placeholder="Search ingredients"
        className="py-2 px-4 xs:max-w-[320px]"
        onChange={onSearchChange}
      />

      <IngredientsList
        selectedIngredients={selectedIngredients}
        ingredientsList={filteredIngredients}
        handleSelectIngredient={handleSelectIngredients}
      />

      <Button
        onClick={fetchGeneratedRecipes}
        rounded="full"
        color="yellow"
        title="Generate Recipe"
        className="py-3 w-full md:w-fit md:px-24 px-9"
        Loader={<MoonLoader color="#FF6F61" size={20} speedMultiplier={0.5} />}
        isLoading={isRecipeiesFetching}
      />
    </div>
  );
};

export default IngredientsSearch;
