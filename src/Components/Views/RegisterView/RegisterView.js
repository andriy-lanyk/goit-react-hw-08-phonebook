import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from "../../../Redux/Auth";
import { toast } from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "./RegisterView.module.css";

const RegisterView = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const error = useSelector(authSelectors.getError);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        return setName(value);
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
      !name ||
      e.target.name.value.trim() === "" ||
      !email ||
      e.target.email.value.trim() === "" ||
      !password ||
      e.target.password.value.trim() === ""
    ) {
      toast.warn("Write your name, email and password", {
        theme: "colored",
      });
      return;
    }
    if (password.length < 8 || e.target.password.value.length < 8) {
      toast.warn(
        "Password should be minimum 8 characters, and contain at least one small letter and one letter in capital register",
        {
          theme: "colored",
        }
      );
      return;
    }

    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Fill out the registration form</h1>

      <form onSubmit={handleSubmit} autoComplete="off" className={styles.form}>
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />

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
          <span className={styles.message}>Used another name or email</span>
        )}

        <Button type="submit" variant="contained" className={styles.button}>
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default RegisterView;
