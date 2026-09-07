import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Product() {
  const { id } = useParams()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${id}`
        )

        if (!response.ok) {
          throw new Error('Product not found')
        }

        const data = await response.json()
        setProduct(data)
      } catch (err) {
        setError('Unable to load product.')
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  if (loading) {
    return <h2>Loading product...</h2>
  }

  if (error) {
    return <h2>{error}</h2>
  }

  return (
    <div>
      <img
        src={product.thumbnail}
        alt={product.title}
        width="300"
      />

      <h1>{product.title}</h1>

      <h2>${product.price}</h2>

      <p>{product.description}</p>
    </div>
  )
}

export default Product