function FormPeopleComponent() {
  return (
    <div className="mb-6">
      <label
        htmlFor="people"
        className="block mb-2 text-sm font-medium text-neutral-dark-gray-cyan"
      >
        Number of People
      </label>
      <input
        type="text"
        id="people"
        className="bg-gray-50 border border-gray-300 rounded-sm focus:outline-primary block w-full h-10 p-2.5 text-neutral-dark-cyan text-lg text-right"
        placeholder="0"
        required
      ></input>
    </div>
  );
}

export default FormPeopleComponent;
