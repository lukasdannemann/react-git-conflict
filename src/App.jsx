import { useState } from "react";
import "./App.css";
import Todos from "./Todos";

function App() {

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
      <Todos />
    
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

