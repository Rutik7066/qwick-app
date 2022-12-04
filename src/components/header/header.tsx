import { component$ } from "@builder.io/qwik";

import { PmLogo } from "../icon/PmLogo";
import { NavItem } from "../nav-item/NavItem";
export const nav = [
  {
    name: "Learn",
    url: "https://www.photographymanager.in/learn",
  },
  {
    name: "Download",
    url: "https://www.photographymanager.in/download",
  },
  {
    name: "Home",
    url: "https://www.photographymanager.in",
  },
];
export const Header = component$(() => {
  return (
    <header className="sticky w-full top-0">
      <div className="flex flex-row justify-between bg-transparent items-center w-full shadow  px-5 py-3">
        <a href="https://www.photographymanager.in">
          <div className="flex flex-row items-center">
            <PmLogo />
            <h1 className="text-black text-xl font-bold px-2">
              Photography Manager - PM
            </h1>
          </div>
        </a>
        <nav className=" flex flex-col mx-5 ">
          <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {nav.map((item) => (
              <NavItem name={item.name} url={item.url} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
});
