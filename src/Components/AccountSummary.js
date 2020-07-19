import React,{useContext} from 'react';
import {GlobalContext} from '../Context/GlobalStatePositive';
import {GlobalContextt} from '../Context/GlobalStateNegative';

export const AccountSummary = () => {
    const {transactions} = useContext(GlobalContext);
    const {Expensetransactions} = useContext(GlobalContextt);
    const income = transactions.map(transaction => transaction.Amount);
    const expenses = Expensetransactions.map(expense => expense.Amount);
    const Tincome = income.reduce((acc,item) =>(acc+=item),0).toFixed(2);
    const Texpense = expenses.reduce((acc,item) =>(acc-=item),0).toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h3>Income</h3>
                <p className="money plus">
                ${Tincome}
                 </p>
            </div>
            <div>
             <h3>Expense</h3>
             <p className="money minus">
                ${Texpense}
            </p>
            </div>
            
        </div>
    )
}

export default AccountSummary;