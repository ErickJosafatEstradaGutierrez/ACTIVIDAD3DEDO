import { useState, useEffect } from 'react'
import './ContentStyles.css'

const ProductList = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simular carga de datos
    setTimeout(() => {
      setProducts([
        {
          id: 1,
          name: "Laptop Gaming Pro",
          price: 1299.99,
          category: "Tecnología",
          rating: 4.5,
          image: "💻"
        },
        {
          id: 2,
          name: "Smartphone Ultra",
          price: 799.99,
          category: "Tecnología",
          rating: 4.3,
          image: "📱"
        },
        {
          id: 3,
          name: "Auriculares Inalámbricos",
          price: 199.99,
          category: "Audio",
          rating: 4.7,
          image: "🎧"
        },
        {
          id: 4,
          name: "Tablet Deluxe",
          price: 599.99,
          category: "Tecnología",
          rating: 4.4,
          image: "📟"
        },
        {
          id: 5,
          name: "Smart Watch",
          price: 299.99,
          category: "Wearables",
          rating: 4.2,
          image: "⌚"
        },
        {
          id: 6,
          name: "Cámara Profesional",
          price: 899.99,
          category: "Fotografía",
          rating: 4.8,
          image: "📷"
        }
      ])
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div className="content-section">
        <h1>Nuestros Productos</h1>
        <div className="loading">Cargando productos...</div>
      </div>
    )
  }

  return (
    <div className="content-section">
      <h1>Nuestros Productos</h1>
      <p className="section-description">
        Descubre nuestra increíble selección de productos tecnológicos
      </p>
      
      <div className="grid-layout">
        {products.map(product => (
          <div key={product.id} className="card">
            <div className="card-image">{product.image}</div>
            <div className="card-content">
              <h3>{product.name}</h3>
              <p className="category">{product.category}</p>
              <div className="rating">
                {'⭐'.repeat(Math.floor(product.rating))}
                <span className="rating-text">({product.rating})</span>
              </div>
              <div className="price">${product.price.toFixed(2)}</div>
            </div>
            <button className="card-button">
              Agregar al Carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList