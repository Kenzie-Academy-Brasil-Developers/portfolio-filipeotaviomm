"use client";
import { Locale } from "@/config/it8n.config";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";
import { useMainContext } from "@/providers/mainContext";
import { IoMenu } from "react-icons/io5";
import NavBar from "../navBar/navBar";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { language, isMenuOpen, setIsMenuOpen } = useMainContext();

  const dict = getDictionaryUseClient(language as Locale);

  return (
    <header className="w-full py-[20px] px-[20px] fixed bg-gray-primary border-b-[3px] border-purple-primary flex flex-col md:px-[20px] lg:px-[80px]">
      <div className="w-fullh-full flex flex-row justify-between items-center py-3">
        <h1 className="text-md">Filipe Otavio</h1>
        <div className="h-full flex flex-row items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-gray-secondary rounded pl-[30px] md:hidden"
          >
            <IoMenu className="text-gray-tertiary" size={28} />
          </button>
          <nav className="ml-[25px] md:mr-[30px]">
            <ul className="hidden md:flex flex-row w-full gap-[50px] text-sm">
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
          <div className="h-full flex flex-row items-center gap-[5px] mt-[5px] lg:gap-[10px]">
            <Link href="/pt-BR">
              <button>
                <Image
                  className=""
                  width={22}
                  height={22}
                  src="/brazil-flag.svg"
                  alt="Brasil flag"
                />
              </button>
            </Link>
            <Link href="/en-US">
              <button>
                <Image
                  className=""
                  width={20}
                  height={20}
                  src="/united-states-flag.svg"
                  alt="U.S. flag"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>{isMenuOpen && <NavBar />}</div>
    </header>
  );
};

export default Header;
