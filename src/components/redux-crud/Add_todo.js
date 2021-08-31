import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './redux_todo.css'

export default function Add_todo() {
    const [task, setTask] = useState('')
    const dispatch = useDispatch()
    const taksObj = useSelector(store=>store)
    function add()
    {
        dispatch({type:"ADD_TASK", payload:task})
        console.log(taksObj.tasks)
    }
    function remove()
    {

    }
    return (
        <div className="addTask row justify-content-center">
            <h2>Add new task</h2>
            <div className="add-controls">

            <input type="text" className="form-control" placeholder = "Task" value={task} onChange={(e)=>{setTask(e.target.value)}}></input>
        
            <button className="btn btn-primary Add" onClick={add}>Add</button>
            </div>
            
            
        </div>
    )
}
