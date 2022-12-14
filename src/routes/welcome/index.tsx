import { component$ } from "@builder.io/qwik";
import { Footer } from "~/components/footer/footer";
import { Header } from "~/components/header/header";

export default component$(() => {
    return (
        <div className="flex flex-col justify-between items-center min-w-full min-h-screen">
            <Header />
            <div id="ani" className="text-center items-center  min-w-fit  ">
                <h1 className="text-3xl font-bold text-center my-4 mx-8">
                    Namaste 🙏 Your acount has been <br />
                    Created successfully ✨🎉
                </h1>
                <h2 className="text-xl font-semibold">
                    Now you can log into your account.
                </h2>
            </div>
            <Footer />
        </div>
    );
});