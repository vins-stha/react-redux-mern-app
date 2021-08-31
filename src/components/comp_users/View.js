import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import './comp_users.css'

export default function View() {
    const [allUsers, setAllUsers] = useState('')
    const [user, setUser] = useState([])
    const [id,setId] = useState()
    // const params = useParams 
    useEffect(() => {
        var method = "get"
        var url = "https://simple-mern-redux-app.herokuapp.com//users"
        axios.get(url)
            .then((res) => {
                console.log('res=>', res.data)
                var resp = {
                    name: res.data.name,
                    city: res.data.city
                }
                console.log('resp =>', resp.name, resp.city)
                console.log('actual response =>', res.data)

                setAllUsers(res.data)

            })
            .catch((err) => { console.log('errour=>', err) })
    }, [])
    const history = useHistory
    function handleDelete(id)
    {
        console.log('ID =',id)
        axios.post('http://localhost:1000/users/delete',{id:id})
        .then((res)=>{
            alert('Deleted!!')
            window.location = '/users'
        })
        .catch((err)=>{if(err){console.log('Error',err)}})
        

    }
    const users = allUsers.length > 0 ? (allUsers.map((user, key) => {
        return (
            <tr key={user._id} style={{ border: "1px solid black", margin: "10px" }} className="tableData">
                <td scope="row">{user.name}</td>
                <td scope ="row">{user.city} </td>
                <td scope="row">

                <Link to={`/editUser/${user._id}`}>
                    <button name="edit" className="btn btn-primary" value="edit">edit</button>
                </Link>
                <button name="edit" value="edit" className="btn btn-danger" onClick={(e)=>{handleDelete(user._id)}}>Delete</button>
                </td>


            </tr>
        )
    })) : "[]"

    return (
        <div className="container">
             <h1 className="projectTitle"> MERN project</h1>
             <h3>Users</h3>
        
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>City</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {users}
                </tbody>
            </table>
        </div>
    )
}
