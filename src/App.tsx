import { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState(["Diego", "Rodz", "Mayk"]);

  function addToList() {
    setList((state) => [...state, newItem]);
  }
  return (
    <>
      <input
        type="text"
        placeholder="Novo item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      {/* <h2>Hello World</h2> */}
      <button onClick={addToList}>Adicionar</button>

      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
