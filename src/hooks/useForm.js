import React, {useState} from 'react';

export default function useForm(setTableData) {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    place: '',
    amount: ''
  })
  
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

  function clearForm() {
    setFormData({
      date:'',
      description:'',
      place:'',
      amount:''
    })
  }
  return {formData, handleChange, handleSubmit, clearForm}
}