import {applyMiddleware, combineReducers, createStore} from "redux"
import { cashReducer } from "./cashReducer";
import { todosReducer } from "./todo/todosReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
   cash: cashReducer,
   todos: todosReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
