import React,{useContext} from 'react';
import {GlobalContext} from '../Context/GlobalStatePositive';
import {GlobalContextt} from '../Context/GlobalStateNegative';

export const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    const {Expensetransactions} = useContext(GlobalContextt);

    const income = transactions.map(transaction => transaction.Amount);
    
    const expenses = Expensetransactions.map(expense => expense.Amount);
    const Tincome = income.reduce((acc,item) =>(acc+=item),0).toFixed(2);
    const Texpense = expenses.reduce((acc,item) =>(acc-=item),0).toFixed(2);
    const total = (Tincome - Texpense).toFixed(2);



    return (
        <>
            <h3>Your Balance</h3>
            <h1 id="balance">${total}</h1>
        </>
    )
}

export default Balance;