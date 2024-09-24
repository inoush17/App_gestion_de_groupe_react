import React from 'react'
import './Sidebarleft.css'
import List_users from '../List_users/List_users'

export default function Sidebarleft() {
    return (
        <div className='container-sideleft'>
            <div className='title'><h1>Tous les utilisateurs</h1></div>
            <List_users />
        </div>
    )
}
