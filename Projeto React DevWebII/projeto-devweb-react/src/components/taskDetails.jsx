import React from "react";
import Button from "./button";
import { useParams, useHistory } from "react-router-dom";
import './taskDetails.css'

const TaskDetails = () => {
    const params = useParams();
	const history = useHistory();

	const handleBackButtonClick = () => {
		history.goBack();
	};
    
    return ( 
        <>
        <div className="back-button-container">
            <Button onClick={handleBackButtonClick}>voltar </Button>
        </div>
        <div className="task-details-container">
            <h2>{params.taskTitle}</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Vero excepturi assumenda temporibus. Minima non dolorem 
                 illum ab quos provident perspiciatis, aliquid, beatae alias 
                 laboriosam laborum, nisi officiis debitis sed doloremque.</p>
        </div>
        </>
     );
}
export default TaskDetails ;