import React, {Component} from 'react'
import Form from "./components/Form"
import Table from "./components/Table"

class App extends Component {
    state= {
      expenses: []
    }

removeExpense = (index) => {
  const {expenses} = this.state

  this.setState({
    expenses: expenses.filter((expense, i) => {
      return i !== index
    })
  })
}


handleSubmit = expense => {
  this.setState({expenses: [...this.state.expenses,expense]})
}

  render() {
    const {expenses} = this.state

    return(
    <div className="container">
      <h1>Expense Tracker</h1>
      <Form handleSubmit={this.handleSubmit} />
      <h3>Add new expense</h3>
      <Table
            expenseData={expenses}
            removeExpense={this.removeExpense}
      />
      
    </div>
  )
}
}
export default App