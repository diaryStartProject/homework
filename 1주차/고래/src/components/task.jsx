import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

const Task = ({id, task, onDelete, onCheck, checkedList}) => {
    let checked = checkedList.has(String(id)) ? true : false;

    const deleteItem = () => {
        onDelete(id);
    }

    const checkItem = ({target}) => {
        checked = !checked;
        onCheck(id, target.checked);
    }
    
    return (
        <>
        <li className="taskContainer">
            <div className="task">
                <input 
                id="item" 
                name="task"
                className="checkBox"
                type="checkbox" 
                onChange={checkItem}
                checked={checked}
                />
                <label htmlFor="item" className="taskContent">{task}</label>
            </div>
            <button className="delBtn" onClick={deleteItem}>
            <FontAwesomeIcon icon={faMinusCircle}/>
            </button>
        </li>
        </>
    );
}

export default Task;
