import React from 'react'
import TodosForm from './TodosForm/TodosForm'
import TodosList from './TodosList/TodosList'

function Todos() {
  return (
    <div>
      <TodosForm/>
      <TodosList/>
    </div>
  )
}

export default Todos