import React from 'react';
import './app.css';
import Header from './components/header';
import TaskAddForm from './components/taskAddForm';


const App = () => {
    return (
        <>
        <section className="toDoList">
            <Header></Header>
            <TaskAddForm></TaskAddForm>
        </section>
        </>
    );
}

export default App;