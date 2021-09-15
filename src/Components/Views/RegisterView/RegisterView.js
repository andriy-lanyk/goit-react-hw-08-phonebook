import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../../Redux/Auth";

import { Form, Label, Btn } from "./RegisterView.styles";

const RegisterView = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Fill out the registration form</h1>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </Label>

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
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>

        <Btn type="submit">Sign up</Btn>
      </Form>
    </div>
  );
};

export default RegisterView;
