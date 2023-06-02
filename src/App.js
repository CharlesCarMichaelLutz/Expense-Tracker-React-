import React, {useState} from 'react'
import Form from "./components/Form"
import Table from "./components/Table"
import Header from './components/Header'
import useTable from './hooks/useTable'

function App() {
  const {tableData, setTableData, removeExpense} = useTable()

    return (
    <div className="container">
      <Header />
      <Form 
          setTableData={setTableData}
        />
      <Table
            tableData={tableData}
            removeExpense={removeExpense}
      />     
    </div>
  )
}

export default App