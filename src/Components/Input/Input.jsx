import React from 'react'

export default function Input(
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
            <input
                type={type}
                value={value}
                placeholder={placeHolder}
                onChange={onChange}
                id={reference}
            />
        </div>
    )
}
