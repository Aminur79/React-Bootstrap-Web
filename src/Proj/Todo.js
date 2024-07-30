import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Todo() {
    //hook for holding all the data
    const [todos, setTodos] = useState([]);
    //hok for getting all the data from the input field
    const [newTodo, setNewTodo] = useState();
    function Addtodo() {
        let newTodos = [...todos, { todo: newTodo.trim() }]
        setTodos(newTodos);
        setNewTodo("")
        console.log(newTodos)
    }
    function clearTodos() {
        setTodos([]);
    }

    return (
        <div>
            <div className='container'>
                <h1 className='text-center display-1'>Enter your task</h1>
                <input type='text' className='form-control ' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
                <br />
                <button className='btn btn-primary' onClick={Addtodo}>save task</button>
                <span>   </span>
                <button className='btn btn-danger' onClick={clearTodos}>clear Task</button>
                <hr />
                <table className='table'>
                    <tr>
                        <th>All Task List</th>
                    </tr>
                    {
                        todos.map((tod) => (
                            <tr>
                                <td>{tod.todo}</td>
                            </tr>
                        ))}
                </table>
            </div>

        </div>
    )
}

export default Todo