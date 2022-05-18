function AmountResultComponent({ tipTotal }) {
  return (
    <div className="flex justify-between">
      <div>
        <div className="text-neutral-white">Tip Amount</div>
        <div className="text-sm text-neutral-gray-cyan">/ person</div>
      </div>
      <div className="text-primary text-3xl">{`$${
        isNaN(tipTotal.toFixed(2)) || !isFinite(tipTotal.toFixed(2))
          ? (0.0).toFixed(2)
          : tipTotal.toFixed(2)
      }`}</div>
    </div>
  );
}

export default AmountResultComponent;
