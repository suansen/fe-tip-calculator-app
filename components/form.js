function FormComponent({ children }) {
  return (
    <div className="w-full md:w-[50%]">
      <form action="">{children}</form>
    </div>
  );
}

export default FormComponent;
