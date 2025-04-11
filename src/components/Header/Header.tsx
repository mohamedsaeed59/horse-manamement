import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { removeToken } from "../../utils/authUtils";
import styles from "./Header.module.css";
import Button from "../shared/Button";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    removeToken();
    navigate("/login");
  };

  const isLoginPage = location.pathname === "/login";

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>مرحبا بك في التطبيق</h1>
      {!isLoginPage && (
        <Button onClick={handleLogout} variant="logout" label="تسجيل الخروج" />
      )}
    </header>
  );
};

export default Header;
