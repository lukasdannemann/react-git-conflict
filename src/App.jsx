import { useState } from "react";
import "./App.css";

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

  return (
    <>
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
  );
}

export default App;
