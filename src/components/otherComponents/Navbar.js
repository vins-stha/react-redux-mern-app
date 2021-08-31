import React, { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
    const [navItems, setNavItems] = useState(['toDo', 'Contact','Products','Genre','Popularity', 'Popularity','AddUser','Users'])
    var items = navItems.map((navItem,key)=>{
        return <a key={navItem.id}className="navItems" href={`/${navItem}`}>{navItem}</a>
    })

    return (
        <div className="row justify-content-center">
            <div className="nav">
                {items}
             
            </div>

        </div>
    )
}
