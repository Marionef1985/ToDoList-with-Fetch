import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
  const [taskState, setTaskState] = useState([]);
  const theTaskList = [
    <ul>
      <li>hola</li>
      <li>tu</li>
	  <li>tu</li>
	  <li>tu</li>
    </ul>,
  ];

  const addTask = () => {
    let newTask = document.getElementById("list").value;
    theTaskList.push(newTask);
    setTaskState(theTaskList);
    return false;
  };

  /*const addTask = () => {

	<form id="CreateForm" action="/create" method="post">
    <input type="text" name="foo" />
</form>

		let task = document.getElementById("#task");
		
}*/

  return (
    <div className="text-center">
      <h1 className="text-center mt-5">todos</h1>
      <form id="taskListForm">
        <label>
          <input type="text" name="name" />
        </label>
      </form>
      <div id="list">{taskState}</div>
      <button
        type="submit"
        //form="taskListForm"
        onClick={() => {
          addTask();
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Home;
