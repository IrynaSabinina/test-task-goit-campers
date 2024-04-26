import { Link } from "react-router-dom";
import styles from "./Header.module.css";
export const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/test-task-goit-campers/">
            <button className={styles.headerButton} type="button">
              Home{" "}
            </button>
          </Link>
        </li>
        <li>
          <Link to="/test-task-goit-campers/catalog">
            <button className={styles.headerButton} type="button">
              Catalog{" "}
            </button>
          </Link>
        </li>
        <li>
          <Link to="/test-task-goit-campers/favorites">
            <button className={styles.headerButton} type="button">
              Favorites
            </button>
          </Link>
        </li>
      </ul>
    </header>
  );
};
