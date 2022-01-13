import React, { useState, useEffect } from 'react';
import './app.css';
import Header from './components/header.jsx';
import Tasks from './components/tasks.jsx';

const App = () => {
    const [tasks, setTasks] = useState(
        localStorage.getItem(`tasks`) ?
        JSON.parse(localStorage.getItem(`tasks`))
        : []
    );

    const handleAdd = (item) => {
        setTasks([...tasks, {id: Date.now(), item}]);
    }

    useEffect(() => {
        localStorage.setItem(`tasks`, JSON.stringify(tasks));
    },[tasks]);

    return (
        <>
        <section className="toDoList">
            <Header></Header>
            <Tasks
            tasks={tasks}
            onAdd={handleAdd}
            />
        </section>
        </>
    );
}

export default App;