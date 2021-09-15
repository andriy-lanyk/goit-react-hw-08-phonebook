import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const AuthNav = () => {
  return (
    <div>
      <NavLink
        to="/register"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Registration
      </NavLink>

      <NavLink
        to="/login"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        LogIn
      </NavLink>
    </div>
  );
};

export default AuthNav;
