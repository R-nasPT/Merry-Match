import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [state, setState] = useState({
    loading: null,
    error: null,
    user: null,
  });
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const userDataFromToken = jwtDecode(token);
      setState({ ...state, user: userDataFromToken });
    }
  }, []);

  const navigate = useNavigate();

  const login = async (data) => {
    try {
      const result = await axios.post("http://localhost:3000/auth/login", data);
      const token = result.data.token;
      localStorage.setItem("token", token);
      const userDataFromToken = jwtDecode(token);
      console.log(userDataFromToken);
      setState({ ...state, user: userDataFromToken });
      navigate("/");
    } catch (error) {
      return Promise.reject(error);
    }
    navigate("/");
  };

  const register = async (data) => {
    try {
      const result = await axios.post(
        `http://localhost:3000/auth/register`,
        data
      );
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setState({ ...state, user: null });
  };

  const isAuthenticated = Boolean(localStorage.getItem("token"));

  return (
    <AuthContext.Provider
      value={{ state, login, logout, register, isAuthenticated }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
