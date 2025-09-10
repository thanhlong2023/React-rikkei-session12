// Button.tsx
import React from "react";
import "./Button.css";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "light"
  | "dark"
  | "link";

interface ButtonProps {
  variant: ButtonVariant;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, children }) => {
  return <button className={`btn ${variant}`}>{children}</button>;
};

export default Button;
