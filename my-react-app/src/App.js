import React, { useState, useEffect } from 'react';
import './App.css'
import Header from './Header'
import TransactionTable from './TransactionTable';
import NewTransactionForm from './NewTransactionForm';
import SearchBar from './SearchBar';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:8001/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data.transactions))
      .catch(error => console.log(error));
  }, []);

  function handleNewTransactionSubmit(formData) {
    fetch('http://localhost:8001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => setTransactions([...transactions, data]))
      .catch(error => console.log(error));
  }

  function handleSearchTermChange(event) {
    setSearchTerm(event.target.value);
  }

  const filteredTransactions = transactions.filter(transaction => transaction.description.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <Header />
      <SearchBar searchTerm="Search your Recent Transactions" onSearchTermChange={handleSearchTermChange} />
      <NewTransactionForm onNewTransactionSubmit={handleNewTransactionSubmit} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
}

export default App;
