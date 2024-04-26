import { Link } from 'react-router-dom';
import styles from "../Campers/CampersList.module.css"
export const Header =()=>{
    return (
       
        <header>
             <button className={styles.BtnPagination} type="button">

        <Link to="/">Home</Link>
            </button>
          
            <button className={styles.BtnPagination} type="button">

        <Link to="/catalog">Catalog</Link>
            </button>
            <button className={styles.BtnPagination} type="button">


        <Link to="/favorites">Favorites</Link>
            </button>
        </header>
       
    )
}