import Task from "./task";
import TaskAddForm from "./taskAddForm"

const Tasks = ({tasks, onAdd}) => {
    return (
        <>
        <TaskAddForm onAdd={onAdd}></TaskAddForm>
        <section className="tasks">
        {tasks.map((task) => (
            <Task key={task.id} task={task.item}></Task>
        ))}
        </section>
        </>
    );
}

export default Tasks;