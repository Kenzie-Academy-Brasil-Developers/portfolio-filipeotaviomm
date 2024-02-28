"use client";
// import "server-only";
import { Locale } from "@/config/it8n.config";
// import { getDictionaryServerOnly } from "@/dictionaries/default-dictionary-server-only";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";
import { useMainContext } from "@/providers/mainContext";

const NavBar = () => {
  const { language } = useMainContext();

  const dict = getDictionaryUseClient(language as Locale);
  return (
    <nav className="text-sm pl-[10px] mt-[25px] mb-[15px]">
      <ul className="flex flex-col gap-[10px]">
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
  );
};

export default NavBar;
