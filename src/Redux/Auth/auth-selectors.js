const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUserName = (state) => state.auth.user.name;

const getLoading = (state) => state.auth.isLoading;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getLoading,
};

export default authSelectors;
