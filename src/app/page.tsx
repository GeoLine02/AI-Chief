import Banner from "@/app/components/home/Banner";
import IngredientsSearch from "./components/home/IngredientsSearch";

export default function Home() {
  return (
    <div className="flex flex-col h-[89vh] bg-green">
      <Banner />
      <IngredientsSearch />
    </div>
  );
}
