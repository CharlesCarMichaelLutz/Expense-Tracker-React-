import React from 'react';

const Table = (props) => {
      return(
      <table className="expense--table">
        <thead>
           <tr>
             <th>Date</th>
             <th>Description</th>
             <th>Place</th>
             <th>Amount</th>
             <th>Delete</th>
           </tr>
        </thead> 
        <tbody>
          {props.expenses.map(expense => {
            return (
           <tr key={expense.id}>
             <td>{expense.date}</td>
             <td>{expense.description}</td>
             <td>{expense.place}</td>
             <td>{expense.amount}</td>
             <td>
               <button className='delete--button' onClick={() => props.removeExpense(expense.id)}>Delete</button>
             </td>
           </tr> 
            )
          })
          }
        </tbody>
      </table>
      )
}

export default Table