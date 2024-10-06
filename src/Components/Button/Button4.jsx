import React from 'react'

export default function Button4({ text, onClick, type ,disabled}) {
    return (
        <div>
            <button className='button4' 
            onClick={onClick}  
            type={type} 
            disabled={disabled}
            typeof='submit'>{text}</button>
        </div>
    )
}
