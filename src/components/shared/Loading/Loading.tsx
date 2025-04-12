import React from "react";
import styles from "./Loading.module.css";

interface LoadingProps {
  text?: string;
}

const Loading: React.FC<LoadingProps> = ({ text = "جاري التحميل..." }) => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner} />
      <p>{text}</p>
    </div>
  );
};

export default Loading;