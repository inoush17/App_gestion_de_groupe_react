import React, { useRef, useState } from "react";
import Input2 from "../Input/Input2";
import Button3 from '../Button/Button3'
import Button2 from "../Button/Button2";

export default function CreateMember() {
    const [email, setEmail] = useState('')
    // const [group_id, setGroup_id] = useState('')

    const dialog = useRef();


    const openHandler = () => {
        dialog.current.showModal();
    };

    const closeHandler = () => {
        dialog.current.close();
    };



    return (
        <div className="dialogue-container">

            <dialog ref={dialog} className="dialogue">

                <button onClick={closeHandler} type="button" className="open">
                    Fermer
                </button>

                <h1>
                    Nouveau Membre !
                </h1>

                <form action="">
                    <div>
                        <Input2
                            placeHolder={'Email'}
                            reference={'email'}
                            type={'email'}
                            value={email}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        /> <br />

                        <div>
                            <Button3 type={'submit'} text={'Créer'} />
                        </div>

                        <br />
                    </div>
                </form>
            </dialog>

            <Button2 text={"Nouveau membre"} onClick={openHandler} />
        </div>
    );
}
