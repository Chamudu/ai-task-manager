import { useEffect, useState } from 'react'
import './App.css'
import GradientButton from './components/GradientButton';
import Loader from './components/Loader'; 


const API_URL = `http://localhost:3000`;

function App() {

  const [message, setMessage] = useState("Loading...")
  const [tasks, setTasks] = useState([])
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editedText, setEditedText] = useState("");
  const [aiMode, setAiMode] = useState('local');

  useEffect(() => {
    fetch(`${API_URL}`)
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error("Error fetching data:", error));
    
    fetch(`${API_URL}/tasks`)
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error("Error fetching tasks", error));

  },[]) //[] means run ths only once

  const addTask = () => {
    if (!newTaskTitle) return;

    const tempTask = {
      id: Date.now(), // tempary id
      title: newTaskTitle,
      aiSuggestion: aiMode === 'smart' ? '🤔 AI is thinking...' : `Generating 
        suggestion...`,
      isLoading: true
    }

    setTasks([tempTask, ...tasks]);
    setNewTaskTitle('');

    fetch(`${API_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: tempTask.title,
        aiMode: aiMode
       })
    })

    .then(res => res.json())
    .then(savedTask => {
      setTasks(currentTasks => 
        currentTasks.map(t => 
          t.id === tempTask.id ? { ...savedTask, isLoading: false } : t
        )
      );
    })

    .catch(error => {
      console.error("Error adding task:", error);
      setTasks(currentTasks => currentTasks.filter(t => t.id !== tempTask.id));
    });
  }

  const deleteTask = (id) => {
    fetch(`${API_URL}/tasks/${id}`, {
      method: 'DELETE',
    })
    .then(() => {
      setTasks(tasks.filter(task => task.id !== id));
    })
    .catch(error => console.error("Error deleting:", error));
  }

  const startEditing = (task) => {
    setEditingId(task.id);
    setEditedText(task.title);
  }

  const saveEdit = (id) => {
    fetch(`${API_URL}/tasks/${id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({title: editedText})
    })
    .then(res => res.json())
    .then(updatedTask => {
      setTasks(tasks.map(t => t.id === id ? updatedTask : t));
      setEditingId(null);
    })
    .catch(err => console.error("Error updating:", err));
  }

  const cancelEdit = () => {
    setEditingId(null);
  }

  return (
    <div className="app-container">
      <h1>AI Task Manager</h1>
      <p>Server Status: <strong>{message}</strong></p>

      <div className="ai-mode-selector">
        <span className='ai-Mode'> AI Mode: </span>
        <div className="mode-buttons">
          <GradientButton
            onClick={()=>setAiMode('local')}
            isActive={aiMode === 'local'}
          >
            ⚡ Local AI (Fast) 
          </GradientButton>
          <GradientButton
            onClick={() => setAiMode('smart')}
            isActive={aiMode === 'smart'}
          >
            🧠 Smart AI (Gemini)
          </GradientButton>
        </div>
      </div>

      <div className="input-group">
        <input
          type='text'
          id='task-input'
          placeholder='Add anew Task...'
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask}> Add Task </button> 
      </div>

      
      <div className="task-list">
        <h2>My Tasks</h2>
        {tasks.map(task => (
          <div key = {task.id} className='task-card'>

            <div className="card-header">
              {editingId === task.id ? (
                <input
                  className='edit-input'
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') saveEdit(task.id);
                    if (e.key === 'Escape') cancelEdit();
                  }}
                  onBlur={() => saveEdit(task.id)}
                  autoFocus
                />
              ) : (
                <h3 onClick={() => startEditing(task)}>
                  {task.title}
                </h3>
              )}
              
              <button 
                className='delete-btn'
                onClick={() => deleteTask(task.id)}
              >
                ✕
              </button>

            </div>
            
            <p className={`ai-text ${task.isLoading ? 'loading' : ''}`}>
              {task.isLoading ? (
                <span className="loading-container">
                  <Loader size={0.5} />
                  <span>{task.aiSuggestion}</span>
                </span>
              ) : (
                <>✨ {task.aiSuggestion}</>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
