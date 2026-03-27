import { useState,useEffect, useRef } from "react"
import "./App.css"



function ExpenseForm({onAddExpense}) {
  
  const [title,setTitle] = useState('')
  const [amount,setAmount] = useState('')
  
  const titleRef = useRef()
  
  
  
  const handleSubmit = (e) => {
    
    e.preventDefault();

    if (!title || !amount) {
      return alert('Please fill all the fields!')
    }

     
    const newExpense = {
      id:Date.now(),
      title,
      amount:parseFloat(amount)
    }
    

     onAddExpense(newExpense)

    // empty after set

    setTitle("")
    setAmount("")

    // focus on title input after saving

    titleRef.current.focus()


     

  }

  








  
  return (
<div>


  <form onSubmit={handleSubmit}>

 <input type="text" 
        placeholder="Expense Title" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        ref={titleRef}
        className="expenseDesign"

        />


 <input type="no" 
        placeholder="Amount" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value) }
        className="expenseTitle"
        />

 <button type="submit" className="addButton">Add Expense</button>


</form> 



</div>
 

)
}

export default ExpenseForm