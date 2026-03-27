import ExpenseItem from "./ExpenseItem"
import "./App.css"


function ExpenseList({ expenses, onDelete }) {
  
  if (expenses.length === 0) {
    return <p className="noItem">No Expenses Yet</p>
  }

  
  return (
 
    <div>
 
  {expenses.map((item) => (
      <ExpenseItem key={item.id} item={item} onDelete={onDelete} /> 
  ))}
   
 
    </div>

  )
}

export default ExpenseList