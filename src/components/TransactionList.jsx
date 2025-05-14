import {useSelector, useDispatch} from 'react-redux'
import { deleteTransaction } from '../features/transactions/transactionSlice'

export default function TransactionList(){
    const {transactions} = useSelector(state => state.transactions);
    const dispatch = useDispatch();

    return(
        <ul>
            {transactions.map(tx => (
                <li
                key={tx.id}
                className={`flex justify-between my-2 p-2 border-l-4 ${
                    tx.amount > 0 ? 'border-green-500': 'border-red-500'
                }`}
                >
                    <span>{tx.text}</span>
                    <div>
                        <span>{tx.amount}</span>
                        <button
                        className='ml-4 text-red-500 hover:text-2xl'
                        onClick={()=> dispatch(deleteTransaction(tx.id))}
                        >
                            X
                        </button>
                    </div>

                </li>
            ))}
        </ul>
    )
}