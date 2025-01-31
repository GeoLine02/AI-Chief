import Image from "next/image";

type IngredeintCardPropsType = {
  ingredientName: string;
  ingredientImage: string;
};

const IngredientCard = ({
  ingredientName,
  ingredientImage,
}: IngredeintCardPropsType) => {
  return (
    <div
      className="min-w-[50px] max-w-[50px] max-h-[50px] aspect-square border border-yellow flex flex-col items-center justify-center gap-2 rounded-[8px] relative bg-white shadow-black shadow-md cursor-pointer"
      title={ingredientName}
    >
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
