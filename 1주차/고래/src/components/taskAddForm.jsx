import React from 'react';
import { useRef } from 'react';

const TaskAddForm = ({onAdd}) => {
    const formRef = useRef();
    const inputRef = useRef();
    
    const onSubmit = (event) => {
        event.preventDefault();
        const item = inputRef.current.value;
        item && onAdd(item);
        formRef.current.reset();
    };

    return (
        <form ref={formRef} className="addForm" onSubmit={onSubmit}>
            <input ref={inputRef} className="input" name="input" type="text" placeholder="할 일을 입력하세요"/>
            <button className="plusBtn">
                <i className="fas fa-plus-circle"></i>
            </button>
        </form>
    )
}

export default TaskAddForm;