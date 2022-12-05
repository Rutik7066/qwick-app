import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => { 
    return (
      <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
        
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="https://photographymanager.in/" class="hover:underline">
            Photography Manager™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    );
})