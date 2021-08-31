import React from 'react'
import boot from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useSelector } from 'react-redux'
import './redux_todo.css'

export default function Comp_todo() {
    const todoSelector = useSelector(store => store)
    return (

        <div className="contents">
            <h2>Project : React-Redux Todo List</h2>
            <div className="todListCount">

                <h2>Number of tasks in the lists : {todoSelector.tasks.length} </h2>
                
            </div>
        </div>
    )
}
