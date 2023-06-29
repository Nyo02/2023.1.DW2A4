import React from "react";
import Task from "./task";

const Tasks = ({tasks, handleTaskClick}) =>{
    return (
        <>
        {tasks.map((task) =>(
            <Task task={task} handleTaskClick ={handleTaskClick}/>
        )

        )}
        </>
    );
};

export default Tasks;