import { useState } from 'react'
import './App.css'
import Balance from './components/Balance'
import AddTransaction from './components/AddTransaction'
import IncomeExpense from './components/IncomeExpense'
import TransactionList from './components/TransactionList'

function App() {
  const [count, setCount] = useState(0)

  return (
 <div className='max-w-xl mx-auto mt-10 p-4 shadow-2xl  rounded-lg bg-white'>
  <h1 className='text-3xl font-bold mb-4 text-center'>Expense Tracker</h1>
  <Balance/>
  <IncomeExpense/>
  <AddTransaction/>
  <TransactionList/>
 </div>
  )
}

export default App
