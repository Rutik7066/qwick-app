import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

import { Footer } from "~/components/footer/footer";
import { Header } from "~/components/header/header";

export default component$(() => {
  return (
    <div className="flex flex-col min-w-full justify-around items-center">
      <Header />

      <img
        src="/images/Customer Name.png"
        className=" w-3/4 md:w-1/3 my-4  mx-5 rounded shadow-purple-500 shadow-2xl"
      />

      <div className="flex flex-col justify-center items-center  my-14 mx-auto">
        <h1 className="text-base font-bold md:text-4xl md:font-extrabold  ">
          Grow 🚀 your photography bussiness
        </h1>
        <p className="text-xs text-center font-bold md:text-lg md:font-bold text-gray-600 mx-5 md:w-1/2 my-3">
          Best Photo shop billing and management software. Create jpeg/png
          bills, manage event, manage customer credit/khata, share wedding
          photos for selection and much more. Everything in one Software 💪
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex">
            <h1 className="text-base font-bold text-indigo-800">
              Photography Manager{" "}
              <h2 className="text-sm  font-bold px-2">
                only @ &#8377; 700 per year
              </h2>
            </h1>
          </div>
          <a
            href="https://cloud-gallery-2022.s3.ap-south-1.amazonaws.com/installerWin/mysetup.exe"
            className="flex items-center justify-center bg-indigo-600 rounded-lg px-3 py-2 my-4"
          >
            <h5 className="text-white font-mono font-bold text-xl">
              Download Free Demo
            </h5>
          </a>
        </div>
        <h1 className="text-base md:text-xl underline">
          System Requirement Windows 10 or above
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-5 w-4/5 mb-14 md:my-20 gap-y-10">
        {featuresList.map((e) => {
          return (
            <div className="flex flex-col text-center mx-5">
              <h1 className="font-bold text-xl">{e.title}</h1>
              <p className="font-medium">{e.des}</p>
            </div>
          );
        })}
      </div>

      <Footer />
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

export const featuresList = [
  {
    title: "Billing",
    des: "Create bill for regular products as well as for Wedding package.",
  },
  {
    title: "Events",
    des: "Create bookings of events in Photography Manager and Manage its bills and records",
  },
  {
    title: "Photo Gallery",
    des: "No need set up extra desktop for photo selection. share link and let customer select the photo at their home.",
  },

  {
    title: "Quotations",
    des: "Create quotation like bills with Photography Manager.",
  },
  {
    title: "Whatsapp Utility",
    des: "Share bills, payment reminders & greeting to customer thourgh whatsapp without saving their numbers.",
  },
  {
    title: "Credit Management",
    des: "Keep track of all remaining amount of customer and send reminder to customers through whatsapp.",
  },
];
