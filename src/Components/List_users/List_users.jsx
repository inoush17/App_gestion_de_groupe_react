import React, { useEffect, useState } from 'react'
import './List_users.css'
import axios from 'axios';

export default function List_users() {

    const [activeGroup, setActiveList] = useState(null);
    const [list, setList] = useState(['']);


    const getList = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/v1.0.0/users')
            .then((res) => {
                setList(res.data.data[0]);

            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getList()
    })


    return (
        <div onClick={() => setActiveList(list)}>

            {list.map((list, index) => (
                <div key={index} className='container-list'>

                    <img src={'/Images/profil.png'} alt="" />

                    <div className='group-container'>
                        <div className='email'>{list.email}</div>
                    </div>
                </div>
            ))
            }
        </div>
    )

}
