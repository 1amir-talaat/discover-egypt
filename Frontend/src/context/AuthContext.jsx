import React, { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

const axiosBase = axios.create({
  baseURL: "http://localhost:5000",
});

const AuthProvider = ({ children }) => {
  const storedState = JSON.parse(localStorage.getItem("authState"));
  const [state, dispatch] = useReducer(authReducer, storedState || initialState);

  useEffect(() => {
    localStorage.setItem("authState", JSON.stringify(state));
  }, [state]);

  const login = async (email, password) => {
    try {
      const response = await axiosBase.post("/users/login", { email, password });
      const { user, token } = response.data;
      dispatch({ type: "LOGIN", payload: { user, token } });
    } catch (error) {
      console.error("Login failed:", error);
      throw error.response.data.error;
    }
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const register = async (name, email, password) => {
    try {
      const response = await axiosBase.post("/users/register", { name, email, password });
      const { user, token } = response.data;
      dispatch({ type: "LOGIN", payload: { user, token } });
    } catch (error) {
      console.error("Registration failed:", error);
      throw error.response.data.error;
    }
  };

  return <AuthContext.Provider value={{ ...state, login, logout, register }}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
