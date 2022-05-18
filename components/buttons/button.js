function ButtonComponent({ active, setActive, label, value, dispatch }) {
  const style = {
    active: "bg-primary",
    inactive: "bg-neutral-dark-cyan "
  };

  const handleClick = e => {
    e.preventDefault();
    setActive(value);
    dispatch({ type: "setTip", data: value });
  };

  return (
    <button
      onClick={handleClick}
      className={`text-lg rounded-md focus:text-neutral-white focus:bg-primary hover:bg-neutral-light-gray-cyan hover:text-neutral-dark-cyan w-full py-2 text-neutral-white transition ease-in-out duration-200 ${
        active === value ? style.active : style.inactive
      }`}
    >
      {label}
    </button>
  );
}

export default ButtonComponent;
