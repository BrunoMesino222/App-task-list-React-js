import React from 'react';
import "../Styles/Task.css";
import { FcEmptyTrash } from "react-icons/fc";

function Task({ id, text, complete, completeTask, deleteTask }){
  return (
    <div className={complete ? "taskCont complete" : "taskCont"}>
        <div 
            className='taskText'
            onClick={() => completeTask(id)}>
            {text}
        </div>
        <div className='taskIconCont'
            onClick={() => deleteTask(id)}>
            < FcEmptyTrash
            className='taskIcon' />
        </div>
    </div>
  );}

export default Task;