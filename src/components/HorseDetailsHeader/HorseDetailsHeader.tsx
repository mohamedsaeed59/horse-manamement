import React from "react";
import styles from "./HorseDetailsHeader.module.css";
import { Horse } from "../../types/Horse";
import { calculateAge } from "../../utils/convertDateToAge";

interface HorseDetailsHeaderProps {
  horse: Horse;
}

const HorseDetailsHeader: React.FC<HorseDetailsHeaderProps> = ({ horse }) => {
  return (
    <div className={styles.header}>
      <img
        src={horse.image}
        loading="lazy"
        alt={horse.name}
      />
      <h3 className={styles.name}>{horse.name}</h3>
      <p className={styles.text}>
        <strong>العمر:</strong> {calculateAge(horse.date_of_birth)}
      </p>
      <p className={styles.text}>
        <strong>السلالة:</strong> {horse.breed}
      </p>
    </div>
  );
};

export default React.memo(HorseDetailsHeader);