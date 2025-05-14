import { useSelector } from "react-redux";

export default function IncomeExpense() {
    const {transactions} = useSelector(state => state.transactions);
    const income = transactions
        .filter(tx => tx.amount > 0)
        .reduce((acc,tx) => acc +tx.amount,0)
        .toFixed(2);
    const expense = transactions
        .filter(tx => tx.amount < 0)
        .reduce((acc,tx) => acc + tx.amount,0)
        .toFixed(2);

    return (
        <div className="flex justify-around my-4">
            <p className="text-green-600 font-semibold">Income: Rs.{income}</p>
            <p className="text-red-600 font-semibold">Expense: Rs.{Math.abs(expense)}</p>
        </div>
    );
}