import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, addToList] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    addToList((initialItem) => {
      return [...initialItem, inputText];
    });
    setInputText("");
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      addItem();
    }
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          placeholder="What's on your to-do list today?"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={inputText}
        />
        <button type="submit" onClick={addItem}>
          Add
        </button>
        <div>
          <ul>
            {items.map((toDoItem) => (
              <li>{toDoItem}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
