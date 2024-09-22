import React, { useState } from 'react'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import axios from 'axios'

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

            localStorage.setItem('token', authTk)

            setTimeout(function () {
                navigate('/dashboard')
            }, 3000);
            console.log(response.data)

        } else {
            toast.error("email ou mot de passe incorrect")
            setIsLoading(false)

        }
    };

    return (
        <div>
            <ToastContainer />
            <div>
                <div>
                    <img src={'/Images/gestion_de_groupe.png'} alt="" />
                </div>
                <div>
                    <div>
                        <h3>Welcome back</h3>
                        <img src={'/Images/app_gestion_de_groupe.png'} alt="" width={30} />
                    </div>
                    <form onSubmit={handleSubmit}>
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
                        /> <br />

                        <div>
                            <Button disabled={isLoading} type={'submit'} text={isLoading ? 'Chargement ...' : 'Se connecter'} />
                        </div><br />
                        <div>
                            <h4>Pas encore inscrit.e ?</h4>
                            <Link className='link' to={'/register'}>S'inscrire</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
