import { useState } from "react";

export default function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const toggleLogin = (): void => {
    setIsLoggedIn((prev) => !prev);
  };
  return (
    <div
      style={{
        margin: "24px 0",
        padding: 16,
        background: "#f1f5f9",
        borderRadius: 8,
      }}
    >
      <p style={{ fontWeight: 500, fontSize: 18 }}>
        {isLoggedIn ? "Xin chào, User!" : "Vui lòng đăng nhập để tiếp tục."}
      </p>
      <button
        onClick={toggleLogin}
        style={{
          marginTop: 12,
          padding: "8px 18px",
          background: isLoggedIn ? "#ef4444" : "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
          fontWeight: 500,
        }}
      >
        {isLoggedIn ? "Đăng xuất" : "Đăng nhập"}
      </button>
    </div>
  );
}
