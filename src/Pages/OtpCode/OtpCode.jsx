import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

export default function OtpCode() {
    const [OtpCode, setOtpCode] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const params = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const formData = new FormData();

        formData.set('code', OtpCode)
        formData.set("email", params.email);

        const response = await axios.post(
            'http://127.0.0.1:8000/api/v1.0.0/otp-code', 
            formData);

        if (response.data.success) {
            toast.success(response.data.message)
            setIsLoading(false)

            const authTk = response.data.data[0].token

            localStorage.setItem('token', authTk)

            setTimeout(function () {
                navigate('/newpassword')
            }, 3000);
            console.log(response.data)

        } else {
            toast.error("code invalide")
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
                        <Input
                            placeHolder={' Otp_code '}
                            reference={'otp'}
                            type={'text'}
                            value={OtpCode}
                            onChange={(e) => {
                                setOtpCode(e.target.value)
                            }}
                        /> <br />

                        <div>
                            <Button disabled={isLoading} type={'submit'} text={isLoading ? 'Chargement ...' : 'Soumettre'} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
