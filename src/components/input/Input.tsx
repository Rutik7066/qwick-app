import { $, component$ } from "@builder.io/qwik";

export default component$(
  (param: {
    name: string;
    type: string;
    placeholder: string;

    onChange: (event: Event) => {};
  }) => {
    return (
      <div className="space-y-4">
        <div className="mx-2 my-2">
          <input
            type={param.type}
            name={param.name}
            onInput$={param.onChange}
            placeholder={param.placeholder}
            className=" border sm:text-sm rounded-lg  focus:border-indigo-ring-indigo-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400  text-white"
          ></input>
        </div>
      </div>
    );
  }
);
