import { useState } from "react";
import "./App.css";
import Todos from "./Todos";
import UserList from "./UserList";

function App() {
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
      if (userA > userB) {
        return 1;
      }

      return 0;
    }

    setUsers(sortedUserList);
  };
  

  return (
    <>
      <h1>Projekt</h1>
      <Todos />
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
    )
}




export default App;

