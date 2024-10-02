import React, { useState } from 'react'
import './Centerbar.css'
import Input3 from '../Input/Input3';

export default function Centerbar({ select }) {

    const [file, setFile] = useState('')


    return (
        <div className='container-file222'>
            <div className='group-flex'>
                <img src={'/Images/profil.png'} alt="" />
                <div>
                    <div>{select.name}</div>
                    <div>{select.description}</div>
                </div>
            </div>

            <form action="" className='file-small'>
                <Input3
                    label={<img src='/Images/plus-circlé.png' width={30}/>}
                    placeHolder={''}
                    reference={'file'}
                    type={'file'}
                    value={file}
                    onChange={(e) => {
                        setFile(e.target.value)
                    }}
                />
                <img src='/Images/avion.png' alt="" width={25}/>
            </form>
        </div>
    )
}
