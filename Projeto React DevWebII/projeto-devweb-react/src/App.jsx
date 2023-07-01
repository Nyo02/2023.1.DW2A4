import React, { useEffect, useState } from "react";
import "./App.css";
import "./components/tasks";
import Tasks from "./components/tasks";
import AddTask from "./components/addTask";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TaskDetails from "./components/taskDetails";
import axios from "axios";

const App = () =>   {
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

  useEffect(() => {
		const fetchTasks = async () => {
			const { data } = await axios.get(
				"https://jsonplaceholder.cypress.io/todos?_limit=10"
			);

			setTask(data);
		};

		fetchTasks();
	}, []);

  const handleTaskClick = (taskId) => {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      return task;
    });

    setTask(newTask);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTask(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTask(newTasks);
  };

  return (
    <Router>
      <div className="container">
        <Header />
        
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}
              />
            </>
          )}
        />
        <Route path="/:taskTitle" exact component = {TaskDetails}/> 
      </div>
    </Router>
  );
};

export default App;
