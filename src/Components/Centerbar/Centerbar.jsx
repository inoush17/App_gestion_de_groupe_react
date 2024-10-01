import React, { useState } from 'react'
import './Centerbar.css'
import Input3 from '../Input/Input3';

export default function Centerbar() {

    const [file, setFile] = useState('')


    return (
        <div className='container-file'>

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
