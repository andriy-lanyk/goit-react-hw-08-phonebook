import { Link } from "react-router-dom";

const HomeView = () => {
  return (
    <div>
      <h1>Welcome to your Phonebook application!</h1>
      <p>
        You need to <Link to="/register">register</Link> or
        <Link to="/login">login</Link> to go to contact information.
      </p>
    </div>
  );
};

export default HomeView;
