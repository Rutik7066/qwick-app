import { component$ } from "@builder.io/qwik";

interface prop {
  name: string;
  url: string;
}

export const NavItem = component$((props: prop) => {
  return (
    <li>
      {props.name !== "Download" ? (
        <a
          href={props.url}
          class="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded md:bg-transparent md:text-purple-700 md:p-0 dark:text-white"
          aria-current="page"
        >
          {props.name}
        </a>
      ) : (
        <a
          href="https://cloud-gallery-2022.s3.ap-south-1.amazonaws.com/installerWin/mysetup.exe"
          class="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded md:bg-transparent md:text-purple-700 md:p-0 dark:text-white"
          aria-current="page"
        >
          {props.name}
        </a>
      )}
    </li>
  );
});
