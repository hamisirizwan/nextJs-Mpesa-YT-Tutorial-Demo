import React from "react";

export default function StkPushQueryLoading({ phone }: { phone: string }) {
  return (
    <div className="space-y-2 text-center p-10">
      {/* loading text */}
      <h1 className="animate-pulse">PROCESSING PAYMENT...</h1>
      {/* number */}
      <h1>Stk Push Sent To {phone}</h1>
      {/* instructions */}
      <h1>Enter the pin to confirm payment</h1>
    </div>
  );
}
