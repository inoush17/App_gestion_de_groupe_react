import React from 'react'
import Header from '../../Components/Header/Header'
import Sidebarright from '../../Components/Sidebarright/Sidebarright'
import './Dashboard.css'
import Sidebarleft from '../../Components/Sidebarleft/Sidebarleft'

export default function Dashboard() {
    return (
        <div className='body'>
            <Header />

            <div className='container'>
                <Sidebarleft />

                <div className='container-file'></div>

                <Sidebarright />
            </div>
        </div>
    )
}

