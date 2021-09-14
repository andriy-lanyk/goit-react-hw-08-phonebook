import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from "../../Redux/Auth";
import { Container, Span } from "./AppBar.styles";

const UserMenu = () => {
  const name = useSelector(authSelectors.getUserName);
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

export default UserMenu;
