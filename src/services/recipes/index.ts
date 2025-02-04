import api from "@/config/axios";

export const generateRecipes = async (selectedIngredients: string[]) => {
  try {
    const formatedIngredientsLIst = selectedIngredients.join(", ");

    const res = await api.post("/ai-chat/generate-recipes", {
      message: formatedIngredientsLIst,
    });

    return res;
  } catch (error) {
    console.log(error);
  }
};
