import React, {useContext} from 'react';

//import the global context
import {GlobalContext} from '../Context/GlobalState';

//import transaction
import {Transaction} from './Transaction';

export const TransactionHistory = () => {
   
    const {transactions} = useContext(GlobalContext);
    

    return (
        <div >
            <h3>Transaction History</h3>
            <div >
            <h3 >Income</h3> 

            <ul className="list">
            {transactions.map(transaction =>(

            <Transaction transaction={transaction}/>
            ))}
           

            
            </ul>
            </div>

            <div > 

            <h3 >Expenses</h3>
            <ul className="list">
                <li className="minus"> Bills 
                <span>-$500</span>
                <button className="delete-btn">X</button>


               </li>
            </ul>
            </div>
        </div>
    )
}

export default TransactionHistory;