import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from "../../Redux/Auth";
import { Container, Span, Btn } from "./AppBar.styles";

const UserMenu = () => {
  const name = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();

  return (
    <Container>
      <Span>Hello, {name}</Span>
      <Btn type="button" onClick={() => dispatch(authOperations.logOut())}>
        LogOut
      </Btn>
    </Container>
  );
};

export default UserMenu;
