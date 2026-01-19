import { useEffect, useState } from 'react'
import './App.css'


function App() {

  const [message, setMessage] = useState("Loading...")
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000')
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error("Error fetching data:", error));
    
    fetch('http://localhost:3000/tasks')
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error("Error fetching tasks", error));

  },[]) //[] means run ths only once

  return (
    <div className="app-container">
      <h1>AI Task Manager</h1>
      <p>Server Status: <strong>{message}</strong></p>

      
      <div className="task-list">
        <h2>My Tasks</h2>
        {tasks.map(task => (
          <div key = {task.id} className='task-card'>
            <h3>{task.title}</h3>
            <p className='ai-text'>✨ {task.aiSuggestion}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
