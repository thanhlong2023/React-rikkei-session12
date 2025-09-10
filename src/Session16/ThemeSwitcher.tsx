import React, { useState } from "react";

const ThemeSwitcher: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const themeStyle: React.CSSProperties = {
    backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
    color: isDarkMode ? "#f5f5f5" : "#000000",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s ease-in-out",
  };

  return (
    <div style={themeStyle}>
      <h2>
        {isDarkMode ? "🌙 Chế độ Tối đang bật" : "☀️ Chế độ Sáng đang bật"}
      </h2>
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
          marginTop: "20px",
          backgroundColor: isDarkMode ? "#007bff" : "#333",
          color: "#fff",
          transition: "background-color 0.2s",
        }}
      >
        Chuyển theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;
