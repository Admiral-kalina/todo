export function usersList() {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => a(json));
  };
}



function a(a){
console.log(a);
}






































// export function loadTodo (){
//     return (dispatch)=> {
//        return fetch('https://jsonplaceholder.typicode.com/todos')
//             .then(response => response.json())
//             .then(json => json)
//     }
// }
