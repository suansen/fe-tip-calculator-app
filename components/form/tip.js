import { useEffect, useRef } from "react";
import ButtonComponent from "../buttons/button";
import { useImmer } from "use-immer";

function FormTipComponent({ reset, dispatch }) {
  const inputElement = useRef();
  const [active, setActive] = useImmer(0);

  function handleOnChange(e) {
    e.preventDefault();
    setActive(0);
    dispatch({ type: "setTip", data: e.target.value });
  }

  function handleOnFocus() {
    setActive(0);
  }

  useEffect(() => {
    if (active > 0) inputElement.current.value = null;
  }, [active]);

  useEffect(() => {
    setActive(0);
    inputElement.current.value = null;
  }, [reset]);

  return (
    <div className="mb-6">
      <h2 className="text-neutral-dark-gray-cyan">Select Tip %</h2>
      {/* <p>Reset is {reset}</p>
      <p>Active is {active}</p> */}
      <div className="grid grid-cols-3 gap-2">
        <div>
          <ButtonComponent
            active={active}
            setActive={setActive}
            value={5}
            label={"5%"}
            dispatch={dispatch}
          />
        </div>
        <div>
          <ButtonComponent
            active={active}
            setActive={setActive}
            value={10}
            label={"10%"}
            dispatch={dispatch}
          />
        </div>
        <div>
          <ButtonComponent
            active={active}
            setActive={setActive}
            value={15}
            label={"15%"}
            dispatch={dispatch}
          />
        </div>
        <div>
          <ButtonComponent
            active={active}
            setActive={setActive}
            value={25}
            label={"25%"}
            dispatch={dispatch}
          />
        </div>
        <div>
          <ButtonComponent
            active={active}
            setActive={setActive}
            value={50}
            label={"50%"}
            dispatch={dispatch}
          />
        </div>
        <div>
          <input
            onChange={handleOnChange}
            onFocus={handleOnFocus}
            ref={inputElement}
            min="0"
            max="100"
            autoComplete="off"
            type="number"
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
