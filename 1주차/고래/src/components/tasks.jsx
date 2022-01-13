import React from "react";
import Task from "./task.jsx";
import TaskAddForm from "./taskAddForm.jsx"

const Tasks = ({tasks, onAdd, onDelete, onCheck, checkedList}) => {
    return (
        <>
        <TaskAddForm onAdd={onAdd}></TaskAddForm>
        <section className="tasks">
        {tasks.map((task) => (
            <Task
            key={task.id}
            id={task.id}
            task={task.item}
            onDelete={onDelete}
            onCheck={onCheck}
            checkedList={checkedList}
            />
        ))}
        </section>
        </>
    );
}

export default Tasks;