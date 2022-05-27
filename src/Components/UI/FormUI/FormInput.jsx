import React from 'react'
import module from './FormInput.module.scss'

function FormInput(props) {
    return (
        <input min="5" max="100" className={module.formInput} {...props} type="text" />
    )
}

export default FormInput