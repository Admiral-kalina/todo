import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCountAction, incrementCountAction } from "../../store/cashReducer";
import {loadTodo, usersList} from "../../store/cashAction";
function Counter() {
   const dispatch = useDispatch();
   const cash = useSelector(store => store.cash.cash)

    useEffect(()=>{
        dispatch(usersList())
    },[])
  return (
    <div>


      <p>{cash}</p>
      <button onClick={() => dispatch(incrementCountAction(+prompt("")))}>
        Increment
      </button>
      <button onClick={() => dispatch(decrementCountAction(+prompt("")))}>
        Decrement
      </button>
      <div></div>




      <input type="" disabled=""/>
    </div>
  );
}

export default Counter;
