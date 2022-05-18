import { useRef } from "react";

function FormBillComponent({ bill, dispatch }) {
  const inputRef = useRef();

  function handleInputChange(e) {
    e.preventDefault();
    dispatch({ type: "setBill", data: e.target.value });
  }

  return (
    <div className="mb-6">
      <label
        htmlFor="bill"
        className="text-neutral-dark-gray-cyan block mb-2 text-sm font-medium "
      >
        Bill
      </label>
      <input
        onChange={handleInputChange}
        ref={inputRef}
        value={bill}
        required
        autoComplete="off"
        type="number"
        id="bill"
        className="bg-gray-50 border border-gray-300 rounded-sm focus:outline-primary block w-full h-10 p-2.5 text-neutral-dark-cyan text-lg text-right"
        placeholder="0"
      ></input>
    </div>
  );
}

export default FormBillComponent;
