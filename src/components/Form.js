import React from 'react';

const Form = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <label >Date:</label>
      <input 
          type="date"  
          name="date"
          value={props.date}  required
          onChange={props.handleChange} />
      <label >Description:</label>
      <input 
          type="text" 
          name="description"       
          value={props.description} required
          onChange={props.handleChange}
          placeholder='enter description' />
      <label >Place:</label>
      <input 
          type="text" 
          name="place"
          value={props.place} required
          onChange={props.handleChange}
          placeholder='enter place' />
      <label >Amount:</label>
      <input 
          type="number"         
          name="amount"
          value={props.amount}  required
          onChange={props.handleChange}
          placeholder='enter amount' />
      <input 
          type="submit"
          className="submit"
          id="submit" />
    </form>
  )
}

export default Form