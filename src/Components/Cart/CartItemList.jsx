import { FaRegTrashAlt } from "react-icons/fa";

const CartItemList = ({ cartItems, handleUpdateQuantity, isLoading }) => {

  if(isLoading) {
    return (
      <div className="flex justify-center">
        <h1 className="text-2xl font-biscotti w-full">Cart Is Loading....</h1>
      </div>
    )
  }
  if(cartItems.length === 0) {
    return (
      <div className="flex justify-center">
        <h1 className="text-2xl font-biscotti w-full">Cart Is Empty</h1>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Shopping Cart</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Product</th>
              <th className="text-right">Price</th>
              <th>Quantity</th>
              <th className="text-right">Total</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {
              cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="font-medium">{item.product.name}</td>
                  <td className="text-right">${item.product.price}</td>
                  <td>
                    <div className="flex items-center join">
                      <button 
                        className="btn btn-xs btn-outline join-item"
                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                      > - </button>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleUpdateQuantity(item.id, e.target.value)}
                        className="input input-xs input-bordered join-item w-12 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      />
                      <button 
                        className="btn btn-xs btn-outline join-item"
                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                      > + </button>
                    </div>
                  </td>

                  <td className="text-right font-medium">{item.total_price}</td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs btn-circle"
                    >
                      <FaRegTrashAlt className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartItemList;