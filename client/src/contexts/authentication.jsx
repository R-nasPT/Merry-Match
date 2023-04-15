


import React, { useState } from "react";
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

  const navigate = useNavigate();

  const login = async (data) => {
    // 🐨 Todo: Exercise #4
    //  ให้เขียน Logic ของ Function `login` ตรงนี้
    //  Function `login` ทำหน้าที่สร้าง Request ไปที่ API POST /login
    //  ที่สร้างไว้ด้านบนพร้อมกับ Body ที่กำหนดไว้ในตารางที่ออกแบบไว้
    const result = await axios.post("http://localhost:3000/auth/login", data);

    const token = result.data.token;
    localStorage.setItem("token", token);
    const userDataFromToken = jwtDecode(token);
    setState({ ...state, user: userDataFromToken });
    navigate("/");
  };


  //   const login = async (data) => {
//     try {
//       setIsError(false);
//       setIsLoading(true);
//       await axios.post(`http://localhost:3000/auth/login`, data, {
//         header: { "content-Type": "multipart/form-data" },
//       });
//       setIsLoading(false);
//       navigate("/");
//     } catch (error) {
//       setIsError(true);
//       setIsLoading(false);
//     }
//   };

  const register = async (data) => {
    // 🐨 Todo: Exercise #2
    //  ให้เขียน Logic ของ Function `register` ตรงนี้
    //  Function register ทำหน้าที่สร้าง Request ไปที่ API POST /register
    //  ที่สร้างไว้ด้านบนพร้อมกับ Body ที่กำหนดไว้ในตารางที่ออกแบบไว้
    await axios.post("http://localhost:3000/auth/register", data);
    navigate("/login");
  };


//   const register = async (data) => {
//     try {
//       setIsError(false);
//       setIsLoading(true);
//       await axios.post(`http://localhost:3000/auth/register`, data, {
//         header: { "content-Type": "multipart/form-data" },
//       });
//       setIsLoading(false);
//       navigate("/login");
//     } catch (error) {
//       setIsError(true);
//       setIsLoading(false);
//     }
//   };
  



  const logout = () => {
    // 🐨 Todo: Exercise #7
    //  ให้เขียน Logic ของ Function `logout` ตรงนี้
    //  Function logout ทำหน้าที่ในการลบ JWT Token ออกจาก Local Storage
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

// this is a hook that consume AuthContext
const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
