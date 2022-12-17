import { component$ } from "@builder.io/qwik";

export const nav = [
  {
    name: "Buy 🛍",
    url: "./create-account",
  },
];
export const Header = component$(() => {
  return (
    // Nav
    <nav className="bg-white top-0 p-2 w-full border">
      <div className="flex items-center justify-between mx-3">
        <div className="flex my-2 px-4">
          <img src="./images/logo.png" className="w-7 h-7" />
          <h1 className="text-base font-semibold md:text-lg  mx-2">
            Photography Manager
          </h1>
        </div>
        <ul className="mx-3">
          {nav.map((v) => {
            return (
              <a
                href={v.url}
                className="rounded-lg px-2 py-2  font-medium   hover:bg-purple-200 hover:text-purple-600"
              >
                {v.name}
              </a>
            );
          })}
        </ul>
      </div>
    </nav>
  );
});
