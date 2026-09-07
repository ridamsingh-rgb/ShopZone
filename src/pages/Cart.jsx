import { useCart } from '../context/Cartcontext'

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useCart()

  if (cart.length === 0) {
    return (
      <div>
        <h1>Shopping Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Shopping Cart</h1>

      {cart.map((item) => (
        <div key={item.id}>
          <img
            src={item.thumbnail}
            alt={item.title}
            width="150"
          />

          <h2>{item.title}</h2>

          <p>Price: ${item.price}</p>

          <button onClick={() => decreaseQuantity(item.id)}>
            -
          </button>

          <span> {item.quantity} </span>

          <button onClick={() => increaseQuantity(item.id)}>
            +
          </button>

          <p>
            Subtotal: $
            {(item.price * item.quantity).toFixed(2)}
          </p>

          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <h2>Total: ${totalPrice.toFixed(2)}</h2>
    </div>
  )
}

export default Cart