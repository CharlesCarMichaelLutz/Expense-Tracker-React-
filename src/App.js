import React, {Component} from 'react'
import Form from "./components/Form"
import Table from "./components/Table"

class App extends Component {
    constructor(props){
      super(props)
  
      this.state = {
        expenses: [],
        date:'',
        description:'',
        place:'',
        amount:''
      }

      this.removeExpense = this.removeExpense.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)
    }
  
  handleChange = (e) => {
    const { name, value } = e.target;
  
    this.setState({
      [name] : value
    })
  }

  const 
  
  handleSubmit = (e) => {
    e.preventDefault()
    const freshExpense = {
      id: Date.now(),
      date: this.state.date,
      description: this.state.description,
      place: this.state.place,
      amount: this.state.amount
    }

    this.setState({ 
        expenses: [...this.state.expenses, freshExpense]
      })

      e.target.reset()
      this.clearForm()     
}
  
  removeExpense = (id) => {
    const expenses = this.state.expenses.filter((expense) => expense.id !== id)

    this.setState({
      expenses:  expenses
    })
  }

  clearForm = () => {
    this.setState({
    date:'',
    description:'',
    place:'',
    amount:''
  })

  } 

render() {
    return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <Form 
          handleSubmit={this.handleSubmit} 
          state={this.state} 
          handleChange={this.handleChange}
        />
      <h3>Add new expense</h3>
      <Table
            expenses={this.state.expenses}
            removeExpense={this.removeExpense}
      />
      
    </div>
  )
}
}

export default App