import { useState } from "react";
import { IoMdAdd } from "react-icons/io";


function AddToDo({ onNewItem }) {

    const [todoName, setTodoName] = useState('');
    const [dueDate, setDueDate] = useState('');


    const handleNameChange = (evt) => {
        setTodoName(evt.target.value);
        
    }


    const handleDateChange = (evt2) => {
        setDueDate(evt2.target.value);

    }




    const handleAddButtonClicked = (event) => {
 
        event.preventDefault();
        onNewItem(todoName,dueDate);
        setTodoName("");
        setDueDate("");
    }

    return <div className="container">

        <form className="row my-row" onSubmit={handleAddButtonClicked}  >

            <div className="col-6">
                <label htmlFor="texts"></label>
                <input type="text" placeholder="Enter to do here" name="texts" id="texts"
                 value={todoName}   onChange={handleNameChange}
                />
            </div>

            <div className="col-4">
                <label htmlFor="date1"></label>
                <input type="date" name="date1" id="date1" 
                 value={dueDate}  onChange={handleDateChange}
                />
            </div>

            <div className="col-2">
                <button type="submit" className="btn btn-success my-button"
                    
                    
                ><IoMdAdd /></button>
            </div>
        </form>

    </div>

}



export default AddToDo;