import React from "react";
import TaskAddForm from "./taskAddForm.jsx"

const Tasks = ({tasks, onAdd}) => {
    return (
        <>
        <TaskAddForm onAdd={onAdd}></TaskAddForm>
        <section className="tasks">
        {tasks.map((task) => {})}
        </section>
        </>
    );
}

export default Tasks;