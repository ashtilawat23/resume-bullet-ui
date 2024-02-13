const keyPhrase = import.meta.env.VITE_KEY_PHRASE;

const isAuthenticated = () => {
  const savedKeyPhrase = localStorage.getItem("keyPhrase");
  return savedKeyPhrase === keyPhrase;
};

const login = (inputKeyPhrase) => {
  if (inputKeyPhrase === keyPhrase) {
    localStorage.setItem("keyPhrase", inputKeyPhrase);
    return true;
  }
  return false;
};

const logout = () => {
  localStorage.removeItem("keyPhrase");
};

export { isAuthenticated, login, logout };