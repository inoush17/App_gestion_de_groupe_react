import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import Sidebarright from '../../Components/Sidebarright/Sidebarright'
import Sidebarleft from '../../Components/Sidebarleft/Sidebarleft'
import Centerbar from '../../Components/Centerbar/Centerbar'
import './Dashboard.css'

export default function Dashboard() {

    const [select, setSelect] = useState([]);

    const [id, setId] = useState([])
    const handlerCurrentData = (id) => {
        setId(id)
    }

    const getData = (e, id) => {
        e.preventDefault()
        currentData(id)
    }

    const handlerSetSelect  = (data) => {
        setSelect(data)
    }

    return (
        <div className='body'>
            <Header />

            <div className='container'>
                <Sidebarleft
                    id={id}
                    setSelect={handlerSetSelect}
                />

                <Centerbar
                    select={select}
                />

                <Sidebarright currentData={handlerCurrentData} />
            </div>
        </div>
    )
}

