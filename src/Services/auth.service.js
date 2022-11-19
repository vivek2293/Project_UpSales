import axios from "axios";
import url from "../global_var";

const signup = (info) => {
  return axios
    .post(url + "/signup", info)
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data.accessToken));
        localStorage.setItem("companyName", JSON.stringify(response.data.companyName));
      }

      return response.data;
    });
};

const login = (info) => {
  return axios
    .post(url + "/login", info)
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data.accessToken));
        localStorage.setItem("companyName", JSON.stringify(response.data.companyName));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("companyName");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default authService;
