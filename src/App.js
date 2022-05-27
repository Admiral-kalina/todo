
import { useMemo } from "react";
import "./App.css";
import Counter from "./Components/Counter/Counter";
import Todos from "./Components/Todos/Todos";
function App() {

  return (
    <div className="App">
      <Todos />

     {/* <Counter/> */}
    </div>

  );
}

export default App;
