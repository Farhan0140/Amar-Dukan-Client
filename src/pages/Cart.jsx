import { Suspense, useEffect, useState } from "react";
import useCartContext from "../Hooks/useCartContext";
import CartItemList from "../Components/Cart/CartItemList";

const Cart = () => {

  const { cart, CreateOrGetCart, updateCartItemQuantity, isLoading } = useCartContext();
  const [ localCart, setLocalCart ] = useState(cart);

  useEffect(() => {

    CreateOrGetCart();

  }, [CreateOrGetCart]);

  useEffect(() => {
    setLocalCart(cart);
  }, [cart]);

  const handleUpdateQuantity = async (itemId, newQuantity) => {

    setLocalCart((previousLocalCart) => ({
      ...previousLocalCart, items: previousLocalCart.items.map(item => item.id === itemId ? {...item, quantity: newQuantity}: item)
    }))

    const response = await updateCartItemQuantity(itemId, newQuantity);

    if (response.success) {
      console.log("Item Updated Successfully...");
    } else {
      console.log("Something Want Wrong...");
    }
  }

  return (
    <div className="flex justify-between">
      <div>
        <CartItemList cartItems={localCart?.items || []} handleUpdateQuantity={handleUpdateQuantity} isLoading={isLoading} />
      </div>
      <div></div>
    </div>
  );
};

export default Cart;