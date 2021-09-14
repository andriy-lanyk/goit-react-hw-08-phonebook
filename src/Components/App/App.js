import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { authOperations } from "../../Redux/Auth/auth-operations";

import AppBar from "../AppBar";
import HomeView from "../HomeView";
import RegisterView from "../RegisterView";
import LoginView from "../LoginView";
import PhonebookView from "../PhonebookView";
import { Container } from "./App.styles";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>
        <Route path="/register">
          <RegisterView />
        </Route>
        <Route path="/login">
          <LoginView />
        </Route>
        <Route path="/phonebook">
          <PhonebookView />
        </Route>
      </Switch>
    </Container>
  );
};

export default App;
