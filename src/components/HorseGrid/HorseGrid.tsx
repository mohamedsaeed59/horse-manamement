import React from "react";
import styles from "./HorseGrid.module.css";
import { Horse } from "../../types/Horse";
import HorseCard from "../HorseCard/HorseCard";

interface HorseGridProps {
  horses: Horse[];
}

const HorseGrid: React.FC<HorseGridProps> = ({ horses }) => {
  return (
    <div className={styles.horseGrid}>
      {horses.map((horse) => (
        <HorseCard key={horse.id} horse={horse} />
      ))}
    </div>
  );
};

export default HorseGrid;
