import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Route, Link, Redirect, useHistory } from 'react-router-dom'
import "./comp_users.css"

export default function Add() {
    const [user, setUser] = useState([])
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const history = useHistory()

    var method = ""
    var data = ''
    var url = ''


    function handleClick(e) {
        var data = {
            name: name,
            city: city
        }
        setUser(data)
        // https://simple-mern-redux-app.herokuapp.com/
        // axios.post('http://localhost:1000/users/addName', data)
        axios.post('https://simple-mern-redux-app.herokuapp.com//users/addName', data)

            .then((res) => {
                console.log('res=>', res.data)
                // history.go(-1)
                window.location = '/users'

            })
            .catch((err) => { console.log('errour=>', err) })
    }


    return (

        <div className="container">
            <h1 className="projectTitle">First MERN project</h1>
            <h3>Add new users</h3>
            <div className="userInputs">

                <input type="text" name="name" className="form-control" placeholder="Name" value={name} onChange={(e) => { setName(e.target.value) }}></input>
                <input type="text" name="city" className="form-control" placeholder="city" value={city} onChange={(e) => { setCity(e.target.value) }}></input>

                <input type="button" className="btn btn-success" onClick={handleClick} value="Add user" />
            </div>
        </div>

    )
}
