import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <div className='header-logo'>
            <div className='logo'>
                <img src="/Images/app_gestion_de_groupe.png" alt="" width={50} />
                <h4>AGG</h4>
            </div>
        </div>
    )
}
