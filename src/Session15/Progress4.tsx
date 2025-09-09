import { useState } from "react";
import type { FormEvent } from "react";

export default function ProgressForm() {
  const [progress, setProgress] = useState<number>(0); // giá trị thanh kéo
  const [submittedProgress, setSubmittedProgress] = useState<number>(0); // giá trị sau khi submit

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedProgress(progress);
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Hiển thị tiến độ đã submit */}
      <h2>Progress: {submittedProgress}%</h2>

      <h3>Form</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Tiến độ
          <br />
          <input
            type="range"
            min={0}
            max={100}
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
          />
        </label>
        <div>{progress}%</div>
        <br />
        <button type="submit" style={{ marginTop: "8px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}
