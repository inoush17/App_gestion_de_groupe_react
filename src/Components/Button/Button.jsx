import React from 'react'

export default function Button({ text, onClick, type ,disabled}) {
    return (
        <div>
            <button
            onClick={onClick}  
            type={type} 
            disabled={disabled}
            typeof='submit'>

                {text || "Opérations"}
                
            </button>
        </div>
    )
}
