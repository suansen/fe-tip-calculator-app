import { useEffect } from "react";

import ResultComponent from "../components/result";
import FormComponent from "../components/form";

import AmountResultComponent from "../components/result/amount";
import TotalResultComponent from "../components/result/total";
import ButtonReset from "../components/buttons/button-reset";

import FormTipComponent from "../components/form/tip";
import FormPeopleComponent from "../components/form/people";
import FormBillComponent from "../components/form/bill";

import { useImmerReducer } from "use-immer";

export default function Home() {
  const initialState = {
    bill: 0.0,
    tip: 0.0,
    people: 0,
    total: 0.0,
    tipTotal: 0.0,
    reset: 0
  };

  function ourReducer(draft, action) {
    switch (action.type) {
      case "reset":
        draft.bill = 0.0;
        draft.tip = 0.0;
        draft.people = 0.0;
        return;
      case "setReset":
        draft["reset"] += 1;
        return;
      case "setBill":
        draft.bill = action.data;
        return;
      case "setPeople":
        draft.people = action.data;
        return;
      case "setTip":
        draft.tip = action.data;
        return;
      case "setTipTotal":
        draft.tipTotal = action.data;
        return;
      case "setTotal":
        draft.total = action.data;
        return;
      default:
        break;
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState);

  useEffect(() => {
    const tipTotal = (state.bill * (state.tip / 100.0)) / state.people;
    const total = state.bill / state.people + tipTotal;
    dispatch({ type: "setTipTotal", data: tipTotal });
    dispatch({ type: "setTotal", data: total });
  }, [state.bill, state.tip, state.people]);

  return (
    <main className=" bg-neutral-light-gray-cyan font-primary-font min-h-screen w-screen  flex flex-col justify-center items-center space-y-8 py-8 md:py-0">
      <div>
        <h1 className="text-xl text-neutral-dark-gray-cyan tracking-[0.5rem]">
          SPLI
          <br />
          TTER
        </h1>
      </div>
      <div className=" bg-neutral-white md:flex p-6 rounded-lg gap-4 w-full md:w-[80%] lg:w-[70%]: xl:w-[60%]">
        <FormComponent>
          <FormBillComponent bill={state.bill} dispatch={dispatch} />
          {/* <p>{`Bill is ${state.bill}`}</p> */}
          <FormTipComponent reset={state.reset} dispatch={dispatch} />
          {/* <p>{`Tip is ${state.tip}`}</p> */}
          <FormPeopleComponent state={state} dispatch={dispatch} />
          <p>{`People is ${state.people}`}</p>
        </FormComponent>

        <ResultComponent>
          <AmountResultComponent tipTotal={state.tipTotal} />
          <TotalResultComponent total={state.total} />
          <ButtonReset label={"RESET"} dispatch={dispatch} />
        </ResultComponent>
      </div>
    </main>
  );
}
