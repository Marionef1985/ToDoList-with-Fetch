import React, { useState } from "react";

//include images into your bundle

//create your first component

const Home = () => {
  const [state, setState] = useState(" ");

  async function updateState(evento) {
    const httpResponse = await fetch(
      "https://jsonplaceholder.typicode.com/todos",
      {
        method: "GET",
      }
    );
    const postList = await httpResponse.json();
    setState(postList);
  }

  return (
    <div className="container">
      <h1>My Todos</h1>
      {state.map(post=> (
        <p>{post.title}</p>
      ))}
      <button onClick={(evento) => updateState(evento)}>Click Me!</button>
      <div>{state.length} task</div>
    </div>
  );
};
export default Home;
