import React, { useState } from 'react'

import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios'
import './Login.css'

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const formData = new FormData();

        formData.set('email', email)
        formData.set('password', password)

        const response = await axios.post('http://127.0.0.1:8000/api/v1.0.0/login', formData)


        if (response.data.success) {
            toast.success(response.data.message)
            setIsLoading(false)

            const authTk = response.data.data[0].token
            const userId = response.data.data[0].id
            console.log(response.data.data[0].token)

            localStorage.setItem('token', authTk)
            localStorage.setItem('user_id', userId)

            setTimeout(function () {
                navigate('/dashboard')
            }, 3000);
            console.log(response.data)

        } else {
            toast.error("email ou mot de passe incorrect")
            setIsLoading(false)

        };
    }

    return (
        <div className='login-container'>
            <ToastContainer />
            <div className='login-container2'>
                <div>
                    <img src={'/Images/gestion_de_groupe.png'} alt="" />
                </div>


                <div className='login-container5'>
                    <div className='login-container3'>
                        <h3 className='login-title'>Welcome back</h3>
                        <img src={'/Images/app_gestion_de_groupe.png'} alt="" width={50} />
                    </div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <Input
                                    placeHolder={'E_mail '}
                                    reference={'email'}
                                    type={'email'}
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                />

                                <Input
                                    placeHolder={'Mot de passe '}
                                    reference={'password'}
                                    type={'password'}
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                />
                            </div>
                            <br />

                            <div>
                                <Button disabled={isLoading} type={'submit'} text={isLoading ? 'Chargement ...' : 'Se connecter'} />
                            </div><br />
                            <div>
                                <div className='login-container4'>
                                    <h4>Pas encore inscrit.e ?</h4>
                                    <Link className='link' to={'/register'}>S'inscrire</Link>
                                </div>
                                <div className='login-container4'>
                                    <h4>Mot de passe oublié ?</h4>
                                    <Link className='link' to={'/forgottenpassword'}> Réinitialisez-le</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
