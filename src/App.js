import React, {useState} from 'react'
import Form from "./components/Form"
import Table from "./components/Table"
import Header from './components/Header'

function App() {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    place: '',
    amount: ''
  })
  const [tableData, setTableData] = useState([])
  
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => {
      return {...prevState, [name]: value}
    })
  }

  function handleSubmit() {
    const freshExpense = {
      id: Date.now(),
      date: formData.date,
      description: formData.description,
      place: formData.place,
      amount: formData.amount
    }

    setTableData((prevState) => [...prevState, freshExpense])
    clearForm()     
  }
  
  function removeExpense(id) {
    setTableData((prevState) => prevState.filter((expense) => expense.id !== id))
  }

  function clearForm() {
    setFormData({
      date:'',
      description:'',
      place:'',
      amount:''
    })
  }
    return (
    <div className="container">
      <Header />
      <Form 
          handleSubmit={handleSubmit} 
          formData={formData} 
          handleChange={handleChange}
        />
      <Table
            tableData={tableData}
            removeExpense={removeExpense}
      />     
    </div>
  )
}

export default App