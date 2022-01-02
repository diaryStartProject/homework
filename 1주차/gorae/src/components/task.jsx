const Task = ({task}) => {
    return (
        <>
        <li className="li">
            <input id="item" type="checkbox"></input>
            <label htmlFor="item" className="task">{task}</label>
        </li>
        </>
    );
}

export default Task;