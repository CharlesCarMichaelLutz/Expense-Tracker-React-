import React, {useState, useEffect} from 'react'

export default function useTable() {
  const [tableData, setTableData] = useState(JSON.parse(localStorage.getItem('expenses')) || [])

  function removeExpense(id) {
    setTableData((prevState) => prevState.filter((expense) => expense.id !== id))
  }

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(tableData))
  }, [tableData])

  return {tableData, setTableData, removeExpense}
}