const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUserName = (state) => state.auth.user.name;

const getLoading = (state) => state.auth.isLoading;

const getLoginError = (state) => state.auth.error.login;

const getRegisterError = (state) => state.auth.error.register;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getLoading,
  getLoginError,
  getRegisterError,
};

export default authSelectors;
