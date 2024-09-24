import React from 'react'
import './Sidebarright.css'
import Button2 from '../Button/Button2'
import { Link } from 'react-router-dom'

export default function Sidebarleft() {

    return (
        <div className='container-sideright'>
            <div><a href=""><img src={'/Images/user.png'} alt="" width={50} /></a></div>
            <div className='separator'></div> <br />

            <div className='full-button'>
                <Link to="">
                    <Button2 type={'submit'} text={'Tous les utilisateurs'} />
                </Link><br />
                <Link to="">
                    <Button2 type={'submit'} text={'Tous les groupes'} />
                </Link><br />
                <Link to="">
                    <Button2 type={'submit'} text={'Création de groupe'} />
                </Link><br />
                <Link to="">
                    <Button2 type={'submit'} text={'Nouveau membre'} />
                </Link>
            </div>
        </div>
    )
}
{/* <div className="buttons">
    <Link to="/users">
        <button className="btn">Tous les utilisateurs inscrits</button>
    </Link>
    <Link to="/groups">
        <button className="btn">Tous les groupes</button>
    </Link>
    <Link to="/new-group">
        <button className="btn">Nouvel groupe</button>
    </Link>
</div> */}