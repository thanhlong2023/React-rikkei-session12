import { useState } from "react";
import type { FormEvent } from "react";

export default function DateForm() {
  const [date, setDate] = useState<string>(""); // giá trị trong input
  const [submittedDate, setSubmittedDate] = useState<string>(""); // ngày đã submit

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedDate(date);
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Hiển thị ngày đã submit */}
      <h2>Date: {submittedDate || "Chưa chọn"}</h2>

      <h3>Form</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Ngày tháng năm
          <br />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
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
