import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'
import axios from 'axios'

export default function ForgottenPassword() {
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const formData = new FormData();

        formData.set('email', email)

        const response = await axios.post('http://127.0.0.1:8000/api/v1.0.0/forgotten-password', formData)


        if (response.data.success) {
            toast.success(response.data.message)
            setIsLoading(false)

            const authTk = response.data.data[0].token

            localStorage.setItem('token', authTk)

            setTimeout(function () {
                navigate('/otpcode')
            }, 3000);
            console.log(response.data)

        } else {
            toast.error("email invalide")
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

                        <div>
                            <Button disabled={isLoading} type={'submit'} text={isLoading ? 'Chargement ...' : 'Soumettre'} />
                        </div><br />
                    </form>
                </div>
            </div>
        </div>
    )
}
