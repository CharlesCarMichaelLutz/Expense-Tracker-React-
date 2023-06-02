import React from 'react';
import useForm from '../hooks/useForm';

const Form = ({setTableData}) => {
  const {formData, handleChange, handleSubmit, clearForm} = useForm(setTableData)
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
      <button onClick={clearForm}>Reset</button>
    </form>
  )
}

export default Form
