import { component$ } from "@builder.io/qwik";
import { Footer } from "~/components/footer/footer";
import { Header } from "~/components/header/header";

export default component$(() => {
    return (
        <div className="flex flex-col justify-between items-center w-full min-h-screen">
            <Header />
            <div className="flex flex-col justify-center items-center   " >
                <h1 className="text-3xl font-bold">Your credit has been updated.✨🤝 </h1>
                <h1 className="text-xl font-semibold">Open your software and click on <button className="m-2 px-2 py-1 bg-blue-600 text-white rounded">Refresh</button></h1>

            </div>
            <Footer />
        </div>
    );
})