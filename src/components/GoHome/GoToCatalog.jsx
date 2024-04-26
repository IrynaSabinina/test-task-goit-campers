import { Link } from "react-router-dom";
import styles from "../Campers/CampersList.module.css"

export const GoToCatalog =()=>{
      return (
    <button className={styles.BtnPagination}>
      <Link to="/catalog"> Go to Catalog</Link>
    </button>
  );
};
