import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Route, Redirect, useParams,useHistory } from 'react-router-dom'

export default function Edit() {
    const [user, setUser] = useState([])
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const params = useParams()
    const history = useHistory()
    useEffect(() => {
       console.log('params::',params)
       var data = params.id
        axios.post('https://simple-mern-redux-app.herokuapp.com//users/findUser',{user_id: params.id})
        .then((res) => {
            console.log('Edit response=>',res.data[0].name)
            setName(res.data[0].name)
            setCity(res.data[0].city)

        })
        .catch((err) => { console.log('errour=>', err) })
       
    }, [])

    function handleClick(e) {
        var data = {
            name: name,
            city: city,
            id: params.id
        }
        setUser(data)

        axios.post('http://localhost:1000/users/updateUser', data)
            .then((res) => {
                console.log('res=>',res.data)
                history.go(-1)

            })
            .catch((err) => { console.log('errour=>', err) })    
        }


    return (
        <div className="container">
            <h1 className="projectTitle">First MERN project</h1>
            <h3>Edit</h3>
            <div className="userInputs">
                <span className="pre"><pre>Previously: {name}</pre></span>
                <input type="text" name="name" className="form-control" placeholder="Name" value={name} onChange={(e) => { setName(e.target.value) }}></input>
                <span className="pre"><pre>Previously: {city}</pre></span>
                <input type="text" name="city" className="form-control" placeholder="city" value={city} onChange={(e) => { setCity(e.target.value) }}></input>

                <input type="button" className="btn btn-success" onClick={handleClick} value="Update" />
            </div>
        </div>
    )
}
