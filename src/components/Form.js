import React, {Component} from 'react';

class Form extends Component {
  constructor(props){
    super(props)

    this.state = {
      date:'',
      description:'',
      place:'',
      amount:''
    }

  }

handleChange = event => {
  const { name, date } = event.target;

  this.setState({
    [name] : date
  })
}

onFormSubmit = (event) => {
  event.preventDefault();

  this.props.handleSubmit(this.state)
  this.clearForm();
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
  const { date, description, place, amount } = this.state

  return(
    <form onSubmit={this.onFormSubmit}>
      <label for="date">Date:</label>
      <input 
          type="date"
          name="date"
          value={date}
          onChange={this.handleChange} />
      <label for="description">Description:</label>
      <input 
          type="text" 
          name="description"       
          value={description}
          onChange={this.handleChange}
          placeholder='enter description' />
      <label for="place">Place:</label>
      <input 
          type="text"
          name="place"
          value={place}
          onChange={this.handleChange}
          placeholder='enter place' />
      <label for="amount">Amount:</label>
      <input 
          type="number"         
          name="amount"
          value={amount}
          onChange={this.handleChange}
          placeholder='enter amount' />
      <input 
          type="submit"
          className="submit"
          id="submit" />
    </form>
  )
}
}

export default Form