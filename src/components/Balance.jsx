import React from 'react'
import { useSelector } from 'react-redux'

function Balance() {
const {transactions} = useSelector(state => state.transactions);
const total = transactions.reduce((acc,tx) => acc + tx.amount,0).toFixed(2);

  return (
  <h2 className='text-xl font-bold text-blue-400'>Balance: Rs.{total}</h2>
  )
}

export default Balance
