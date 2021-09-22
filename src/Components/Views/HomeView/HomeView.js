import { Link } from "react-router-dom";
import styles from "./HomeView.module.css";

const HomeView = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to your Phonebook application!</h1>
      <p className={styles.text}>
        You need to{" "}
        <Link to="/register" className={styles.textLink}>
          register
        </Link>{" "}
        or{" "}
        <Link to="/login" className={styles.textLink}>
          login
        </Link>{" "}
        to go to contact information.
      </p>
    </div>
  );
};

export default HomeView;
