import React from "react";
import styles from "./HorseSearch.module.css";

interface HorseSearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const HorseSearch: React.FC<HorseSearchProps> = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="ابحث باسم الحصان"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className={styles.searchInput}
    />
  );
};

export default HorseSearch;
