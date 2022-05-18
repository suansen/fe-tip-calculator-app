function TotalResultComponent({ total }) {
  return (
    <div className="flex justify-between">
      <div>
        <div className="text-neutral-white">Total</div>
        <div className="text-sm text-neutral-gray-cyan">/ person</div>
      </div>
      <div className="text-primary text-3xl">{`$${
        isNaN(total.toFixed(2)) ? (0.0).toFixed(2) : total.toFixed(2)
      }`}</div>
    </div>
  );
}

export default TotalResultComponent;
