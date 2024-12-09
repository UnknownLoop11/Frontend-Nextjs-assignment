"use client";

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center border rounded-md">
      <button
        className="py-0.5 px-3 rounded-md text-xl"
        onClick={() => setCount((prev) => prev - 1)}
      >
        -
      </button>
      <p className="align-middle text-xs font-semibold w-10 text-center">
        {count}
      </p>
      <button
        className="py-0.5 px-3 rounded-md text-xl"
        onClick={() => setCount((prev) => prev + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
