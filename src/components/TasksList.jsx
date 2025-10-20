import { useState, useEffect } from 'react'
import './ContentStyles.css'

const TasksList = () => {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setTasks([
        { id: 1, text: "Configurar el Service Worker", completed: true },
        { id: 2, text: "Implementar el Manifest", completed: true },
        { id: 3, text: "Diseñar interfaz responsive", completed: false },
        { id: 4, text: "Probar funcionalidad offline", completed: false }
      ])
      setLoading(false)
    }, 500)
  }, [])

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, {
        id: Date.now(),
        text: newTask,
        completed: false
      }])
      setNewTask('')
    }
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  if (loading) {
    return (
      <div className="content-section">
        <h1>Mis Tareas</h1>
        <div className="loading">Cargando tareas...</div>
      </div>
    )
  }

  return (
    <div className="content-section">
      <h1>Mis Tareas</h1>
      <p className="section-description">
        Organiza y gestiona tus tareas diarias
      </p>
      
      <div className="task-input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Agregar nueva tarea..."
          className="task-input"
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask} className="add-task-button">
          Agregar
        </button>
      </div>

      <div className="list-layout">
        {tasks.map(task => (
          <div key={task.id} className={`task-card ${task.completed ? 'completed' : ''}`}>
            <div className="task-content">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="task-checkbox"
              />
              <span className="task-text">{task.text}</span>
            </div>
            <button
              onClick={() => deleteTask(task.id)}
              className="delete-task-button"
            >
              🗑️
            </button>
          </div>
        ))}
      </div>

      <div className="tasks-stats">
        <p>
          Total: {tasks.length} | 
          Completadas: {tasks.filter(t => t.completed).length} | 
          Pendientes: {tasks.filter(t => !t.completed).length}
        </p>
      </div>
    </div>
  )
}

export default TasksList