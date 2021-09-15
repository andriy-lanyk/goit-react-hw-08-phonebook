import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authSelectors } from "../../Redux/Auth";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
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

      {isLoggedIn && (
        <NavLink
          to="/phonebook"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
