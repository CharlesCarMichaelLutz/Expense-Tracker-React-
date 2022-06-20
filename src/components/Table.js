import React from 'react';

const TableHeader = () => {
  return(
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Place</th>
          <th>Amount</th>
          <th>Delete</th>
        </tr>
      </thead> 
  )
}

const TableBody = (props) => {
  const rows = props.expenseData.map(
    (row, index) => { 
  return(
      <tr key={index}>
        <td>{row.date}</td>
        <td>{row.description}</td>
        <td>{row.place}</td>
        <td>{row.amount}</td>
        <td>
          <button onClick={() => props.removeExpense(index)}>Delete</button>
        </td>
      </tr>    
  )
})
  return <tbody>{rows}</tbody>
}

const Table = (props) => {
  const { expenseData, removeExpense} = props
      return(
        <table>
            <TableHeader />
            <TableBody expenseData={expenseData} removeExpense={removeExpense} />
        </table>
      )
}

export default Table