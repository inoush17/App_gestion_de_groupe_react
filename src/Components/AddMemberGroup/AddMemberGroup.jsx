import React, { useRef, useState } from "react";
import Input2 from "../Input/Input2";
import Button3 from '../Button/Button3'
import Button2 from "../Button/Button2";
import axios from "axios";

export default function AddMemberGroup({ selectGroup }) {

    const [inviteEmail, setInviteEmail] = useState('')

    const dialog = useRef();


    const openHandler = () => {
        dialog.current.showModal();
    };

    const closeHandler = () => {
        dialog.current.close();
    };

    const addMember = async (e) => {

        e.preventDefault();
        const formData = new FormData();

        formData.set('email', inviteEmail)
        const group_id = localStorage.getItem('group_id')
        console.log(group_id);
        console.log(inviteEmail);
        

        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/v1.0.0/add-member/${group_id}`, formData, {
                headers: {
                    'Authorization': `Bearer ` + localStorage.getItem("token")
                }
            });
            console.log('member Add:', response);
        } catch (error) {
            console.log('Error member Add:', error);
        }
    };



    return (
        <div className="dialogue-container">

            <dialog ref={dialog} className="dialogue">

                <button onClick={closeHandler} type="button" className="open">
                    Fermer
                </button>

                <h1>
                    Ajout au groupe et Invitation !
                </h1>

                <form onSubmit={addMember}>
                    <div>
                        <Input2
                            placeHolder={'Email'}
                            reference={'inviteEmail'}
                            type={'email'}
                            value={inviteEmail}
                            onChange={(e) => {
                                setInviteEmail(e.target.value)
                            }}
                        /> <br />

                        <div>
                            <Button3 type={'submit'} text={'Ajouter'} />
                        </div>

                        <br />
                    </div>
                </form>
            </dialog>

            <Button2 text={"Ajout de membre aux groupes"} onClick={openHandler} />
        </div>
    );
}
