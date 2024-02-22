import React from "react";
import { useForm } from "react-hook-form";

function Form({ formHandler }) {
  const { register, handleSubmit, reset } = useForm();
  const formHandlerDATA = (data) => {
    formHandler(data);
    reset();
  };
  return (
    <div className="absolute  bottom-14 w-full flex justify-center">
      <form className="flex gap-4 p-3 rounded-xl border-solid border-gray-800 border-2" onSubmit={handleSubmit(formHandlerDATA)}>
        <input
          {...register("name")}
          className="rounded-md text-base px-2 py-1 font-semibold outline-none"
          type="text"
          placeholder="name"
        />
        <input
          {...register("email")}
          className="rounded-md text-base px-2 py-1 font-semibold outline-none"
          type="email"
          placeholder="email"
        />
        <input
          {...register("image")}
          className="rounded-md text-base px-2 py-1 font-semibold outline-none"
          type="text"
          placeholder="image url/."
        />
        <button className="px-2 py-1 rounded-md bg-blue-500 text-white font-semibold">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
