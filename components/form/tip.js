import React from "react";
import ButtonComponent from "../button";
import { useImmer } from "use-immer";

function FormTipComponent() {
  const [active, setActive] = useImmer(0);
  return (
    <div className="mb-6">
      <h2 className="text-neutral-dark-gray-cyan">Select Tip %</h2>
      <div className="grid grid-cols-3 gap-2">
        <div>
          <ButtonComponent
            active={active}
            setActive={setActive}
            value={5}
            label={"5%"}
          />
        </div>
        <div>
          <ButtonComponent
            active={active}
            setActive={setActive}
            value={10}
            label={"10%"}
          />
        </div>
        <div>
          <ButtonComponent
            active={active}
            setActive={setActive}
            value={15}
            label={"15%"}
          />
        </div>
        <div>
          <ButtonComponent
            active={active}
            setActive={setActive}
            value={25}
            label={"25%"}
          />
        </div>
        <div>
          <ButtonComponent
            active={active}
            setActive={setActive}
            value={50}
            label={"50%"}
          />
        </div>
        <div>
          <input
            type="text"
            id="custom"
            className="bg-gray-50 border border-gray-300 rounded-md focus:outline-primary block w-full h-11 p-2.5 text-neutral-dark-cyan text-center"
            placeholder="Custom"
          ></input>
        </div>
      </div>
    </div>
  );
}

export default FormTipComponent;
