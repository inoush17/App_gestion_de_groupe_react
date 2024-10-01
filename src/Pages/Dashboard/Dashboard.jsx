import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import Sidebarright from '../../Components/Sidebarright/Sidebarright'
import Sidebarleft from '../../Components/Sidebarleft/Sidebarleft'
import Centerbar from '../../Components/Centerbar/Centerbar'
import './Dashboard.css'

export default function Dashboard() {

    const [id, setId] = useState([])
    const handlerCurrentData = (id) => {
        setId(id)
    }

    const getData = (e, id) => {
        e.preventDefault()
        currentData(id)
    }

    return (
        <div className='body'>
            <Header />

            <div className='container'>
                <Sidebarleft
                    id={id}
                />

                <Centerbar />

                <Sidebarright currentData={handlerCurrentData} />
            </div>
        </div>
    )
}

