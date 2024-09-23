import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'
import axios from 'axios'
import { ToastContainer } from 'react-toastify'

export default function NewPassword() {
    const [newpassword, setNewPassword] = useState('')
    const [newpasswordconfirm, setNewPasswordConfirm] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const formData = new FormData();

        formData.set('newpassword', newpassword)
        formData.set('new_password_confirm', newpasswordconfirm)

        const response = await axios.post('http://127.0.0.1:8000/api/v1.0.0/new-password', formData)


        if (response.data.success) {
            toast.success(response.data.message)
            setIsLoading(false)

            const authTk = response.data.data[0].token

            localStorage.setItem('token', authTk)

            setTimeout(function () {
                navigate('/login')
            }, 3000);
            console.log(response.data)

        } else {
            toast.error("les deux mots de passe ne sont pas identiques")
            setIsLoading(false)

        }
    };

    return (
        <div className='login-container'>
            <ToastContainer />
            <div className='login-container2'>
                <div>
                    <img src={'/Images/gestion_de_groupe.png'} alt="" />
                </div>
                <div className='login-container5'>
                    <div className='login-container3'>
                        <h3>Welcome back</h3>
                        <img src={'/Images/app_gestion_de_groupe.png'} alt="" width={50} />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Input
                                placeHolder={'Nouveau mot de  passe'}
                                reference={'newpassword'}
                                type={'password'}
                                value={newpassword}
                                onChange={(e) => {
                                    setNewPassword(e.target.value)
                                }}
                            /> <br />
                            <Input
                                placeHolder={'Confirmation de mot de passe'}
                                reference={'newpasswordconfirm'}
                                type={'password'}
                                value={newpasswordconfirm}
                                onChange={(e) => {
                                    setNewPasswordConfirm(e.target.value)
                                }}
                            /> <br />
                        </div>

                        <div>
                            <Button disabled={isLoading} type={'submit'} text={isLoading ? 'Chargement ...' : 'Soumettre'} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
