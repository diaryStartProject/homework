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
        <li className="li">
            <div className="li-task">
                <input 
                id="item" 
                name="task" 
                type="checkbox" 
                onChange={checkItem}
                checked={checked}
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