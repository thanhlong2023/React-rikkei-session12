import { useState } from "react";
export default function SubjectList() {
  const [subjects, setSubjects] = useState<string[]>([
    "Toán",
    "Lý",
    "Hóa",
    "Văn",
    "Sử",
    "Địa",
  ]);
  return (
    <div
      style={{
        maxWidth: 400,
        margin: "40px auto",
        background: "#f8fafc",
        borderRadius: 12,
        boxShadow: "0 2px 12px #0001",
        padding: 24,
      }}
    >
      <h1 style={{ textAlign: "center", color: "#2563eb", marginBottom: 20 }}>
        Danh sách môn học
      </h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {subjects.map((subject, index) => (
          <li
            key={index}
            style={{
              background: "#fff",
              margin: "8px 0",
              padding: "10px 16px",
              borderRadius: 8,
              boxShadow: "0 1px 4px #0001",
              fontWeight: 500,
              color: "#334155",
              transition: "background 0.2s",
            }}
          >
            {subject}
          </li>
        ))}
      </ul>
    </div>
  );
}
