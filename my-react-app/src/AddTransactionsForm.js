import React, { useState } from 'react';
import axios from 'axios';

function AddTransactionForm() {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    const newTransaction = { date, description, category, amount };
    axios.post('/api/transactions', newTransaction)
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input type="date" name="date" value={date} onChange={evt => setDate(evt.target.value)} />
      </label>
      <label>
        Description:
        <input type="text" name="description" value={description} onChange={evt => setDescription(evt.target.value)} />
      </label>
      <label>
        Category:
        <input type="text" name="category" value={category} onChange={evt => setCategory(evt.target.value)} />
      </label>
      <label>
        Amount:
        <input type="number" name="amount" value={amount} onChange={evt => setAmount(evt.target.value)} />
      </label>
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default AddTransactionForm;