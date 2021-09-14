import { useSelector } from "react-redux";
import Navigation from "./Navigation";
import AuthNav from "./AuthNav";
import UserMenu from "./UserMenu";
import authSelectors from "../../Redux/Auth";
import Header from "./AppBar.styles";

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};

export default AppBar;
