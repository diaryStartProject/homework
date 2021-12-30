import React, { useRef } from 'react';

const TaskAddForm = () => {
    const formRef = useRef();
    const inputRef = useRef();
    
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputRef.current.value);
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