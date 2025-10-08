import { useState } from "react";
import apiClient from "../services/api-client";

const useCart = () => {

  const getToken = () => {
    const token = localStorage.getItem("authTokens");
    return token ? JSON.parse(token) : null;
  }

  const [authToken] = useState( getToken() );
  const [cart, setCart] = useState(null);
  const [cartId, setCartId] = useState(() => localStorage.getItem("cartId"));

  // Create a New Cart
  const CreateOrGetCart = async () => {
    try {
      const response = await apiClient.post("/api/v1/carts/", {}, {
        headers: {Authorization: `JWT ${authToken?.access}`}
      });
      
      setCart(response.data);
      if (!cartId) {
        setCartId(response.data.id);
        localStorage.setItem("cartId", response.data.id);
      }
    } catch (error) {
      console.log(error);
    }
  }


  // Adding Items to cart 
  const AddCartItem = async (product_id, quantity) => {
    if (!cart) {
      await CreateOrGetCart();
    }

    try {
      await apiClient.post(`/api/v1/carts/${cartId}/items/`, 
        {product_id, quantity},
        {headers: {Authorization: `JWT ${authToken?.access}`}}
      )

      return {success: true, message: "Successfully added to cart"}
    } catch (error) {
      console.log("From Add Items To Cart", error);
      return {
        success: false,
        message: "Something Want Wrong.."
      }
    }
  }

  return {
    cart,
    CreateOrGetCart,
    AddCartItem,
  }
};

export default useCart;