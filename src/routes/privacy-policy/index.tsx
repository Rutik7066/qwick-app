import { component$ } from "@builder.io/qwik";
import { Footer } from "~/components/footer/footer";
import { Header } from "~/components/header/header";

export default component$(() => {
  return (
    <div className="flex flex-col justify-between min-w-full min-h-screen">
      <Header />
      <div className="flex flex-col justify-center items-center my-20  ">
        <h1 className="text-6xl  font-bold font-mono">Privacy Policy</h1>
        <div className="flex  justify-center items-center w-full m-5">
          <p className="text-2xl  font-bold font-mono w-1/2">
            We care about data privacy and security. By using the Site or
            software, you agree to be bound by our Privacy Policy, which is
            incorporated into our Terms and Conditions. Please be advised the
            Site is hosted in India. If you access the Site from any other
            region of the world with laws or other requirements governing
            personal data collection, use, or disclosure that differ from
            applicable laws in India, then through your continued use of the
            Site, you are transferring your data to India, and you agree to have
            your data transferred to and processed in India.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
});
