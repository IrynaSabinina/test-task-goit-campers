import { Link } from 'react-router-dom';
import styles from "../Campers/CampersList.module.css"

export const GoHome = () => {
  return (
    <button className={styles.BtnPagination}>
      <Link to="/test-task-goit-campers/"> Go Home</Link>
    </button>
  );
};