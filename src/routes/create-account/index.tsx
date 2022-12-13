import { $, component$, useServerMount$, useStore } from "@builder.io/qwik";
import { Footer } from "~/components/footer/footer";
import { Header } from "~/components/header/header";
import { PmLogo } from "~/components/icon/PmLogo";
import Input from "~/components/input/Input";

export default component$(() => {
  const store = useStore({
    CustomerName: "",
    CustomerPhone: "",
    CustomerAltPhone: "",
    BusinessName: "",
    BusinessAdd: "",
    Email: "",
    Password: "",
    ConPassword: "",
    OrderId: "",
  });

  useServerMount$(() => {
    fetch("http://127.0.0.1:3000/createorder", {
      method: "POST",
      body: JSON.stringify({
        amount: "700",
        notes: {
          purpose: "create acount with one year sub",
        },
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        store.OrderId = data.id;
      })
      .catch((error) => console.error(error));
  });

  const createAccount = () => {
    //
  };

  return (
    <section className=" bg-gray-900 w-full">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold  text-white"
        >
          <PmLogo />
          Photography Manager
        </a>
        <div className="w-full flex  flex-col   rounded-lg shadow border md:mt-0 max-w-2xl xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            {/* Title */}
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
              Create account
            </h1>
            {/* Form Main */}
            <div className="grid grid-cols-2 divide-x">
              <div className="space-y-4">
                <Input
                  name="customername"
                  onChange={$(
                    (v) =>
                      (store.CustomerName = (
                        v.target as HTMLInputElement
                      ).value)
                  )}
                  type="text"
                  placeholder="Customer Name"
                />{" "}
                <Input
                  name="customerphone"
                  onChange={$(
                    (v) =>
                      (store.CustomerPhone = (
                        v.target as HTMLInputElement
                      ).value)
                  )}
                  type="text"
                  placeholder="Customer Phone"
                />
                <Input
                  name="customeraltphone"
                  onChange={$(
                    (v) =>
                      (store.CustomerAltPhone = (
                        v.target as HTMLInputElement
                      ).value)
                  )}
                  type="text"
                  placeholder="Customer Alt Phone"
                />{" "}
                <Input
                  name="businessname"
                  onChange={$(
                    (v) =>
                      (store.BusinessName = (
                        v.target as HTMLInputElement
                      ).value)
                  )}
                  type="text"
                  placeholder="Business Name"
                />{" "}
                <Input
                  name="businessadd"
                  onChange={$(
                    (v) =>
                      (store.BusinessAdd = (v.target as HTMLInputElement).value)
                  )}
                  type="text"
                  placeholder="Business Address"
                />
              </div>
              <div className="space-y-4">
                <Input
                  name="email"
                  onChange={$(
                    (v) => (store.Email = (v.target as HTMLInputElement).value)
                  )}
                  type="email"
                  placeholder="email@gmail.com"
                />{" "}
                <Input
                  name="password"
                  onChange={$(
                    (v) => (store.Email = (v.target as HTMLInputElement).value)
                  )}
                  type="text"
                  placeholder="Password"
                />{" "}
                <Input
                  name="confirmpassword"
                  onChange={$(
                    (v) => (store.Email = (v.target as HTMLInputElement).value)
                  )}
                  type="text"
                  placeholder="Re Enter Password"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <button className=" my-3 mx-auto text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
              Pay Now
            </button>
          </div>

          {/*  */}
        </div>
      </div>
      <div
        id="toast-warning"
        className=" flex absolute  bottom-5 right-5 items-center p-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
        role="alert"
      >
        <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Warning icon</span>
        </div>
        <div className="ml-3 text-sm font-normal">
          Improve password difficulty.
        </div>
        <button
          type="button"
          onClick$={createAccount}
          className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast-warning"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  );
});
