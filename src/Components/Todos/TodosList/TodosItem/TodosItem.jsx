import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import module from "./todosItem.module.scss";
import {
  changeTodoBodyAction,
  checkTodoAction,
  todoDeleteAction,
} from "../../../../store/todo/action";

function TodosItem({ todo }) {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const checkbox = useRef(null);
  const status = useRef(null);
  const hiddenBlock = useRef(null);
  const [hiddenActive, setHiddenActive] = useState(false);

  useEffect(() => {
    if (todo.isCheck) {
      status.current.innerText = "Done";
    } else {
      status.current.innerText = "Active";
    }
  }, [todo.isCheck]);

  function toggleDisable() {
    inputRef.current.disabled = !inputRef.current.disabled;
    if (checkbox.current.checked) {
      document.addEventListener("click", (e) => {
        console.log(e.target.parentNode.parentNode);
      });
    }
  }

  function onBodyChange(e, id) {
    let text = inputRef.current.value;
    dispatch(changeTodoBodyAction({ id, text }));
  }
  console.log(hiddenActive)
  function checkHiddenBlock() {

    const hiddenVisibility = hiddenBlock.current.style.visibility;
    if (hiddenActive) {
      setHiddenActive(false)
      hiddenBlock.current.style.visibility = "hidden"
    } else if (hiddenVisibility === "" || hiddenVisibility === "hidden") {
      setHiddenActive(true)
      hiddenBlock.current.style.visibility = "visible";

      document.addEventListener("click", (e) => {
        if(hiddenBlock.current){
        if (!hiddenBlock.current.contains(e.target)) {
          setHiddenActive(false)
          hiddenBlock.current.style.visibility = "hidden";
        }
      }
      })
    }
  }

  return (
    <div className={module.block}>
      <div className={[module["body"], module["category"]].join(" ")}>
        <input
          type="checkbox"
          onClick={() => dispatch(checkTodoAction(todo.id))}
        />
        <p className={module.title}>{todo.title}</p>
      </div>
      <div className={[module["body"], module["task"]].join(" ")}>
        <textarea
          cols="10"
          type="text"
          disabled="disabled"
          className={module.text}
          ref={inputRef}
          value={todo.body}
          onChange={(e) => onBodyChange(e, todo.id)}
        />
      </div>
      <div className={[module["body"], module["info"]].join(" ")}>
        <p ref={status} className={todo.isCheck ? module.done : module.active}>
          Active
        </p>

        <div ref={hiddenBlock} className={module.hidden}>
          <p>{todo.date}</p>
          <p className={module.edit}>
            <span>Edit</span>
            <input
              ref={checkbox}
              type="checkbox"
              onChange={toggleDisable}
            />
          </p>
          <button id='hiddenButton' onClick={checkHiddenBlock}>:</button>
        </div>
        <p
          className={module.close}
          onClick={() => dispatch(todoDeleteAction(todo.id))}
        >
          X
        </p>
      </div>
    </div>
  );
}

export default React.memo(TodosItem);

// import React, { useRef, useState } from "react";
// import { useDispatch } from "react-redux";
// import module from "./todosItem.module.scss";
// import {
//   changeTodoBodyAction,
//   checkTodoAction,
//   todoDeleteAction,
// } from "../../../../store/todo/action";

// document.addEventListener("click", (e) => {
//   console.log(e.target.parentNode.parentNode);
// });

// function TodosItem({ todo }) {
//   const dispatch = useDispatch();
//   const inputRef = useRef(null);
//   const checkbox = useRef(null);

//   // function toggleDisable(e) {

//   //   // console.log(e.target.value);

//   //       // if(!inputRef.current.disabled){
//   //       //   document.addEventListener('click',(e)=>{
//   //       //     // inputRef.current.disabled = !inputRef.current.disabled
//   //       //     // inputRef.current.checked = !inputRef.current.checked
//   //       //   })
//   //       // }
//   //       // }else{
//   //       //   document.removeEventListener('click')
//   //       // }
//   //     }

//   function toggleDisable(e) {
//     inputRef.current.disabled = !inputRef.current.disabled;
//     // console.log(inputRef.current.disabled );

//     if (checkbox.current.checked) {
//       document.addEventListener("click", (e) => {
//         console.log(e.target.parentNode.parentNode);
//       });
//     }
//   }

//   function onBodyChange(e, id) {
//     let text = inputRef.current.value;
//     dispatch(changeTodoBodyAction({ id, text }));
//   }

//   return (
//     <div className={todo.isCheck ? module.done : module.block}>
//       <div className={module.body}>
//         <input
//           type="checkbox"
//           onClick={() => dispatch(checkTodoAction(todo.id))}
//         />
//         <p className={module.title}>{todo.title}</p>
//       </div>
//       <div className={module.block}>
//         <input
//           type="text"
//           disabled="disabled"
//           className={module.text}
//           ref={inputRef}
//           value={todo.body}
//           onChange={(e) => onBodyChange(e, todo.id)}
//         />
//       </div>
//       <div className={module.body}>
//         <p>Done</p>
//       </div>
//       <div className={module.body}>
//         <p>{todo.date}</p>
//         Edit{" "}
//         <input
//           ref={checkbox}
//           type="checkbox"
//           onChange={(e) => toggleDisable(e)}
//         />
//         <p
//           className={module.close}
//           onClick={() => dispatch(todoDeleteAction(todo.id))}
//         >
//           {" "}
//           X
//         </p>
//       </div>
//     </div>
//   );
// }

// export default React.memo(TodosItem);
