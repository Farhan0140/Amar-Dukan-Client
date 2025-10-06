import { useState } from "react";
import apiClient from "../services/api-client";

const useCart = () => {

  const getToken = () => {
    const token = localStorage.getItem("authTokens");
    return token ? JSON.parse(token) : null;
  }

  const [authToken] = useState( getToken() );

  // Create a New Cart
  const CreateCart = async () => {
    try {
      const response = await apiClient.post("/api/v1/carts/", {}, {
        headers: {Authorization: `JWT ${authToken?.access}`}
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    CreateCart,
  }
};

export default useCart;