let loggedInUser = null;

export const setLoggedInUser = (user) => {
  loggedInUser = user;
};

export const getLoggedInUser = () => {
  return loggedInUser;
};

export const clearLoggedInUser = () => {
    loggedInUser = null;
};