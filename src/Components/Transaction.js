import React,{useContext} from 'react';
import {GlobalContext} from '../Context/GlobalStatePositive';


export const Transaction = ({transaction}) => {
   const {deleteTransaction} = useContext(GlobalContext)
    return (
        <li className="plus">
            {transaction.description}
        <span>{transaction.Amount}</span>
        <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">X</button>
        </li>
    )
}
