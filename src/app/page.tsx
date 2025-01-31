import Banner from "@/app/components/home/Banner";
import IngredientsSearch from "./components/home/IngredientsSearch";

export default function Home() {
  return (
    <div className="h-[calc(100vh-69px)] bg-green">
      <Banner />
      <IngredientsSearch />
    </div>
  );
}
