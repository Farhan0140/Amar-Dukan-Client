import { useCallback, useEffect, useState } from "react";
import authApiClient from "../services/auth-api-client";

const useCart = () => {
  
  const [cart, setCart] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cartId, setCartId] = useState(() => localStorage.getItem("cartId"));

  // Create a New Cart
  const CreateOrGetCart = useCallback(
    async () => {
      setIsLoading(true);
      try {
        const response = await authApiClient.post("/api/v1/carts/");
        
        setCart(response.data);
        if (!cartId) {
          setCartId(response.data.id);
          localStorage.setItem("cartId", response.data.id);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    },
    [cartId]
  );

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      await CreateOrGetCart();
      setIsLoading(false);
    })()
  }, [CreateOrGetCart])


  // Adding Items to cart 
  const AddCartItem = useCallback(
    async (product_id, quantity) => {
      if (!cartId) {
        await CreateOrGetCart();
      }

      try {
        await authApiClient.post(`/api/v1/carts/${cartId}/items/`, 
          {product_id, quantity}
        )

        return {success: true, message: "Successfully added to cart"}
      } catch (error) {
        console.log("From Add Items To Cart", error);
        return {
          success: false,
          message: "Something Want Wrong.."
        }
      }
    },
    [cartId, CreateOrGetCart]
  )

  
  // Update Item Quantity
  const updateCartItemQuantity = useCallback(
    async (itemId, quantity) => {
      // setIsLoading(true);

      try {
        await authApiClient.patch(`api/v1/carts/${cartId}/items/${itemId}/`, {quantity,});
        return {success: true, message: "yo motherfucker"}
      } catch (error) {
        console.log("Error From Update Cart Item Quantity\n", error);
        return {success: false, message:"yo banchod"}
      } finally {
        setIsLoading(false);
      }
    },
    [cartId]
  )


  // Delete Item From Cart
  const deleteCartItem = async (itemId) => {
    try {
      const response = await authApiClient.delete(`/api/v1/carts/${cartId}/items/${itemId}/`);

      if( response ) {
        return {success: true, message: "Item Deleted Successfully"}
      } else {
        return {success: false, message: "Something Want Wrong"}
      }
    } catch (error) {
      console.log(error);
    }
  }

  return {
    cart,
    CreateOrGetCart,
    AddCartItem,
    updateCartItemQuantity,
    deleteCartItem,
    isLoading,
  }
};

export default useCart;