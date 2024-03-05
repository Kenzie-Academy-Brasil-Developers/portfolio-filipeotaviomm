"use client";
import { Locale } from "@/config/it8n.config";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";
import { useMainContext } from "@/providers/mainContext";

const NavBar = () => {
  const { language, fromMenuToElement } = useMainContext();

  const dict = getDictionaryUseClient(language as Locale);
  return (
    <nav className="text-sm pl-[10px] mt-[25px] mb-[15px]">
      <ul className="flex flex-col gap-[10px]">
        <li>
          <a
            className="hover:border-b-[3px] border-purple-primary"
            href="#home"
            onClick={() => fromMenuToElement("home")}
          >
            {dict.navBar.home}
          </a>
        </li>
        <li>
          <a
            className="hover:border-b-[3px] border-purple-primary"
            href="#aboutMe"
            onClick={() => fromMenuToElement("aboutMe")}
          >
            {dict.navBar.aboutMe}
          </a>
        </li>
        <li>
          <a
            className="hover:border-b-[3px] border-purple-primary"
            href="#projects"
            onClick={() => fromMenuToElement("projects")}
          >
            {dict.navBar.projects}
          </a>
        </li>
        <li>
          <a
            className="hover:border-b-[3px] border-purple-primary"
            href="#contacts"
            onClick={() => fromMenuToElement("contacts")}
          >
            {dict.navBar.contacts}
          </a>
        </li>
        <li>
          <a
            className="hover:border-b-[3px] border-purple-primary"
            href="#socialMedias"
            onClick={() => fromMenuToElement("socialMedias")}
          >
            {dict.navBar.socialMedias}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
