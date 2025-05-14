import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../features/transactions/transactionSlice";

function AddTransaction() {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!text || !amount) return;
        dispatch(addTransaction(text,amount));
        setText('');
        setAmount('')
    }
  return (
   <form onSubmit={handleSubmit} className="my-4">
    <input 
    type="text"
    value={text}
    onChange={e => setText(e.target.value)}
    placeholder="Enter description"
      className="border p-2 w-full mb-2"
    />
    <input 
    type="number"
    value={amount}
    onChange={e => setAmount(e.target.value)}
    placeholder="Enter amount (eg. if income 500 and if expense -200)"
    className="border p-2 w-full mb-2"
     />
     <button className="border p-2 m-2 rounded hover:text-xl bg-blue-600 text-white">Add Transaction </button>
   </form>
  )
}

export default AddTransaction
