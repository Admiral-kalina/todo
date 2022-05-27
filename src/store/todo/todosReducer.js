import moment from "moment";
import {ADD_TODO, CHANGE_TODO_BODY, CHECK_TODO, TODO_DELETE} from "./actionTypes";
import { v4 as uuidv4 } from 'uuid'

const initialStore = [
  { id: 1, title: "My title", body: "My Description",isEdit:false, isCheck: false, date: moment().format('LTS') },
  { id: 2, title: "2", body: "My 2", isCheck: false,isEdit:false,  date: moment().format('LTS') },
];



export const todosReducer = (store = initialStore, action) => {

// console.log(action);
  switch (action.type) {
    case TODO_DELETE:
      return store.filter(store => store.id !== action.payload);
    case ADD_TODO:
      return [
        {
          id: uuidv4(),
          title: action.payload.title,
          body: action.payload.body,
          isDone: false,
          isEdit: false,
          date: action.payload.date,
        },
        ...store,
      ];
    case CHECK_TODO:
      return store.map(todo => todo.id === action.payload
        ? { ...todo, isCheck: !todo.isCheck }
        : todo
      )
      case CHANGE_TODO_BODY:
      return store.map(todo => todo.id === action.payload.id
        ? {...todo,body: action.payload.text }
        : todo
        )

    default:
      return store;
  }
};

