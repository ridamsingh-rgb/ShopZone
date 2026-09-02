import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <h2>ShopZone</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  )
}

export default Navbar