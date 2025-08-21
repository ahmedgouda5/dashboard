import { Link } from "react-router";
import Logo from "../assets/RebackLogo.png";
import { MdOutlineSettings } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { IoAppsSharp } from "react-icons/io5";
import { RxCountdownTimer } from "react-icons/rx";
import type { JSX } from "react/jsx-runtime";
import { FcBusinessman } from "react-icons/fc";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  interface NavbarHead {
    icon: JSX.Element;
  }

  const NavbarHead: NavbarHead[] = [
    {
      icon: <ModeToggle />,
    },
    {
      icon: <IoAppsSharp />,
    },
    {
      icon: <IoIosNotifications />,
    },
    {
      icon: <MdOutlineSettings />,
    },
    {
      icon: <RxCountdownTimer />,
    },
    {
      icon: <FcBusinessman />,
    },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">
          <Link to="/" className="flex gap-2">
            <img loading="lazy" src={Logo} alt="Reback Logo" className="h-8" />
            Reback
          </Link>
        </h1>

        <ul className="flex items-center gap-5">
          {NavbarHead.map((item, index) => (
            <li
              key={index}
              className="font-bold text-2xl   text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white "
            >
              {item.icon}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
