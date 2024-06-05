import React from 'react';
import './BalanceForm.css';

function Form1({ show, handleClose, addBalance }) {
  return (
    <div className={`popup-form ${show ? 'show' : ''}`}>
      <div className='form-container'>
        <h3>Add Balance</h3>
        <form className='balanceformid' onSubmit={(e) => e.preventDefault()}>
          <input type='text' placeholder='Title' />
          <button type='button' className='close-btn' onClick={addBalance}>Add Balance</button>
          <button type='button' className='close-btn' onClick={handleClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default Form1;
