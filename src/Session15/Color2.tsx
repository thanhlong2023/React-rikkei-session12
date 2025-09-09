import { useState } from "react";
import type { FormEvent } from "react";

export default function ColorForm() {
  const [color, setColor] = useState<string>("#000000"); // mặc định đen
  const [submittedColor, setSubmittedColor] = useState<string>("#000000");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedColor(color);
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Hiển thị mã màu đã submit */}
      <h2>Color: {submittedColor}</h2>

      <h3>Form</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Màu sắc
          <br />
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" style={{ marginTop: "8px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}
