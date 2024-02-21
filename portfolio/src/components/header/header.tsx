import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <header className="border w-full">
      <div className="flex justify-between items-center">
        <h1>Filipe Otavio</h1>
        <button className="bg-gray-900 p-1 rounded">
          <IoMenu size={30} />
        </button>
        <nav className="hidden">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Projetos</a>
            </li>
            <li>
              <a href="">Contatos</a>
            </li>
            <li>
              <a href="">Mídias Sociais</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
