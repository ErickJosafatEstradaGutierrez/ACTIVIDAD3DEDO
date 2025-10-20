const Sidebar = ({ currentView, onViewChange }) => {
  const menuItems = [
    { id: 'products', label: 'Productos', icon: '🛍️' },
    { id: 'news', label: 'Noticias', icon: '📰' },
    { id: 'tasks', label: 'Tareas', icon: '✅' }
  ]

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {menuItems.map(item => (
          <button
            key={item.id}
            className={`nav-item ${currentView === item.id ? 'active' : ''}`}
            onClick={() => onViewChange(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar