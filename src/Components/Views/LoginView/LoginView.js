import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../../Redux/Auth";

import { Form, Label, Btn } from "./LoginView.styles";

const LoginView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

    dispatch(authOperations.login({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Fill out the login form</h1>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Email
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>

        <Label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>

        <Btn type="submit">Login</Btn>
      </Form>
    </div>
  );
};

export default LoginView;
