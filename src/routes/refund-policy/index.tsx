import { component$ } from "@builder.io/qwik";
import { Footer } from "~/components/footer/footer";
import { Header } from "~/components/header/header";

export default component$(() => {
  return (
    <div className="flex flex-col justify-between min-w-full min-h-screen">
      <Header />
      <div className="flex flex-col justify-center items-center my-20  ">
        <h1 className="text-6xl  font-bold font-mono">Refund Policy</h1>
        <div className="flex  justify-center items-center w-full m-5">
          <p className="text-2xl  font-bold font-mono w-1/2">
            All purchases are non-refundable. You can cancel your subscription
            at any time. Your cancellation will take effect at the end of the
            current paid term.If you are unsatisfied with our services, please
            email us at rutikthakre@gmail.com or call us at +917219656111.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
});
