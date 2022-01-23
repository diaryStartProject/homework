import React, { useState, useEffect } from 'react';
import './reset.css';
import './app.scss';
import Header from './components/header.jsx';
import Tasks from './components/tasks.jsx';

const App = () => {
    const [tasks, setTasks] = useState(
        localStorage.getItem('tasks') ?
        JSON.parse(localStorage.getItem('tasks'))
        : []
    );
    const [checkedList, setChecked] = useState(
        localStorage.getItem(`checkedList`) ?
        new Set(localStorage.getItem('checkedList').split(',')) :
        new Set([])
    );

    const handleAdd = (item) => {
        setTasks([...tasks, {id: Math.random() * 100000, item}]);
    }
    const handleDelete = (id) => {
        const arr = JSON.parse(localStorage.getItem('tasks'));
        const updatedTasks = arr.filter((v)=>v.id !== id);
        setTasks([...updatedTasks]);
    }
    const handleCheck = (id, isChecked) => {
        let updatedCheckedList = new Set([...checkedList]);
        if(isChecked){
            updatedCheckedList.add(String(id));
        }else if(updatedCheckedList.has(String(id)) && !isChecked){
            updatedCheckedList.delete(String(id));
        }
        setChecked(updatedCheckedList);
    }

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    },[tasks]);
    useEffect(() => {
        localStorage.setItem(`checkedList`, Array.from(checkedList));
    }, [checkedList]);

    return (
        <>
        <section className="toDoList">
            <Header></Header>
            <Tasks
            tasks={tasks}
            onAdd={handleAdd}
            onDelete={handleDelete}
            onCheck={handleCheck}
            checkedList={checkedList}
            />
        </section>
        </>
    );
}

export default App;
