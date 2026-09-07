import { Link } from 'react-router-dom'
import { useCart } from '../context/Cartcontext'

function Navbar() {
  const { totalItems } = useCart()

  return (
    <nav>
      <h2>ShopZone</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart ({totalItems})</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  )
}

export default Navbar