import React, {useContext} from 'react';

//import the global context
import {GlobalContext} from '../Context/GlobalStatePositive';
import {GlobalContextt} from '../Context/GlobalStateNegative';

//import transaction
import {Transaction} from './Transaction';
import {Expense} from './Expense';

export const TransactionHistory = () => {
   
    const {transactions} = useContext(GlobalContext);
    const {Expensetransactions} = useContext(GlobalContextt);
    

    return (
        <div >
            <h3>Transaction History</h3>
            <div >
            <h3 >Income</h3> 

            <ul className="list">
            {transactions.map(transaction =>(

            <Transaction key={transaction.id} transaction={transaction}/>
            ))}
           

            
            </ul>
            </div>

            <div > 

            <h3 >Expenses</h3>
            <ul className="list">
            {Expensetransactions.map(expense =>(

<Expense key={expense.id} expense={expense}/>
))}
                
            </ul>
            </div>
        </div>
    )
}

export default TransactionHistory;