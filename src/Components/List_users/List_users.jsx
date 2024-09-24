import React from 'react'
import './List_users.css'

export default function List_users() {
    return (
        <div className='container-list'>
            <a href="">
                <div><img src={'/Images/profil.png'} alt="" /></div>
                <div className='user-list'>
                    <h4>Inoush</h4>
                    <p>diagbadoe@gmail.com</p>
                </div>
            </a>
        </div>
    )
}
