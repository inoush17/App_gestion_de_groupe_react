

import { colors } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './List_groups.css'
import axios from 'axios';
import { Await } from 'react-router-dom';
import AddMemberGroup from '../AddMemberGroup/AddMemberGroup';

export default function List_groups({ setSelect }) {
    const [activeGroup, setActiveGroup] = useState(null);
    const [groups, setGroups] = useState(['']);


    const getGroups = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/v1.0.0/groups', {
            headers: { 'Authorization': `Bearer ` + localStorage.getItem('token') }
        })
            .then((res) => {
                setGroups(res.data.data[0]);


            })
            .catch((err) => {
                console.log(err);
            })
    }

    const onGroupClick = (group) => {
        setSelect(() => group)
        localStorage.setItem('group_id', group.id)
    }

    useEffect(() => {
        getGroups()
    })


    return (
        <div>
            {groups.map((group, index) => (
                <div
                    key={index}
                    className='container-list'
                    onClick={() => onGroupClick(group)}
                >
                    <div>
                        <img src={'/Images/profil.png'} alt="" />
                    </div>

                    <div className='group-container'>
                        <div className='name'>{group.name}</div>
                        <div>{group.description}</div>
                    </div>
                </div>
            ))

            }
        </div>
    )
}