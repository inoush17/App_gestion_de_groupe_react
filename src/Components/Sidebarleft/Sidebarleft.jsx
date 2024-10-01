import React from 'react'
import './Sidebarleft.css'
import List_users from '../List_users/List_users'
import List_groups from '../List_groups/List_groups'

export default function Sidebarleft(id) {

    if (!id) {

        return (
            <div>
                <p className=''>
                    Veuillez sélectionner une option !
                </p>
            </div>
        );
    }
    
    return (
        <div className='container-sideleft'>
            <div className='title'><h1>Tous les utilisateurs</h1></div>
            {id.id === 1 ? <List_users /> : <List_groups/>}
        </div>
    )
}
