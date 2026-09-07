import { useCart } from '../context/Cartcontext'
import { useAuth } from '../context/AuthContext'

function Checkout() {
  const { totalItems, totalPrice } = useCart()
  const { isLoggedIn } = useAuth()

  if (!isLoggedIn) {
    return <h2>Please login to continue.</h2>
  }

  return (
    <div>
      <h1>Checkout</h1>

      <p>Items: {totalItems}</p>

      <h2>Total: ${totalPrice.toFixed(2)}</h2>

      <button>Place Order</button>
    </div>
  )
}

export default Checkout