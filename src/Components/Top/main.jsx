import React, { useState } from 'react';
import PieChart from './Piechart';
import './main.css';
import Form1 from '../Form/BalanceForm';
import Form2 from '../Form/ExpenseForm';
import Transactions from '../Bottom/Transactions';

function Main() {
  const [balance, setBalance] = useState(5000);
  const [expenses, setExpenses] = useState(0);
  const [showIncomeForm, setShowIncomeForm] = useState(false);
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState({ Food: 0, Entertainment: 0, Travel: 0 });

  const openIncomeForm = () => setShowIncomeForm(true);
  const closeIncomeForm = () => setShowIncomeForm(false);

  const openExpenseForm = () => setShowExpenseForm(true);
  const closeExpenseForm = () => setShowExpenseForm(false);

  const addBalance = (amount) => {
    if (!isNaN(amount)) {
      setBalance(balance + amount);
    }
    closeIncomeForm();
  };

  const addExpense = (expense) => {
    if (!isNaN(expense.price)) {
      setExpenses(expenses + expense.price);
      setTransactions(prevTransactions => [...prevTransactions, expense]);
      setBalance(balance - expense.price);

      setCategories(prevCategories => ({
        ...prevCategories,
        [expense.category]: prevCategories[expense.category] + expense.price
      }));
    }
    closeExpenseForm();
  };

  return (
    <>
      <h2>Expense Tracker</h2>
      <div className="main">
        <div className="Card">
          <div className="balance-info">
            Wallet Balance:<span className="balance-amount"> {balance}</span>
          </div>
          <button className="greenButton" onClick={openIncomeForm}>+ Add Income</button>
          <Form1 show={showIncomeForm} handleClose={closeIncomeForm} addBalance={addBalance} />
        </div>
        <div className="Card">
          <div className='Expense-info'>
            Expenses Balance: <span className='Expense-amount'>{expenses}</span>
          </div>
          <button className="RedButton" onClick={openExpenseForm}>+ Add Expense</button>
          <Form2 show={showExpenseForm} handleClose={closeExpenseForm} addExpense={addExpense} />
        </div>
        {expenses > 0 ? (
          <div className="piechart">
            <PieChart categories={categories} />
          </div>
        ) : null}
      </div>
      <div className='bottom'>
        <div className='recent-transactions'>
          <h3>Recent Transactions</h3>
          <Transactions transactions={transactions} />
        </div>
        <div className='Top-Expenses'>
          <h3>Top Expenses</h3>
          {/* Implement top expenses display here */}
        </div>
      </div>
    </>
  );
}

export default Main;
