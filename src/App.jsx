import { useState } from "react";
import "./App.css";

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

     const userArray = [
    "NullPointerNinja",
    "AsyncAvenger",
    "ByteShiftBear",
    "StackTraceSamurai",
    "LambdaLurker",
    "GitPushGuru",
    "SyntaxSparrow",
    "DebugDruid",
    "CryptoCamel",
    "RefactorRaven",
  ];

  const [users, setUsers] = useState(userArray);
  const [username, setUsername] = useState("");

  const addUser = () => {
    setUsers([...users, username]);
    setUsername("");
  };

  const removeUser = (user) => {
    let newUserList = users.filter((u) => u !== user);
    setUsers(newUserList);
  };

  const sortUsers = () => {
    let sortedUserList = [...users].sort((a, b) => {
      const userA = a.toUpperCase();
      const userB = b.toUpperCase();
      if (userA < userB) {
        return -1;
      }
      if (userA > userB) {
        return 1;
      }

      return 0;
    });

    setUsers(sortedUserList);
  };

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
 
    
      <h1>Username app</h1>
      <input
        type="text"
        placeholder="Användarnamn"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={addUser}>Lägg till</button>
      <br /> <br />
      <h2>Användarlista</h2>
      <button onClick={() => sortUsers()}>Sortera A-Ö</button>
      <ul>
        {users.map((user) => (
          <li>
            {user}
            <button onClick={() => removeUser(user)}>Ta bort</button>
          </li>
        ))}
      </ul>
    </>
    )
}

export default App;
