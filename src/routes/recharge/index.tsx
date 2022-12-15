import { component$, useServerMount$, useStore } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { Footer } from "~/components/footer/footer";
import { Header } from "~/components/header/header";
export interface data {
  plan: plan[];
}
export interface plan {
  name: string;
  price: number;
  credit: number;
  validity: string;
}
export default component$(() => {
  const plandata = useStore(
    {
      data: {
        plan: [],
        selectedplan: {
          name: "",
          price: 0,
          credit: 0,
          validity: "",
        },
      },
    },
    {
      recursive: true,
    }
  );
  const loc = useLocation();
  const CustomerName: string = loc.query.name;
  const Email: string = loc.query.email;
  const CustomerPhone: string = loc.query.phone;
  const Uid: string = loc.query.uid;
  useServerMount$(async () => {
    const jsonData = await fetch(
      "https://nxhpt4pbmb.execute-api.ap-south-1.amazonaws.com/getplan",
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    console.log(jsonData.status);
    plandata.data = await jsonData.json();
    plandata.data.selectedplan = plandata.data.plan[0];
    console.log(plandata.data);
  });

  return (
    <div className="flex flex-col justify-between items-center min-w-full min-h-screen">
      <Header />
      <div className="flex flex-col  shadow-2xl rounded-xl px-5 py-4  w-1/3 space-y-2 justify-center items-center">
        <h1 className="text-2xl font-semibold my-3 mx-2">Recharge Plan</h1>
        {plandata.data.plan.map((e: plan) => {
          return (
            <div
              onClick$={() => {
                plandata.data.selectedplan = e;
              }}
              className="flex justify-between items-start p-2 shadow-md border border-purple-200 rounded-lg w-full"
            >
              <div className="text-start mx-4">
                <h1 className="font-bold text-xl">{e.credit + " Images"}</h1>
                <h1 className="font-semibold text-sm">
                  {"Price \u20B9 " + e.name}
                </h1>
                <h1 className="font-semibold text-sm">
                  {"Validity : " + e.validity}
                </h1>
              </div>
              <input type="radio" checked={plandata.data.selectedplan === e} />
            </div>
          );
        })}
        <button
          onClick$={async () => {
            console.log(
              "amount" + (plandata.data.selectedplan.price * 100).toString()
            );
            const res = await loadScript(
              "https://checkout.razorpay.com/v1/checkout.js"
            );
            if (!res) {
              alert("Failed to load. Are you online?");
              return;
            }
            let orderid = "";
            fetch(
              "https://nxhpt4pbmb.execute-api.ap-south-1.amazonaws.com/createorder",
              {
                method: "POST",
                mode: "no-cors",
                body: JSON.stringify({
                  amount: (plandata.data.selectedplan.price * 100).toString(),
                  notes: {
                    purpose:
                      "Recharge of " +
                      plandata.data.selectedplan.price.toString(),
                  },
                }),

                headers: {
                  "Access-Control-Allow-Origin":
                    "https://nxhpt4pbmb.execute-api.ap-south-1.amazonaws.com/createorder",

                  "Content-type": "application/json; charset=UTF-8",
                },
              }
            )
              .then((data) => data.json())
              .then((data) => {
                orderid = data.id;
                console.log(orderid);
              })
              .catch((error) => console.error(error));
            const reqBody = {
              key: "rzp_live_ke2XNPaoJ3IbuK", // Enter the Key ID generated from the Dashboard
              amount: (plandata.data.selectedplan.price * 100).toString(), // Amount is in currency subunits. Default currency is INR. Hence, 100000 refers to 50000 paise
              currency: "INR",
              name: "Photography Manager",
              description:
                "Recharge of " + plandata.data.selectedplan.credit + " images.",
              image: "https://photographymanager.in/android-chrome-512x512.png",
              order_id: orderid, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
              // "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
              handler: function (r) {
                console.log(r.razorpay_payment_id);
                console.log(r.razorpay_order_id);
                console.log(r.razorpay_signature);
                fetch(
                  "https://nxhpt4pbmb.execute-api.ap-south-1.amazonaws.com/updatecredit",
                  {
                    method: "POST",
                    mode: "no-cors",
                    body: JSON.stringify({
                      razorpay_payment_id: r.razorpay_payment_id,
                      razorpay_order_id: r.razorpay_order_id,
                      razorpay_signature: r.razorpay_signature,
                      uid: Uid,
                      planname: plandata.data.selectedplan.name,
                    }),
                    headers: {
                      "Access-Control-Allow-Origin":
                        "https://nxhpt4pbmb.execute-api.ap-south-1.amazonaws.com/updatecredit",
                      "Content-type": "application/json; charset=UTF-8",
                    },
                  }
                )
                  .then((data) => {
                    if (data.status == 400) {
                      window.location.replace("/rechargedone");
                    } else {
                      console.log("payment failed ");
                    }
                  })
                  .catch((error) => console.log(error));
              },
              prefill: {
                name: CustomerName,
                email: Email,
                contact: CustomerPhone,
              },
              notes: {
                address: "Razorpay Corporate Office",
              },
            };
            const paymentObj = new window.Razorpay(reqBody);
            paymentObj.open();
          }}
          className="ml-auto  mr-2 my-5 text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
        >
          Pay Now
        </button>
      </div>
      <Footer />
    </div>
  );
});

export function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}
