import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <div>
      <Link to={`/product/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          width="200"
        />

        <h2>{product.title}</h2>
        <p>${product.price}</p>
      </Link>
    </div>
  )
}

export default ProductCard