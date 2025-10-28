import { Suspense, useEffect, useState } from "react";
import useCartContext from "../Hooks/useCartContext";
import CartItemList from "../Components/Cart/CartItemList";
import CartSummary from "../Components/Cart/CartSummary";

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

    setLocalCart((previousLocalCart) => {
      const updateItems = previousLocalCart.items.map((item) => 
        item.id === itemId 
        ? {
          ...item,
          quantity: newQuantity,
          total_price: item?.product.price * newQuantity,
        }
        : item
      )

      return {
        ...previousLocalCart,
        items: updateItems,
        total_price: updateItems.reduce(
          (sum, item) => sum + item.total_price,
          0
        ),
      }
    })

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
        setLocalCart((previousLocalCart) => {
          const updateItems = previousLocalCart.items.filter(item => item.id != itemId);

          return {
            ...previousLocalCart, 
            items: updateItems,
            total_price: updateItems.reduce(
              (sum, item) => sum + item.total_price, 0
            ),
          };
        });
        console.log(response.message);
      } else {
        console.log(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <CartItemList 
            cartItems={localCart?.items || []} 
            handleUpdateQuantity={handleUpdateQuantity} 
            deleteCartItem={handleDeleteItem} 
            isLoading={isLoading}
          />
        </div>
        <div>
          <CartSummary 
            totalPrice={localCart?.total_price || 0}
            itemCount={localCart?.items.length || 0}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;