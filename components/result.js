import AmountResultComponent from "./result/amount";
import TotalResultComponent from "./result/total";
import ButtonReset from "./result/button-reset";

function ResultComponent() {
  return (
    <div className="rounded-lg bg-neutral-dark-cyan w-full md:w-[50%] p-8 flex flex-col justify-between">
      <AmountResultComponent />
      <TotalResultComponent />
      <ButtonReset label={"RESET"} />
    </div>
  );
}

export default ResultComponent;
