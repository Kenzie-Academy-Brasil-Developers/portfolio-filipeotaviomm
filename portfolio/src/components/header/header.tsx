"use client";
import { Locale } from "@/config/it8n.config";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";
import { useMainContext } from "@/providers/mainContext";
import { IoMenu } from "react-icons/io5";
import NavBar from "../navBar/navBar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Header = () => {
  const {
    language,
    isMenuOpen,
    setIsMenuOpen,
    fromMenuToElement,
    currentMenu,
  } = useMainContext();

  const dict = getDictionaryUseClient(language as Locale);

  const router = useRouter();

  const handleLanguageClick = (href: string) => {
    if (language !== href) {
      localStorage.setItem("@Portifolio:YPosition", window.scrollY.toString());
      router.push(href);
    }
  };

  useEffect(() => {
    const position = localStorage.getItem("@Portifolio:YPosition");
    if (position) {
      // window.scrollTo(0, Number(position));
      window.scrollTo({ top: Number(position), behavior: "instant" });
      localStorage.removeItem("@Portifolio:YPosition");
    }
  }, []);

  return (
    <header className="w-full p-[20px] fixed bg-gray-secondary border-b-[3px] border-purple-primary flex flex-col md:px-[20px] lg:px-[80px] z-20">
      <div className="w-fullh-full flex flex-row justify-between items-center py-[8]">
        <h1 className="text-md">Filipe Otavio</h1>
        <div className="h-full flex flex-row-reverse items-center md:flex-row">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-gray-secondary rounded p-[5px] md:hidden"
          >
            <IoMenu className="text-gray-tertiary" size={28} />
          </button>
          <nav className="ml-[25px] md:mr-[30px]">
            <ul className="hidden md:flex flex-row w-full gap-[50px] text-sm">
              <li>
                <a
                  className={
                    currentMenu === "home"
                      ? "border-b-[3px] border-purple-primary"
                      : ""
                  }
                  href="#home"
                  onClick={() => fromMenuToElement("home")}
                >
                  {dict.navBar.home}
                </a>
              </li>
              <li>
                <a
                  className={
                    currentMenu === "aboutMe"
                      ? "border-b-[3px] border-purple-primary"
                      : ""
                  }
                  href="#aboutMe"
                  onClick={() => fromMenuToElement("aboutMe")}
                >
                  {dict.navBar.aboutMe}
                </a>
              </li>
              <li>
                <a
                  className={
                    currentMenu === "projects"
                      ? "border-b-[3px] border-purple-primary"
                      : ""
                  }
                  href="#projects"
                  onClick={() => fromMenuToElement("projects")}
                >
                  {dict.navBar.projects}
                </a>
              </li>
              <li>
                <a
                  className={
                    currentMenu === "contacts"
                      ? "border-b-[3px] border-purple-primary"
                      : ""
                  }
                  href="#contacts"
                  onClick={() => fromMenuToElement("contacts")}
                >
                  {dict.navBar.contacts}
                </a>
              </li>
              <li>
                <a
                  className={
                    currentMenu === "socialMedias"
                      ? "border-b-[3px] border-purple-primary"
                      : ""
                  }
                  href="#socialMedias"
                  onClick={() => fromMenuToElement("socialMedias")}
                >
                  {dict.navBar.socialMedias}
                </a>
              </li>
            </ul>
          </nav>
          <div className="h-full flex flex-row items-center gap-[5px] mt-[5px] lg:gap-[10px]">
            <button
              onClick={() => {
                handleLanguageClick("pt-BR");
              }}
            >
              <img
                className="w-[22px]"
                src="/brazil-flag.svg"
                alt="Brasil flag"
              />
            </button>
            <button
              onClick={() => {
                handleLanguageClick("en-US");
              }}
            >
              <img
                className="w-[20px]"
                src="/united-states-flag.svg"
                alt="U.S. flag"
              />
            </button>
          </div>
        </div>
      </div>
      <div>{isMenuOpen && <NavBar />}</div>
    </header>
  );
};

export default Header;
