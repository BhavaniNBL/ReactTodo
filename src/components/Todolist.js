import React from 'react';

function Todolist(props) {
    console.log(props);
    return (
        <div>
            {props.todolist.map((todo, index) => 
                <div key={index}>
                    <h5>{todo} &nbsp; <button onClick={() => props.editHandler(index)}>Edit</button> &nbsp; <button onClick={()=>props.deleteHandler(index)}>Delete</button></h5>
                </div>
            )}
        </div>
    );
}

export default Todolist;