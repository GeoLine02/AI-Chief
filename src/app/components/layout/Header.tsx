"use client";

import { Menu } from "lucide-react";
import Logo from "../shared/Logo";
import Link from "next/link";
import { routes } from "@/app/routes/routes";
import SideBar from "./SideBar";
import { useState } from "react";
import Modal from "../ui/Modal";

const Header = () => {
  const [isSideBarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const handleToggleSideBar = () => {
    setIsSidebarOpen(!isSideBarOpen);
  };

  return (
    <header className="bg-coral p-4 md:px-16">
      <Modal isOpen={isSideBarOpen}>
        <SideBar
          isSideBarOpen={isSideBarOpen}
          handleToggleSideBar={handleToggleSideBar}
        />
      </Modal>

      <nav className="flex justify-between items-center md:container mx-auto">
        <Menu
          onClick={handleToggleSideBar}
          className="mt-2 md:hidden text-yellow cursor-pointer"
          aria-label="Toggle Sidebar"
        />
        <div className="mx-auto md:mx-0">
          <Logo />
        </div>
        <div className="items-center gap-6 hidden md:flex">
          <Link href={routes.FAVORITES}>Favorites</Link>
          <Link href={routes.MYRECIPIES}>My Recipies</Link>
          <Link href={routes.SIGNIN}>Sign in</Link>
          <Link href={routes.SIGNUP}>Sign up</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
