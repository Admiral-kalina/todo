import {ADD_TODO, CHANGE_TODO_BODY, CHECK_TODO, TODO_CHECK, TODO_DELETE} from "./actionTypes";

export const todoCheckAction = payload => ({type: TODO_CHECK, payload});
export const todoDeleteAction = payload => ({type: TODO_DELETE, payload});
export const addTodoAction = payload => ({type: ADD_TODO, payload});
export const checkTodoAction = payload => ({type: CHECK_TODO, payload});
export const changeTodoBodyAction = payload => ({type: CHANGE_TODO_BODY, payload});
