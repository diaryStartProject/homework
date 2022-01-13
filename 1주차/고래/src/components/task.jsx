import React from "react";

const Task = ({id, task, onDelete}) => {
    const deleteItem = () => {
        onDelete(id);
    }
    
    return (
        <>
        <li className="li">
            <div className="li-task">
                <input 
                id="item" 
                name="task" 
                type="checkbox" 
                />
                <label htmlFor="item" className="task">{task}</label>
            </div>
            <button className="delBtn" onClick={deleteItem}>
                <i className="fas fa-minus-circle"></i>
            </button>
        </li>
        </>
    );
}

export default Task;