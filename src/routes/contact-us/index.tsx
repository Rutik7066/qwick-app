import { component$ } from "@builder.io/qwik";
import { Footer } from "~/components/footer/footer";
import { Header } from "~/components/header/header";

export default component$(() => {
  return (
    <div className="flex flex-col justify-between min-w-full min-h-screen">
      <Header />
      <div className="flex flex-col justify-center items-center my-20  ">
        <h1 className="text-6xl  font-bold font-mono">Contact Us</h1>
        <div className="flex  justify-center items-center w-full m-5">
          <p className="text-2xl  font-bold font-mono w-1/2">
            In order to resolve a complaint regarding the Site or Software to
            receive further information regarding use of the Site, please
            contact us at:
            <br />
            Photography Manager pvt.
            <br /> Sindkhed Raja Buldhana,
            <br /> Maharastra 443203 India <br /> Phone: +917219656111
            rutikthakre@gmail.com
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
});
