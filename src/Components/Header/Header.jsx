import React, { useState } from 'react'
import './Header.css'
import Button4 from '../Button/Button4'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Header() {

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const token = localStorage.getItem('token')

    const handleSubmit = async (e) => {

        setIsLoading(true)

        const response = await axios.get(
            'http://127.0.0.1:8000/api/v1.0.0/logout',
            {headers: {'Authorization': 'Bearer ' + token}}
        )

        if (response.data.success) {
            navigate('/')
            setIsLoading(false)
        }else {
            toast.error(response.data.success)
            setIsLoading(false)
        }
    };

    return (
        <div className='header-logo'>
            <div className='logo'>
                <img src="/Images/app_gestion_de_groupe.png" alt="" width={50} />
                <h4>A_G_G</h4>
            </div>

            <Button4
                disabled={isLoading}
                type={"submit"}
                text={isLoading ? 'Chargement ...' : 'Se déconnecter'}
                onClick={handleSubmit}
            />
            
        </div>
    )
}
