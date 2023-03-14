import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="container">
      <h1>My Todos</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            value={inputValue}
            onKeyDown={(e) => {
              console.log("key was pressed", e.key);
              if (e.key === "Enter") {
                console.log("Enter was pressed");
                setTodos(todos.concat(inputValue));
                setInputValue("");
              }
            }}
            placeholder="What do you need to do?"
          ></input>
        </li>
        {todos.map((item, index) => (
          <li>
            <div className="listItems">{item}</div>{" "}
            <button
              onClick={() => {
                setTodos(
                  todos.filter((t, currentIndex) => {
                    index !== currentIndex
                  })
                );
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </li>
        ))}
      </ul>
      <div>{todos.length} task</div>
    </div>
  );
};
export default Home;
