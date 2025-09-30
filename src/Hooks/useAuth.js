import { useEffect, useState } from "react";
import apiClient from "../services/api-client";


const useAuth = () => {

  const [user, setUser] = useState(null);

  const getToken = () => {
    const token = localStorage.getItem("authTokens");
    return token ? JSON.parse(token) : null;
  }

  const [authToken, setAuthToken] = useState( getToken() );
  const [loginError, setLoginError] = useState("");
  

  useEffect(() => {
    if (authToken) {
      fetchUserProfile();
    }
  }, [authToken]);

  // Fetch User
  const fetchUserProfile = async () => {
    try {
      
      const response = await apiClient.get("/auth/users/me/", {
        headers: { Authorization: `JWT ${authToken?.access}` }
      });
      setUser(response.data);

    } catch ( error ) {
      console.log("Fetching User Error", error);
    }
  }

  // For Registration 
  const [registerErrors, setRegisterErrors] = useState({})

  const registerUser = async (data) => {
    setIsLoading(true);
    try {
      const response = await apiClient.post("/auth/users/", {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        password: data.password
      });
      console.log(response);
    } catch ( error ) {
      setRegisterErrors(error.response?.data);
      // console.log(error.response.data);
      // console.log(error.response.data.email[0]);
      // console.log(error.response.data.password[0]);
    } finally {
      setIsLoading(false);
    }
  }
  

  // For Login

  const [isLoading, setIsLoading] = useState(false);

  const loginUser = async ( data ) => {
    setIsLoading(true);

    try {
      const response = await apiClient.post("/auth/jwt/create/", data);
      setAuthToken(response.data);
      localStorage.setItem("authTokens", JSON.stringify(response.data));
      setLoginError("");
    } catch ( errors ) {
      setLoginError(errors?.response.data.detail);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    user,
    loginUser,
    loginError,
    isLoading,
    registerUser,
    registerErrors,
  }

}

export default useAuth;
