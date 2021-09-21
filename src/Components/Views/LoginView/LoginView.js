import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from "../../../Redux/Auth";
import { toast } from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "./LoginView.module.css";

const LoginView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const error = useSelector(authSelectors.getError);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !email ||
      e.target.email.value.trim() === "" ||
      !password ||
      e.target.password.value.trim() === ""
    ) {
      toast.warn("Enter email and password", { theme: "colored" });
      return;
    }

    if (password.length < 8 || e.target.password.value.length < 8) {
      toast.warn("Password should be at least 8 characters", {
        theme: "colored",
      });
      return;
    }

    dispatch(authOperations.login({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Fill out the login form</h1>

      <form onSubmit={handleSubmit} autoComplete="off" className={styles.form}>
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Password"
          type="password"
          autoComplete="current-password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        {error && (
          <span className={styles.message}>
            Enter correct email and password or{" "}
            <Link className={styles.messageLink} to="/register">
              register
            </Link>
          </span>
        )}

        <Button type="submit" variant="contained" className={styles.button}>
          Log in
        </Button>
      </form>
    </div>
  );
};

export default LoginView;
