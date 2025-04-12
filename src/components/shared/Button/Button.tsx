import React from "react";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "pagination-active" | "pagination-inactive" | "logout";
  loading?: boolean;
  fullWidth?: boolean;
  label?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  loading,
  fullWidth,
  label,
  className,
  ...props
}) => {
  return (
    <button
        className={`${styles.button} ${styles[variant]} ${fullWidth ? styles.fullWidth : ""} ${className || ""}`}
        disabled={loading || props.disabled}
        {...props}
        >
        {loading ? "جاري التنفيذ..." : label || children}
    </button>
  );
};

export default Button;
