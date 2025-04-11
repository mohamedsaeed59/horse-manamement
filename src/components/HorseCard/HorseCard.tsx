import React from "react";
import { Horse } from "../../types/Horse";
import { useNavigate } from "react-router-dom";
import styles from './HorseCard.module.css'
import { calculateAge } from "../../utils/convertDateToAge";

interface HorseCardProps {
  horse: Horse;
}

const HorseCard: React.FC<HorseCardProps> = ({ horse }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/horses/${horse.id}`);
  };

  return (
    <div onClick={handleClick} className={styles.card}>
      <img
        // src="https://rehla-iq.com/m/public/images/ad/674b5502b65fc.jpg"
        src={horse.image}
        loading="lazy"
        alt={horse.name}
        className={styles.image}
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

export default React.memo(HorseCard);