import React, { useState } from "react";
import "./App.css";
import "./components/tasks";
import Tasks from "./components/tasks";
import AddTask from "./components/addTask";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [tasks, setTask] = useState([
    {
      id: "1",
      title: "estudar",
      completed: false,
    },
    {
      id: "2",
      title: "regar plantas",
      completed: true,
    },
  ]);

const handleTaskClick = (taskId)=>{
    const newTask = tasks.map((task)=>{
      if(task.id === taskId) return {...task, completed: !task.completed}
      return task;
    })

    setTask(newTask);
};

const handleTaskAddition = (taskTitle) =>{
  const newTasks = [...tasks, {
    title: taskTitle,
    id: uuidv4(),
    completed: false,  
  }]

  setTask(newTasks);

}

  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick} />
      </div>
    </>
  );
};

export default App;
