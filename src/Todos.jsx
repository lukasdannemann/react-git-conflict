import { useState } from "react"

const Todos = () => {

    const [todos, setTodos] = useState([])
    const [text, setText] = useState('')
    const [title, setTitle] = useState('')

    const addTodo = () => {

        if (!title || !text) return;

        const newTodo = {
            title,
            text
        }
        setTodos([...todos, newTodo])
        setText('')
        setTitle('')
    }

    return(
        <div className='todo-list'>
        <h2>Todo-list</h2>
        <input type="text" value={title} placeholder='Titel:' onChange={(e) => setTitle(e.target.value)} />
        <input type="text" value={text} placeholder='Text:' onChange={(e) => setText(e.target.value)} />
        <button onClick={() => addTodo()}>Lägg till</button>

          {todos?.map(todo => (
            <>
            <h3>{todo.title}</h3>
            <p>{todo.text}</p>
            </>
          ))}
      </div>
    )
}
export default Todos