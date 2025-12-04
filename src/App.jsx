import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')
  const [title, setTitle] = useState('')

    const addTodo = () => {

      if (!todos) return;

      const newTodo = {
        title,
        text
      }
      setTodos([...todos, newTodo])
      setText('')
      setTitle('')
    }

  return (
    <>
      <h1>Projekt</h1>
      <div className='todo-list'>
        <h2>Todo-list</h2>
        <input type="text" value={title} placeholder='Titel:' onChange={(e) => setTitle(e.target.value)} />
        <input type="text" value={text} placeholder='Text:' onChange={(e) => setText(e.target.value)} />
        <button onClick={() => addTodo()}>Lägg till</button>
        <ul>
          {todos?.map(todo => (
            <div key={title}>
            <h3>{todo.title}</h3>
            <p>{todo.text}</p>
            </div>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
