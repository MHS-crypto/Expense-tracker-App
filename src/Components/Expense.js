import React,{useContext} from 'react';
import {GlobalContextt} from '../Context/GlobalStateNegative';


export const Expense = ({expense}) => {
    const {DeleteTransaction} = useContext(GlobalContextt);
    return (
        <li className="minus"> 
            {expense.description}
                
        <span>{expense.Amount}</span>
        <button onClick={() => DeleteTransaction(expense.idd)} className="delete-btn">X</button>
               </li>
    )
}
