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
    <header className="sticky min-w-full top-0 bg-white bg-transparent ">
      <div className="flex flex-row justify-between items-center w-full shadow">
        <a href="/" className="mx-5 my-2 bg-white rounded-lg p-2">
          <div className="flex flex-row items-center">
            <PmLogo />
            <h1 className="text-black text-xl font-bold px-2">
              Photography Manager - PM
            </h1>
          </div>
        </a>
        <nav className="flex flex-col px-5 ">
          <ul class="flex p-4 rounded-lg  flex-row space-x-8 mt-0 text-sm font-medium border-0 bg-white">
            {nav.map((item) => (
              <NavItem name={item.name} url={item.url} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
});
