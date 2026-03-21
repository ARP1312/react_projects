import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import "./App.css";
import ToDoAllitems from "./ToDoAllitems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {






  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item added: ${itemName} Date:${itemDueDate}`);
    const newTodoItems = [...todoItems, { name: itemName, dueDate: itemDueDate }]
    setTodoItems(newTodoItems);
  }



  const handleDeleteItem = (toDoItemName) => {
   
        const newTodoItems = todoItems.filter((thing) => thing.name !== toDoItemName);

        setTodoItems(newTodoItems);
     
  }




  return <center className='todo-container'>

    <AppName></AppName>
    <AddToDo onNewItem={handleNewItem}></AddToDo>
    {todoItems == 0 && <WelcomeMessage></WelcomeMessage>}
    <ToDoAllitems todoitems={todoItems} onDeleteClick = {handleDeleteItem}> </ToDoAllitems>





  </center>




}





export default App;