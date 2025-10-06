import { useEffect } from "react";
import useCartContext from "../Hooks/useCartContext";

const Cart = () => {

  const { CreateCart } = useCartContext()

  useEffect(() => {
    CreateCart();
  }, [])

  return (
    <div>
      <h1>This is Cart Page</h1>
    </div>
  );
};

export default Cart;