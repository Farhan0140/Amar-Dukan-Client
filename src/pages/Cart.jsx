import { useEffect } from "react";
import useCartContext from "../Hooks/useCartContext";

const Cart = () => {

  const { cart, CreateOrGetCart } = useCartContext()

  useEffect(() => {
    console.log("Calling Create or Get Cart");
    CreateOrGetCart();
  }, [CreateOrGetCart])

  return (
    <div>
      <h1>{JSON.stringify(cart)}</h1>
    </div>
  );
};

export default Cart;