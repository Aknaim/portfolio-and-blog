export const setToken = token => {
    localStorage.setItem("bpToken", token);
  };

  export const getToken = () => {
    return localStorage.getItem("bpToken");
  };

  export const removeToken = () => {
    localStorage.removeItem("bpToken");
  };