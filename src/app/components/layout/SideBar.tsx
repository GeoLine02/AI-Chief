import Link from "next/link";
import ProfilePreviw from "../shared/ProfilePreviw";
import Logo from "../shared/Logo";
import { X } from "lucide-react";
import { routes } from "@/app/routes/routes";
import classNames from "classnames";

type SideBarPropsType = {
  isSideBarOpen: boolean;
  handleToggleSideBar: (isOpen: boolean) => void;
};

const SideBar = ({ isSideBarOpen, handleToggleSideBar }: SideBarPropsType) => {
  const sidebarToggleClass = classNames({
    "left-0": isSideBarOpen,
    "-left-full": !isSideBarOpen,
  });

  return (
    <div
      className={`fixed top-0 h-screen w-full max-w-[211px] bg-softWhite transition-all duration-300 ${sidebarToggleClass}`}
    >
      <aside className="relative flex flex-col items-center min-h-screen w-full">
        <Logo />
        <X
          onClick={() => handleToggleSideBar(false)}
          size={25}
          className="absolute top-2 right-2"
        />
        <ProfilePreviw />
        <div className="space-y-4 mt-7 text-gray flex flex-col">
          <Link
            onClick={() => handleToggleSideBar(false)}
            href={routes.FAVORITES}
          >
            Favorites
          </Link>
          <Link
            onClick={() => handleToggleSideBar(false)}
            href={routes.MYRECIPIES}
          >
            My Recipies
          </Link>
          <Link onClick={() => handleToggleSideBar(false)} href={routes.SIGNIN}>
            Sign in
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
