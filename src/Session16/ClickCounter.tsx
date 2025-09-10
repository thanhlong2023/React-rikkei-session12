import React, { useState } from "react";

const ClickCounter: React.FC = () => {
  // Khai báo state
  const [count, setCount] = useState<number>(0);

  // Hàm xử lý click
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Số lần click: {count}</h2>
      <button
        style={{
          border: "1px solid red",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        Click me
      </button>
    </div>
  );
};

export default ClickCounter;
