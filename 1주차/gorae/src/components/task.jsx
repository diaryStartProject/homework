const Task = ({id, task, onDelete}) => {
    const deleteItem = () => {
        onDelete(id);
    }
    
    return (
        <>
        <li className="li">
            <div className="li-task">
                <input id="item" type="checkbox"></input>
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