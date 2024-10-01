import React from 'react'
import './Input.css'
import { Input } from '@mui/material'

export default function Input2(
    {
        value,
        onChange,
        placeHolder,
        type,
        label,
        reference
    }) {
    return (
        <div>
            <label htmlFor={reference}>{label}</label><br />
            <input className='input-create'
                type={type}
                value={value}
                placeholder={placeHolder}
                onChange={onChange}
                id={reference}
            />
        </div>
    )
}
