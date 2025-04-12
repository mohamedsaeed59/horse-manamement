import React from "react";
import styles from "./Pagination.module.css";
import Button from "../shared/Button/Button";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, setCurrentPage }) => {
  return (
    <div className={styles.pagination}>
      {Array.from({ length: totalPages }, (_, i) => (
        <Button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          variant={i + 1 === currentPage ? "pagination-active" : "pagination-inactive"}
        >
          {i + 1}
        </Button>
      ))}
    </div>
  );
};

export default React.memo(Pagination);
