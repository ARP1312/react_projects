import ToDolast from "./components/ToDolast";
import style2 from './ToDoAllitems.module.css';



const ToDoAllitems = ({todoitems , onDeleteClick}) => {


return (

<>
  <div className = {style2.itemContainer}>

    {todoitems.map((thing) => (
        <ToDolast key={thing.name} todoDate = {thing.dueDate} todoName = {thing.name} onDeleteClick = {onDeleteClick}> </ToDolast>
    ))}
   
  </div>
</>

);

}

export default ToDoAllitems;