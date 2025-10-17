import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import ToDoItem2 from "./components/ToDoItem2";
import ToDOItems from "./components/ToDOItems";
import "./App.css";

function App() {

  return <center className ='todo-container'>

  <AppName></AppName>
  <AddToDo></AddToDo>
  <div className = 'item-container'>
  <ToDOItems></ToDOItems>
  <ToDoItem2></ToDoItem2>
  </div>



  </center>




}





export default App;