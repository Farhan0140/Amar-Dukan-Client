import { useState } from "react";
import apiClient from "../services/api-client";


const useAuth = () => {

  const [user, setUser] = useState(null);

  const getToken = () => {
    const token = localStorage.getItem("authTokens");
    return token ? JSON.parse(token) : null;
  }

  const [authToken, setAuthToken] = useState( getToken() );

  

  // For Login
  const loginUser = async ( email, password ) => {
    const response = await apiClient.post("/auth/jwt/create/", {
      email: email,
      password: password,
    });

    console.log(response.data);
  };

  return {
    user,
    loginUser,
  }

}

export default useAuth;
