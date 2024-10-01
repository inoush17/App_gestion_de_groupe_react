import React from 'react'

export default function Button3({ text, onClick, type ,disabled}) {
    return (
        <div>
            <button className='button3' 
            onClick={onClick}  
            type={type} 
            disabled={disabled}
            typeof='submit'>{text}</button>
        </div>
    )
}
