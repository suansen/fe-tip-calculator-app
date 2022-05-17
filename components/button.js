// <ButtonComponent
//   active={active}
//   setActive={setActive}
//   value={5}
//   label={"5%"}
// />;

function ButtonComponent({ active, setActive, label, value }) {
  const style = {
    active: "bg-primary ",
    inactive: "bg-neutral-dark-cyan "
  };

  const handleClick = e => {
    e.preventDefault();
    setActive(value);
  };

  return (
    <button
      onClick={handleClick}
      className={`text-lg rounded-md hover:bg-neutral-light-gray-cyan hover:text-neutral-dark-cyan w-full py-2 text-neutral-white transition ease-in-out duration-100 ${
        active === value ? style.active : style.inactive
      }`}
    >
      {label}
    </button>
  );
}

export default ButtonComponent;
