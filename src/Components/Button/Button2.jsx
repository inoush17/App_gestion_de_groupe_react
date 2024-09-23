import React from 'react'

export default function Button2({ text, onClick, type ,disabled}) {
    return (
        <div>
            <button className='button2' 
            onClick={onClick}  
            type={type} 
            disabled={disabled}
            typeof='submit'>{text}</button>
        </div>
    )
}
