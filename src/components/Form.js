import React from 'react';

const Form = ({formData, handleSubmit, handleChange}) => {
  return(
    <form onSubmit={(e) => {
      e.preventDefault()
      handleSubmit()
    }}>
      <label >Date:</label>
      <input 
          type="date"  
          name="date"
          value={formData.date}  required
          onChange={handleChange} />
      <label >Description:</label>
      <input 
          type="text" 
          name="description"       
          value={formData.description} required
          onChange={handleChange}
          placeholder='enter description' />
      <label >Place:</label>
      <input 
          type="text" 
          name="place"
          value={formData.place} required
          onChange={handleChange}
          placeholder='enter place' />
      <label >Amount:</label>
      <input 
          type="number"         
          name="amount"
          value={formData.amount}  required
          onChange={handleChange}
          placeholder='enter amount' />
      <input 
          type="submit"
          className="submit"
          id="submit" />
    </form>
  )
}

export default Form