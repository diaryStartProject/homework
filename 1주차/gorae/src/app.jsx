import React, { useEffect, useState } from 'react';
import './app.css';
import Header from './components/header';
import Tasks from './components/tasks';

const App = () => {
    const [tasks, setTasks] = useState(
        localStorage.getItem(`tasks`) ?
        JSON.parse(localStorage.getItem(`tasks`))
        : []
    );
    const [checkedList, setChecked] = useState(
        localStorage.getItem(`checkedList`) ?
        new Set(localStorage.getItem('checkedList').split(',')) :
        new Set([])
    );

    const handleCheck = (id, isChecked) => {
        let updatedCheckedList = new Set([...checkedList]);
        if(isChecked){
            updatedCheckedList.add(String(id));
            setChecked(updatedCheckedList);
        }else if(updatedCheckedList.has(String(id)) && !isChecked){
            updatedCheckedList.delete(String(id));
            setChecked(updatedCheckedList);
        }
    }
    const handleAdd = (item) => {
        setTasks([...tasks, {id: Date.now(), item}]);
    }
    const handleDelete = (id) => {
        const arr = JSON.parse(localStorage.getItem(`tasks`));
        const updatedTasks = arr.filter((v)=>v.id !== id);
        setTasks([...updatedTasks]);
    }

    useEffect(() => {
        localStorage.setItem(`tasks`, JSON.stringify(tasks));
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