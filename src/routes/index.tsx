import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { Feature } from "~/components/features/Feature";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header/header";

export default component$(() => {
  return (
    <div className="flex flex-col min-w-full justify-start items-center">
      <Header />
      <div className="flex flex-col-reverse md:flex-row justify-around items-center w-full">
        <img
          src="/images/Customer Name.png"
          className=" w-3/4 md:w-1/3 my-10  mx-5 rounded shadow-purple-500 shadow-2xl"
        />
        <div className="flex flex-col justify-center items-start">
          <h1 className=" text-xl  font-bold  md:text-3xl md:font-extrabold ">
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
      <div className="flex flex-col w-full justify-center items-center my-20">
        <h1 className="text-3xl  font-bold m-5">
          How to share photos for selection 🤔?
        </h1>
        <p className="text-2xl font-bold">
          Step 1. Go to photo gallery tab. <br /> Step 2. Create folder and
          upload photo. <br />
          Step 3. Then copy the link of the folder created and share that link
          to the customer. Done !
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-full px-40 py-5">
        <h1 className="text-3xl font-bold mb-6">Main Features</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-20 ">
          {featuresList.map((item) => (
            <Feature des={item.des} title={item.title} />
          ))}
        </div>
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
