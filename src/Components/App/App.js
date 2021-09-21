import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import PrivateRoute from "../Routes/PrivateRoute";
import PublicRoute from "../Routes/PublicRoute";
import { authOperations, authSelectors } from "../../Redux/Auth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Loader from "../Loader";
import AppBar from "../AppBar";
import { Container } from "./App.styles";

const HomeView = lazy(() =>
  import("../Views/HomeView" /* webpackChunkName: "Home-view" */)
);
const RegisterView = lazy(() =>
  import("../Views/RegisterView" /* webpackChunkName: "Register-view" */)
);
const LoginView = lazy(() =>
  import("../Views/LoginView" /* webpackChunkName: "Login-view" */)
);
const PhonebookView = lazy(() =>
  import("../Views/PhonebookView" /* webpackChunkName: "Phonebook-view" */)
);

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(authSelectors.getLoading);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isLoading && (
      <Container>
        <AppBar />

        <Suspense fallback={Loader}>
          <Switch>
            <PublicRoute path="/" exact>
              <HomeView />
            </PublicRoute>
            <PublicRoute path="/register" redirectTo="/phonebook" restricted>
              <RegisterView />
            </PublicRoute>
            <PublicRoute path="/login" redirectTo="/phonebook" restricted>
              <LoginView />
            </PublicRoute>
            <PrivateRoute path="/phonebook" redirectTo="/login">
              <PhonebookView />
            </PrivateRoute>
          </Switch>
        </Suspense>
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Container>
    )
  );
};

export default App;
