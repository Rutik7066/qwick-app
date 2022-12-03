import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export const head: DocumentHead = {
  title:
    "Photography Studio Management Software with Billing, Photo Selection and Event Management.",
  meta: [
    {
      name: "keywords",
      content:
        "photography shop management software, photo studio billing software, photo studio, photostudio billing, event management, photo selection, photo sharing, photo gallery",
    },
    {
      name: "description",
      content: "Photography manager can help you to run your studio better.",
    },
  ],
};

export default component$(() => {
  return (
    <div class="flex min-w-full min-h-screen items-center justify-center">
      <h1 class="text-4xl font-bold text-gray-700">
        This Site is
        <br /> Under Construction
      </h1>
    </div>
  );
});
