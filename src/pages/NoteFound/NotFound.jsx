import { GoHome } from "../../components/GoHome/GoHome";
import styles from "../Home/HomePage.module.css"


export const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <img src="https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_1280.png" alt="not found" width = "80%" height="60%" />
      <GoHome />
    </div>
  );
};