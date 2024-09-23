import React from 'react'
import './Sidebarright.css'
import Button2 from '../Button/Button2'

export default function Sidebarleft() {
    
    return (
        <div className='container-sideright'>
            <div><a href=""><img src={'/Images/user.png'} alt="" width={50} /></a></div>
            <div className='separator'></div> <br />
            <div className='full-button'>
                <Button2 type={'submit'} text={'Tous les utilisateurs'} /> <br />
                <Button2 type={'submit'} text={'Tous les groupes'} /> <br />
                <Button2 type={'submit'} text={'Nouvel groupe'} />
            </div>
        </div>
    )
}
