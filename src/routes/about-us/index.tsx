import { component$ } from "@builder.io/qwik";
import { Footer } from "~/components/footer/footer";
import { Header } from "~/components/header/header";

export default component$(() => {
  return (
    <div className="flex flex-col justify-between min-w-full min-h-screen">
      <Header />
      <div className="flex flex-col justify-center items-center my-20  ">
        <h1 className="text-6xl  font-bold font-mono">About Us</h1>
        <div className="flex  justify-center items-center w-full m-5">
          <p className="text-2xl  font-bold font-mono w-1/2">
            We (photographymanager.in) are one man team who identified the pain
            of billing and studio management of photographers. so we are here to
            help you. With the years of experience we have developed a world
            class software. And Presenting it to you all. Hope you will find it
            Usefull..
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
});
