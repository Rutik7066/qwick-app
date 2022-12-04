import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { Header } from "~/components/header/header";

export default component$(() => {
  return (
    <div className="flex flex-col min-h-full justify-start items-center">
      <Header />
      <div className="flex flex-row justify-around items-center w-full">
        <img
          src="/images/Customer Name.png"
          className="w-1/3 my-10 z-30 mx-5 rounded shadow-purple-500 shadow-2xl"
        />
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-3xl font-extrabold ">
            Grow 🚀 your photography bussiness with{" "}
            <u className="text-purple-700"> PM </u>
          </h1>
          <h2 className="text-lg font-bold py-2">
            Best Photo shop billing and management software. <br />
            Create jpeg/png bills, manage event, <br /> manage customer
            credit/khata, share wedding photos for
            <br /> selection and much more. Everything in one Software 💪
          </h2>
          <div className="flex items-end justify-end">
            <h1 className="text-4xl font-extrabold text-indigo-800">
              Photography Manager{" "}
              <h2 className="text-lg  font-bold px-2">
                only @
                <u className="text-2xl px-2 font-extrabold text-purple-700 ">
                  &#8377; 700 per year
                </u>
              </h2>
            </h1>
          </div>
          <a
            href="https://cloud-gallery-2022.s3.ap-south-1.amazonaws.com/installerWin/mysetup.exe"
            className="flex items-center justify-center bg-indigo-600 rounded-lg px-3 py-5  my-4 w-full "
          >
            <h5 className="text-white font-mono font-bold text-xl">
              Download | .exe
            </h5>
          </a>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "PM | Photography Manager",
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
