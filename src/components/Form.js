import React from 'react';

const Form = (props) => {
  return(
    <form onSubmit={this.onFormSubmit}>
      <label >Date:</label>
      <input 
          type="date"
          name="date"
          value={date}
          onChange={this.handleChange} />
      <label >Description:</label>
      <input 
          type="text" 
          name="description"       
          value={description}
          onChange={this.handleChange}
          placeholder='enter description' />
      <label >Place:</label>
      <input 
          type="text"
          name="place"
          value={place}
          onChange={this.handleChange}
          placeholder='enter place' />
      <label >Amount:</label>
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

export default Form