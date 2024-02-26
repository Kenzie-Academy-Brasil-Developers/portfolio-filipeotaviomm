"use client";
import { Locale } from "@/config/it8n.config";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";
import { useMainContext } from "@/providers/mainContext";
import { IoMenu } from "react-icons/io5";
import NavBar from "../navBar/navBar";

const Header = () => {
  const { language } = useMainContext();

  const dict = getDictionaryUseClient(language as Locale);

  return (
    <header className="border w-full">
      <div className="flex justify-between items-center">
        <h1></h1>
        <button className="bg-gray-900 p-1 rounded">
          <IoMenu size={30} />
        </button>
        <NavBar />
        <nav className="hidden">
          <ul>
            <li>
              <a href="">{dict.navBar.home}</a>
            </li>
            <li>
              <a href="">{dict.navBar.aboutMe}</a>
            </li>
            <li>
              <a href="">{dict.navBar.projects}</a>
            </li>
            <li>
              <a href="">{dict.navBar.contacts}</a>
            </li>
            <li>
              <a href="">{dict.navBar.socialMedias}</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
