import React from 'react'
import module from './FormButton.module.scss'
function FormButton(props) {
    return (
        <button className={module.button} {...props}></button>
    )
}

export default FormButton