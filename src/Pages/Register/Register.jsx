import React, { useState } from 'react'
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

export default function Register() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const formData = new FormData();

        formData.set('name', name)
        formData.set('email', email)
        formData.set('password', password)
        formData.set('password_confirm', passwordConfirm)

        const response = await axios.post(
            'http://127.0.0.1:8000/api/v1.0.0/register',
            formData
        );

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
            if (response.data.data.name !== undefined) {
                toast.error(response.data.data.name[0]);
            } else if (response.data.data.email !== undefined) {
                toast.error(response.data.data.email[0]);
            } else if (response.data.data.password !== undefined) {
                toast.error(response.data.data.password[0]);
            } else if (response.data.data.passwordConfirm !== undefined) {
                toast.error(response.data.data.passwordConfirm[0]);
            }

            setIsLoading(false)

        }
    };

    return (
        <div className='login-container'>
            <ToastContainer stacked />

            <div className='login-container2'>
                <div>
                    <img src={'/Images/gestion_de_groupe.png'} alt="" />
                </div>



                <div className='login-container5'>
                    <div className='login-container3'>
                        <h3>Welcome back</h3>
                        <img src={'/Images/app_gestion_de_groupe.png'} alt="" width={50} />
                    </div>
                    <div>
                        <form action="" onSubmit={handleSubmit}>
                            <div>
                                <Input
                                    placeHolder={'Nom d\'affichage'}
                                    reference={"name"}
                                    type={"text"}
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                />
                                <Input
                                    placeHolder={"E_mail ..."}
                                    reference={"email"}
                                    type={"text"}
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                                <Input
                                    placeHolder={"Mot de passe"}
                                    reference={"password"}
                                    type={"password"}
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                />

                                {/* Afficher les données saisient dans le champ en bat de l'input
        <div>{password}</div> */}

                                <Input
                                    placeHolder={"confirmation du mot de passe"}
                                    reference={"passwordConfirm"}
                                    type={"password"}
                                    value={passwordConfirm}
                                    onChange={(e) => {
                                        setPasswordConfirm(e.target.value);
                                    }}
                                />
                            </div><br />

                            <div>
                                <Button disabled={isLoading} type={'submit'} text={isLoading ? 'Chargement ...' : 'S\'inscrire'} />
                            </div><br />
                            <div className='login-container4'>
                                <h4>Déjà inscrit.e ?</h4>
                                <Link className='link' to={'/login'}>Se connecter</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
