import { useState, useEffect } from 'react'
import './ContentStyles.css'

const NewsList = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setNews([
        {
          id: 1,
          title: "Nueva Actualización de React 18",
          excerpt: "Descubre las nuevas características y mejoras de rendimiento...",
          date: "2024-01-15",
          author: "Equipo React",
          category: "Tecnología",
          readTime: "3 min"
        },
        {
          id: 2,
          title: "El Futuro de las PWAs",
          excerpt: "Cómo las aplicaciones web progresivas están revolucionando...",
          date: "2024-01-14",
          author: "Tech Insights",
          category: "Desarrollo Web",
          readTime: "5 min"
        },
        {
          id: 3,
          title: "Vite 5.0 Lanzado",
          excerpt: "La nueva versión del build tool incluye mejoras significativas...",
          date: "2024-01-13",
          author: "Vite Team",
          category: "Herramientas",
          readTime: "4 min"
        },
        {
          id: 4,
          title: "JavaScript 2024: Nuevas Características",
          excerpt: "Un vistazo a las propuestas y características planeadas...",
          date: "2024-01-12",
          author: "JS Weekly",
          category: "Programación",
          readTime: "6 min"
        }
      ])
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div className="content-section">
        <h1>Últimas Noticias</h1>
        <div className="loading">Cargando noticias...</div>
      </div>
    )
  }

  return (
    <div className="content-section">
      <h1>Últimas Noticias</h1>
      <p className="section-description">
        Mantente actualizado con las últimas noticias de tecnología
      </p>
      
      <div className="list-layout">
        {news.map(article => (
          <article key={article.id} className="news-card">
            <div className="news-header">
              <span className="news-category">{article.category}</span>
              <span className="news-date">{article.date}</span>
            </div>
            <h3>{article.title}</h3>
            <p className="news-excerpt">{article.excerpt}</p>
            <div className="news-footer">
              <span className="news-author">Por {article.author}</span>
              <span className="read-time">{article.readTime} lectura</span>
            </div>
            <button className="news-button">
              Leer Más
            </button>
          </article>
        ))}
      </div>
    </div>
  )
}

export default NewsList