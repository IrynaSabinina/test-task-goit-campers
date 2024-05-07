import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useLocation } from 'react-router-dom';
export const Header = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <header>
      <ul>
        <li>
          <Link to="/">
            {pathname === "/" ?  <button id ="home" className={styles.headerButtonActive} type="button">
              Home
            </button>: <button id ="home" className={styles.headerButton} type="button">
              Home
            </button>}
           
          </Link>
        </li>
        <li>
          <Link to="/catalog">
                {pathname === "/catalog" ?  <button id ="home" className={styles.headerButtonActive} type="button">
              Catalog
            </button>: <button id ="home" className={styles.headerButton} type="button">
              Catalog
            </button>}
          </Link>
        </li>
        <li>
          <Link to="/favorites">
             {pathname === "/favorites" ?  <button id ="home" className={styles.headerButtonActive} type="button">
             Favorites
            </button>: <button id ="home" className={styles.headerButton} type="button">
              Favorites
            </button>}
          </Link>
        </li>
      </ul>
    </header>
  );
};
