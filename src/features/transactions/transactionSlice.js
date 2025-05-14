import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    transactions: JSON.parse(localStorage.getItem('transactions')) || [],
}

const transactionSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        addTransaction: {
            reducer: (state, action) => {
                state.transactions.push(action.payload);
                localStorage.setItem('transactions',JSON.stringify(state.transactions));
            },
            prepare: (text,amount) => ({
                payload: {
                    id:nanoid(),
                    text,
                    amount: parseFloat(amount),
                },
            }),
        },
        deleteTransaction: (state,action) => {
            state.transactions =state.transactions.filter(tx => tx.id !== action.payload);
            localStorage.setItem('transactions',JSON.stringify(state.transactions));
        },
    },
});

export const {addTransaction,deleteTransaction} = transactionSlice.actions;
export default transactionSlice.reducer;