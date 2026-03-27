import { useState, useEffect } from 'react'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'
import "./App.css"

function App() {

  const [expenses, setExpense] = useState(() => {
    const saved = localStorage.getItem('expenses')
    return saved ? JSON.parse(saved) : [];
  });




  
  useEffect(() => {
    localStorage.setItem('expenses',JSON.stringify(expenses))
  },[expenses])
  
  



  const addExpense = (expense) => {
    setExpense((prev) => [...prev,expense])
  }




  const deleteExpense = (id) => {
    setExpense((prev) => prev.filter((item) => item.id != id ))
  }



  const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0 )



  return (
 
     <div className="appMain" >
      
      <h1 className='appHeading'>💰 Expense Tracker</h1>

      <hr />
      
      <ExpenseForm onAddExpense={addExpense}> </ExpenseForm>

       <h3 className='totalExpenseHead'>Total Expense : ₹ {totalExpenses.toFixed(2)}</h3>
       
       <hr />

       <ExpenseList expenses={expenses} onDelete={deleteExpense}> </ExpenseList>

     </div>


  )
}

export default App
