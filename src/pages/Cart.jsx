/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import useCartContext from "../Hooks/useCartContext";

const Cart = () => {

  const { cart, CreateOrGetCart } = useCartContext()

  useEffect(() => {
    CreateOrGetCart();
  }, [])

  return (
    <div>
      <h1>{JSON.stringify(cart)}</h1>
    </div>
  );
};

export default Cart;