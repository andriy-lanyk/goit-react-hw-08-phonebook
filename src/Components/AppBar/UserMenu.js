import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "../../Redux/Auth/auth-selectors";
import authOperations from "../../Redux/Auth/auth-operations";
import { Container, Span } from "./AppBar.styles";

const UserMenu = () => {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  return (
    <Container>
      <Span>Hello, {name}</Span>
      <button type="button" onClick={dispatch(authOperations.logOut())}>
        LogOut
      </button>
    </Container>
  );
};
