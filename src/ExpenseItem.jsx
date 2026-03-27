import "./App.css"


function ExpenseItem({item, onDelete}) {
  return (

<div>

    <div className="mainDiv">
         <div className="mainItem1">{item.title}</div>
         <div className="mainItem2">{item.amount}</div>
         <div className="mainItem3"><button onClick={() => onDelete(item.id)} >❌</button></div>
    </div>


  


</div>

  )
}

export default ExpenseItem