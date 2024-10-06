import React from 'react'
import './Sidebarright.css'
import Button2 from '../Button/Button2'
import CreateGroup from '../CreateGroup/CreateGroup'
import AddMemberGroup from '../AddMemberGroup/AddMemberGroup'

export default function Sidebarleft({ currentData }) {


    const getData = (e, id) => {
        e.preventDefault()
        currentData(id)

    }

    return (
        <div className='container-sideright'>
            <div><a href=""><img src={'/Images/profil.png'} alt="" /></a></div>
            <div className='separator'></div> <br />

            <div className='full-button'>
                <Button2 type={'submit'} text={'Tous les utilisateurs'} onClick={(e) => getData(e, 1)} />
                <br />
                <Button2 type={'submit'} text={'Tous les groupes'} onClick={(e) => getData(e, 2)} />
                <br />
                <CreateGroup />
                <br />
                <AddMemberGroup />
            </div>
        </div>
    )
}