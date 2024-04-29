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
          <Link to="/test-task-goit-campers/">
            {pathname === "/test-task-goit-campers/" ?  <button id ="home" className={styles.headerButtonActive} type="button">
              Home
            </button>: <button id ="home" className={styles.headerButton} type="button">
              Home
            </button>}
           
          </Link>
        </li>
        <li>
          <Link to="/test-task-goit-campers/catalog">
                {pathname === "/test-task-goit-campers/catalog" ?  <button id ="home" className={styles.headerButtonActive} type="button">
              Catalog
            </button>: <button id ="home" className={styles.headerButton} type="button">
              Catalog
            </button>}
          </Link>
        </li>
        <li>
          <Link to="/test-task-goit-campers/favorites">
             {pathname === "/test-task-goit-campers/favorites" ?  <button id ="home" className={styles.headerButtonActive} type="button">
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
