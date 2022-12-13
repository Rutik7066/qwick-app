import { $, component$, useServerMount$, useStore } from "@builder.io/qwik";
import { PmLogo } from "~/components/icon/PmLogo";
import Input from "~/components/input/Input";


export  function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

export interface data {
  CustomerName: string,
  CustomerPhone: string,
  CustomerAltPhone: string,
  BusinessName: string,
  BusinessAdd: string,
  Email: string,
  Password: string,
  ConPassword: string,
  OrderId: string,
  string : string,
  message : string,
}


export const makePayment = async(store : any)=>{
  const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
  if (!res) {
    alert('Failed to load. Are you online?')
    return
  }
 const reqBody = {
  "key": "rzp_live_ke2XNPaoJ3IbuK", // Enter the Key ID generated from the Dashboard
  "amount": "70000", // Amount is in currency subunits. Default currency is INR. Hence, 100000 refers to 50000 paise
  "currency": "INR",
  "name": "Photography Manager",
  "description": "New sign up",
  "image": "https://photographymanager.in/android-chrome-512x512.png",
  "order_id": store.OrderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  // "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
  "handler": function (response) {
    alert(response.razorpay_payment_id)
    alert(response.razorpay_order_id)
    alert(response.razorpay_signature)
    //  Post the details of user and responcse from razorpay to check and create to creaet  and check routes 

  },
  
  "prefill": {
      "name": store.CustomerName,
      "email": store.Email,
      "contact": store.CustomerPhone
  },
  "notes": {
      "address": "Razorpay Corporate Office"
  },
 
 } 
const paymentObj = new window.Razorpay(reqBody)

paymentObj.open()

}

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
    message : "",
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
        store.OrderId = data.id;
        console.log(store.OrderId);

      })
      .catch((error) => console.error(error));
  });
  
  const createAccount = $(async() => {
    // Validating   
    for (const key in store) {
      if (key === "message"  || key === "OrderId"){
        continue
      }
    
      console.log(store[key] + " "+ key);
      if (store[key] === "") {
        store.message = "Fill all details.";
        document.getElementById('toast').classList.replace('hidden','flex')
        setTimeout(()=>{ 
          document.getElementById('toast').classList.replace('flex','hidden')
        }, 100000)
        return
      }
    } 
    if (!(store['Email'].indexOf('@') > -1 && store['Email'].indexOf('.') > -1)){
      store.message = "Enter valid email.";
      document.getElementById('toast').classList.replace('hidden','flex')
      setTimeout(()=>{ 
        document.getElementById('toast').classList.replace('flex','hidden')
      }, 100000)
      return
    }
    if (store['Password'] !== store['ConPassword']){
      store.message = "Password Missmatch";
      document.getElementById('toast').classList.replace('hidden','flex')
      setTimeout(()=>{ 
        document.getElementById('toast').classList.replace('flex','hidden')
      }, 100000)
      return
    }
    // Validation done. 
   await  makePayment(store);
  })



  return (
    <div className=" bg-gray-900 w-full">

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
                    (v) => (store.Password = (v.target as HTMLInputElement).value)
                  )}
                  type="text"
                  placeholder="Password"
                />{" "}
                <Input
                  name="confirmpassword"
                  onChange={$(
                    (v) => (store.ConPassword  = (v.target as HTMLInputElement).value)
                  )}
                  type="text"
                  placeholder="Re Enter Password"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <button 
            onClick$={createAccount}
            className=" my-3 mx-auto text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
              Pay Now
            </button>
          </div>

          {/*  */}
        </div>
      </div>
      <div
        id="toast"
        className="hidden absolute top-5 right-5 items-center p-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
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
          {store.message}
        </div>
       
      </div>
    </div>
  );
});
