import Logo from "../../assets/logo.png";

import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Jobs",
    link: "/#",
  },
  {
    id: 3,
    name: "Internships",
    link: "/#",
  },
  {
    id: 4,
    name: "Hackathons",
    link: "/#",
  },
  {
    id: 5,
    name: "Articles",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "LinkedIn",
    link: "/#",
  },
  {
    id: 2,
    name: "WhatsApp",
    link: "/#",
  },
  {
    id: 3,
    name: "Telegram",
    link: "/#",
  },
  {
    id: 4,
    name: "Discord",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-28" />
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
              <button className="text-xl text-white dark:text-gray-800 px-6 py-2 rounded-full hover:bg-primary hover:text-gray-800 dark:hover:text-white transition duration-200">
                Login
              </button>
              <button className="text-xl text-white dark:text-gray-800 px-6 py-2 rounded-full hover:bg-primary hover:text-gray-800 dark:hover:text-white transition duration-200">
                Register
              </button>
            </div>

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Socials
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
