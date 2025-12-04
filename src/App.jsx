import { useState } from "react";
import "./App.css";
import UserList from "./UserList";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  const addTodo = () => {
    if (!todos) return;

    const newTodo = {
      title,
      text,
    };
    setTodos([...todos, newTodo]);
    setText("");
    setTitle("");
  };

  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");
  const [op, setOp] = useState(null);

  function calculate() {
    const numA = Number(a);
    const numB = Number(b);

    if (op === "+") {
      setResult(numA + numB);
    } else if (op === "-") {
      setResult(numA - numB);
    } else if (op === "*") {
      setResult(numA * numB);
    } else if (op === "/") {
      if (numB === 0) {
        setResult("Error: Division by zero");
      } else {
        setResult(numA / numB);
      }
    }
  }

  return (
    <>
      <h1>Projekt</h1>
      <div className="todo-list">
        <h2>Todo-list</h2>
        <input
          type="text"
          value={title}
          placeholder="Titel:"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={text}
          placeholder="Text:"
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => addTodo()}>Lägg till</button>
        <ul>
          {todos?.map((todo) => (
            <div key={title}>
              <h3>{todo.title}</h3>
              <p>{todo.text}</p>
            </div>
          ))}
        </ul>
      </div>

      <UserList/>

      <div>
        <h1>Calculator</h1>

        <input value={a} onChange={(e) => setA(e.target.value)} />
        <input value={b} onChange={(e) => setB(e.target.value)} />

        <div>
          <button onClick={() => setOp("+")}>+</button>
          <button onClick={() => setOp("-")}>-</button>
          <button onClick={() => setOp("*")}>*</button>
          <button onClick={() => setOp("/")}>/</button>
          <button onClick={calculate}>=</button>
        </div>

        <h2>Result: {result}</h2>
      </div>
    </>
  );
}

export default App;
