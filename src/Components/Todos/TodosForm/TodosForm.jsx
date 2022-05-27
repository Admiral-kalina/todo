import  moment  from 'moment';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import FormButton from '../../UI/FormUI/FormButton';
import FormInput from '../../UI/FormUI/FormInput';
import module from './TodosForm.module.scss'
import {addTodoAction} from "../../../store/todo/action";

function TodosForm() {
    const dispatch = useDispatch();

    const [titleInput, setTitleInput] = useState("");
    const [bodyInput, setBodyInput] = useState("");

    function addTodo(e) {
        e.preventDefault();
        const addData = {
            title: titleInput,
            body: bodyInput,
            date:moment().format('LTS')
        }
        dispatch(addTodoAction(addData));
        setTitleInput('')
        setBodyInput('')
    }
    return (
        <form className={module.form}>
            <FormInput
                value={titleInput}
                onChange={e => setTitleInput(() => e.target.value)}
                placeholder="category" />
            <FormInput
               value={bodyInput}
               onChange={e => setBodyInput(() => e.target.value)}
               placeholder="task"
           />
            <FormButton onClick={e => addTodo(e)}>Add todo</FormButton>
        </form>
    )
}

export default TodosForm
