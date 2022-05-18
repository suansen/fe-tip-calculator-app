function ResultComponent({ children }) {
  return (
    <div className="rounded-lg bg-neutral-dark-cyan w-full md:w-[50%] p-8 flex flex-col justify-between">
      {children}
    </div>
  );
}

export default ResultComponent;
