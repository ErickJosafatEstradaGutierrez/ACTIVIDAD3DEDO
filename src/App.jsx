import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import ProductList from './components/ProductList'
import NewsList from './components/NewsList'
import TasksList from './components/TasksList'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('products')
  const [isOnline, setIsOnline] = useState(navigator.onLine)

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  const renderContent = () => {
    switch (currentView) {
      case 'products':
        return <ProductList />
      case 'news':
        return <NewsList />
      case 'tasks':
        return <TasksList />
      default:
        return <ProductList />
    }
  }

  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar currentView={currentView} onViewChange={setCurrentView} />
        <main className="main-content">
          <div className={`connection-status ${isOnline ? 'online' : 'offline'}`}>
            {isOnline ? '🟢 Conectado' : '🔴 Sin conexión - Modo offline'}
          </div>
          {renderContent()}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App