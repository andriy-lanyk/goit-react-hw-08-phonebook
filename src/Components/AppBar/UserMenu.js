import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from "../../Redux/Auth";

import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { Container, Span } from "./AppBar.styles";

const UserMenu = () => {
  const name = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();

  return (
    <Container>
      <Span>
        Hello, <AccountBoxIcon color="primary" fontSize="large" />
        {name}
      </Span>
      <Button
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
        variant="contained"
        size="small"
        endIcon={<ExitToAppIcon />}
      >
        LogOut
      </Button>
    </Container>
  );
};

export default UserMenu;
