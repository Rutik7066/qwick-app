import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => { 
    return (
      <footer class="flex justify-between items-center p-4 min-w-full bg-white shadow md:px-6 md:py-8 dark:bg-gray-900">
        <div>
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022{" "}
            <a href="https://photographymanager.in/" class="hover:underline">
              Photography Manager™
            </a>
            . All Rights Reserved.
          </span>
        </div>
        <div>
          <a
            href="/contact-us"
            class="hover:underline text-sm text-gray-500 px-5"
          >
            Contact Us
          </a>  <a
            href="/terms-and-conditions"
            class="hover:underline text-sm text-gray-500 px-5"
          >
           Terms & Conditions
          </a>  <a
            href="/refund-policy"
            class="hover:underline text-sm text-gray-500 px-5"
          >
           Refund policy
          </a>  <a
            href="/about-us"
            class="hover:underline text-sm text-gray-500 px-5"
          >
           About Us
          </a>  <a
            href="/privacy-policy"
            class="hover:underline text-sm text-gray-500 px-5"
          >
           Privacy Policy
          </a>
        </div>
      </footer>
    );
})