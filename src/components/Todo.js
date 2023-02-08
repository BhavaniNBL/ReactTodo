import React, { useState } from 'react';
import Todolist from './Todolist';

function Todo(props) {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [editId, setEditId] = useState(0);

    const handleSubmit = (e) => {
      setTodo(e.target.value);
    };
    const editHandler = (indexValue) => {
        const editTodo = todos.find((todo, index) => index === indexValue);
        setTodos(editTodo);
        setEditId(indexValue);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(todo);
        const newTodos = [...todos, todo];
        setTodos(newTodos);
        setTodo("");
    }
    const deleteHandler = (indexvalue) => {
        const newTodos = todos.filter((todo, index) => index !== indexvalue);
        setTodos(newTodos); 
    }

    return (
        <div>
           <div>
            <form onSubmit={submitHandler}>
            <input type="text" value={todo} onChange={handleSubmit}/>
            <button type="submit">Go</button>
            </form>
            </div>
            <div>
             <Todolist todolist={todos} deleteHandler={deleteHandler} editHandler={editHandler}></Todolist>
            </div> 
        </div>
    );
}

export default Todo;