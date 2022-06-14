import React, {Component} from 'react';

class Form extends Component {
  constructor(props){
    super(props)

    this.initialState = {
      date:'',
      description:'',
      place:'',
      amount:''
    }

    this.state = this.initialState

  }

handleChange = event => {
  const { date, value } = event.target;

  this.setState({
    [date] : value
  })
}

onFormSubmit = (event) => {
  event.preventDefault();

  this.props.handleSubmit(this.state)
  this.setState(this.initialState)

}

render() {
  const { date, description, place, amount } = this.state

  return(
    <form onSubmit={this.onFormSubmit}>
      <label for="date">Date:</label>
      <input 
          type="date"
          name="date"
          className="date"
          value={date}
          onChange={this.handleChange} />
      <label for="description">Description:</label>
      <input 
          type="text" 
          className="description" 
          id="description"
          value={description}
          onChange={this.handleChange}
          placeholder='enter description' />
      <label for="place">Place:</label>
      <input 
          type="text" 
          className="place" 
          id="place"
          value={place}
          onChange={this.handleChange}
          placeholder='enter place' />
      <label for="amount">Amount:</label>
      <input 
          type="number" 
          className="amount" 
          id="amount"
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