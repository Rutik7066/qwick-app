import { component$ } from "@builder.io/qwik";

interface item {
  title: string;
  des: string;
}

export const Feature = component$((prop: item) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold py-4">{prop.title}</h1>
      <h2 className="text-xl font-semibold text-slate-800">{prop.des }</h2>
    </div>
  );
});
