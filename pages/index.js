import { useState } from "react";

import ResultComponent from "../components/result";
import FormComponent from "../components/form";
import { useImmerReducer } from "use-immer";

export default function Home() {
  const initialState = { bill: 0, tip: 0, people: 0 };

  function ourReducer(draft, action) {
    switch (action.type) {
      case "reset":
        return initialState;
      // case ""
      //   return;
      default:
        break;
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState);

  return (
    <main className=" bg-neutral-light-gray-cyan font-primary-font h-full  md:h-screen w-screen  flex flex-col justify-center items-center space-y-8 py-8 md:py-0">
      <div>
        <h1 className="text-xl text-neutral-dark-gray-cyan tracking-[0.5rem]">
          SPLI
          <br />
          TTER
        </h1>
      </div>
      <div className=" bg-neutral-white md:flex p-6 rounded-lg gap-4 w-[70%]">
        <FormComponent />
        <ResultComponent />
      </div>
    </main>
  );
}
