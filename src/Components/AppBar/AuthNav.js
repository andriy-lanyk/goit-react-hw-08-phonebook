import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const AuthNav = () => {
  return (
    <div>
      <NavLink
        to="/register"
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Registration
      </NavLink>

      <NavLink to="/login" style={styles.link} activeStyle={styles.activeLink}>
        LogIn
      </NavLink>
    </div>
  );
};

export default AuthNav;
