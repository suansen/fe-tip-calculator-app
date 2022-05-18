import { useEffect, useState, useRef } from "react";

function FormPeopleComponent({ state, dispatch }) {
  const [check, setCheck] = useState(false);
  const inputRef = useRef();

  function handleOnChange(e) {
    e.preventDefault();
    dispatch({ type: "setPeople", data: e.target.value });
  }

  useEffect(() => {
    state.people <= 0 ? setCheck(true) : setCheck(false);
  }, [state.reset, state.bill, state.tip, state.people]);

  return (
    <div className="mb-6">
      <div className="flex justify-between">
        <label
          htmlFor="people"
          className="block mb-2 text-sm font-medium text-neutral-dark-gray-cyan"
        >
          Number of People
        </label>
        {check && (
          <p className="block mb-2 text-sm font-medium text-red-500">
            Can't be zero
          </p>
        )}
      </div>

      <input
        onChange={handleOnChange}
        type="number"
        id="people"
        ref={inputRef}
        value={state.people}
        className={`bg-gray-50 border ${
          check ? "border-red-500" : "border-gray-300"
        }  rounded-sm focus:outline-primary block w-full h-10 p-2.5 text-neutral-dark-cyan text-lg text-right`}
        placeholder="0"
        required
      ></input>
    </div>
  );
}

export default FormPeopleComponent;
