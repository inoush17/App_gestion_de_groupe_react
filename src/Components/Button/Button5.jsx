import React from 'react'

export default function Button5({ text, onClick, type ,disabled}) {
    return (
        <div>
            <button className='button5' 
            onClick={onClick}  
            type={type} 
            disabled={disabled}
            typeof='submit'>{text}</button>
        </div>
    )
}
