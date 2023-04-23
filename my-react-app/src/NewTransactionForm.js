import React, { useState } from 'react';

function NewTransactionForm({ onNewTransactionSubmit }) {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onNewTransactionSubmit(formData);
    setFormData({
      date: '',
      description: '',
      category: '',
      amount: '',
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-transaction-date-input">Date:</label>
      <input type="text" id="new-transaction-date-input" name="date" value={formData.date} onChange={handleChange} />
      <label htmlFor="new-transaction-description-input">Description:</label>
      <input type="text" id="new-transaction-description-input" name="description" value={formData.description} onChange={handleChange} />
      <label htmlFor="new-transaction-category-input">Category:</label>
      <input type="text" id="new-transaction-category-input" name="category" value={formData.category} onChange={handleChange} />
      <label htmlFor="new-transaction-amount-input">Amount:</label>
      <input type="text" id="new-transaction-amount-input" name="amount" value={formData.amount} onChange={handleChange} />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default NewTransactionForm;