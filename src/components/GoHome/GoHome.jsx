import { Link } from 'react-router-dom';
import styles from "../Campers/CampersList.module.css"
import { Navigate } from 'react-router-dom';

export const GoHome = () => {
  return (
    <button className={styles.BtnPagination}>
      <Navigate to="/"> Go Home</Navigate>
    </button>
  );
};