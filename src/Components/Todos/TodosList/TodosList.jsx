import React from 'react'
import { useSelector } from 'react-redux';
import TodosItem from './TodosItem/TodosItem';
import module from './todoList.module.scss'
import TodoHeader from './TodoHeader/TodoHeader';

function TodosList() {
    const todosStore = useSelector(store => store.todos);

    return (
     <div>
        <TodoHeader></TodoHeader>
        <div className={module.list}>
           {todosStore.map(todo => (
        <TodosItem key={todo.id} todo={todo}/>
      ))}
        </div>
     </div>
    )
}

export default TodosList;