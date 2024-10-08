import React, { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import './CreateGroup.css'
import Input2 from "../Input/Input2";
import Button3 from "../Button/Button3";
import Button2 from "../Button/Button2";

export default function CreateGroup() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const dialog = useRef();


    const openHandler = () => {
        dialog.current.showModal();
    };

    const closeHandler = () => {
        dialog.current.close();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('name', name)
        formData.append('description', description)

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/v1.0.0/create-group', formData, {
                headers: {
                    'Authorization': `Bearer ` + localStorage.getItem("token")
                }
            });
            console.log('Group created:', response.data);
        } catch (error) {
            console.log('Error creating group:', error);
        }
    };


    return (
        <div className="dialogue-container">
            <dialog ref={dialog} className="dialogue">

                <button onClick={closeHandler} type="button" className="open">
                    Fermer
                </button>

                <h1>
                    Création de groupe !
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <Input2
                            placeHolder={'Name '}
                            reference={'name'}
                            type={'name'}
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        />

                        <Input2
                            placeHolder={'Description'}
                            reference={'password'}
                            type={'text'}
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value)
                            }}
                        /> <br />

                        <div>
                            <Button3 type={'submit'} text={'Créer'} />
                        </div>

                        <br />
                    </div>
                </form>
            </dialog>

            <Button2 text={"Creation de groupe"} onClick={openHandler} />
        </div>
    );
}

