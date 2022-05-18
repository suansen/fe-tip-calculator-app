function ButtonReset({ label, dispatch }) {
  const handleClick = () => {
    dispatch({ type: "setReset" });
    dispatch({ type: "reset" });
  };

  return (
    <button
      onClick={handleClick}
      className="tracking-wide text-lg rounded-md bg-primary hover:bg-neutral-light-gray-cyan  text-neutral-dark-cyan  w-full py-2  transition ease-in-out duration-100 "
    >
      {label}
    </button>
  );
}

export default ButtonReset;
