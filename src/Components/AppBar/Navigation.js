import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <NavLink
        to="/"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Home
      </NavLink>

      <NavLink
        to="/phonebook"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Phonebook
      </NavLink>
    </nav>
  );
};

export default Navigation;
