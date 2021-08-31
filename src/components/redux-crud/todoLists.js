import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function TodoLists() {
    const selector = useSelector(store => store)
    const dispatch = useDispatch()
    const taskLists = selector.tasks
    const [display, setDisplay] = useState('none')
    const [updatedTask,setUpdatedTask] = useState('')

    function handleEdit(task,key)
    {
        setDisplay('inline')
        
    }
    function deleteItem(task,key)
    {
        console.log('delete=>',task,key)
        dispatch({type:"DELETE_TASK",payload:task})
    }
    function updateItem(task)
    {
        setDisplay('none')
        console.log('old = ', task,'new',updatedTask)
        dispatch({type:"UPDATE_TASK", payload:{old:task, updated:updatedTask}})
    }

    const item = taskLists.map((task, key) => {
        return (
            <div className="item_container" >
                <div className="item" >
                    <h5 className="taskname">{task}</h5>

                    <input type="text" className="form-control editBox" style={{display:display}}
                             onChange={(e)=>{setUpdatedTask(e.target.value)}}></input>

                    <button className="btn btn-primary updateButton" style={{display:display}} onClick={(e)=>{updateItem(task)}}>Update</button>
                  
                </div>
                <div className="item_controller">
                    <button className="btn btn-danger" style={{marginRight:"0.5rem"}}onClick={(e)=>{deleteItem(task,key)}}>Delete</button>
                    <button className="btn btn-primary" onClick={(e)=>{handleEdit(task,key)}}>Edit</button>
                </div>
            </div>


        )
    })
    return (
        <div className="taskList_container">
           

            {item}


        </div>
    )
}
