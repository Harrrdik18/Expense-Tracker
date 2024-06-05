import React, { useState } from 'react';
import './ExpenseForm.css';

function Form2({ show, handleClose, addExpense }) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleAddExpense = () => {
    const expense = {
      title,
      price: parseInt(price, 10),
      category,
      date,
    };
    if (!isNaN(expense.price)) {
      addExpense(expense);
      handleClose();
    }
  };

  return (
    <div className={`popup-form ${show ? 'show' : ''}`}>
      <div className='form-container'>
        <h3>Add Expenses</h3>
        <form className='expenseformid' onSubmit={(e) => e.preventDefault()}>
          <input type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
          <input type='text' placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} />
          <select id='Category' name='Category' className='styled-input' value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value='' disabled hidden>Select Category</option>
            <option value='Entertainment'>Entertainment</option>
            <option value='Food'>Food</option>
            <option value='Travel'>Travel</option>
          </select>
          <input type='date' placeholder='dd/mm/yy' className='formdate' value={date} onChange={(e) => setDate(e.target.value)} />
        </form>
        <button className='close-btn' onClick={handleAddExpense}>Add Expense</button>
        <button className='close-btn' onClick={handleClose}>Cancel</button>
      </div>
    </div>
  );
}

export default Form2;
