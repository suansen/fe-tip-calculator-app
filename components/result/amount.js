import React from "react";

function AmountResultComponent() {
  return (
    <div className="flex justify-between">
      <div>
        <div className="text-neutral-white">Tip Amount</div>
        <div className="text-sm text-neutral-gray-cyan">/ person</div>
      </div>
      <div className="text-primary text-3xl">$0.00</div>
    </div>
  );
}

export default AmountResultComponent;
