import { Suspense, useEffect, useState } from "react";
import useCartContext from "../Hooks/useCartContext";
import CartItemList from "../Components/Cart/CartItemList";

const Cart = () => {

  const { cart, CreateOrGetCart, updateCartItemQuantity, deleteCartItem, isLoading } = useCartContext();
  const [ localCart, setLocalCart ] = useState(cart);

  useEffect(() => {

    CreateOrGetCart();

  }, [CreateOrGetCart]);

  useEffect(() => {
    setLocalCart(cart);
  }, [cart, deleteCartItem]);

  const handleUpdateQuantity = async (itemId, newQuantity) => {

    const copyCart = localCart;

    setLocalCart((previousLocalCart) => ({
      ...previousLocalCart, items: previousLocalCart.items.map(item => item.id === itemId ? {...item, quantity: newQuantity}: item)
    }))

    const response = await updateCartItemQuantity(itemId, newQuantity);

    if (response.success) {
      console.log("Item Updated Successfully...");
    } else {
      setLocalCart(copyCart);   // Roll back to previous state if API fails
      console.log("Something Want Wrong...");
    }
  }

  const handleDeleteItem = async (itemId) => {
    try {
      const response = await deleteCartItem(itemId);

      if (response.success) {
        setLocalCart((previousLocalCart) => (
          {...previousLocalCart, items: previousLocalCart.items.filter(item => item.id != itemId)}
        ));
        console.log(response.message);
      } else {
        console.log(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex justify-between">
      <div>
        <CartItemList 
          cartItems={localCart?.items || []} 
          handleUpdateQuantity={handleUpdateQuantity} 
          deleteCartItem={handleDeleteItem} 
          isLoading={isLoading}
        />
      </div>
      <div></div>
    </div>
  );
};

export default Cart;