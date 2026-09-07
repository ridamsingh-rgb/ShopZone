import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCart'

function Shop() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products')

        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }

        const data = await response.json()
        setProducts(data.products)
      } catch (err) {
        setError('Unable to load products.')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return <h2>Loading products...</h2>
  }

  if (error) {
    return <h2>{error}</h2>
  }

  return (
    <div>
      <h1>Shop</h1>

      <div>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  )
}

export default Shop