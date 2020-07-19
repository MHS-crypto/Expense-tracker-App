import React, {useState, useContext} from 'react';
import {GlobalContext} from '../Context/GlobalStatePositive';
import {GlobalContextt} from '../Context/GlobalStateNegative';



export const AddTransaction = () => {

    const[description, setDescription] = useState('');  
    const[Amount, setTransaction] = useState('');  

    

    const {AddTransaction} = useContext(GlobalContext);  
    const {addTransaction} = useContext(GlobalContextt);      

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction ={
            id: new Date().getTime(),
            description,
           Amount: +Amount

        }
           if([Amount] > 0)
           {
            AddTransaction(newTransaction);
            console.log(addTransaction);

           }

           else
           {
            addTransaction(newTransaction);
            console.log(addTransaction[1]);
           }
       
        
    }
    



    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                <label htmlFor="description"><b>Description</b>
                </label>
                <input type="text" 
                       id="description"
                       placeholder="Detail of Transaction"
                       required = "required"

                       value={description} 
                       onChange={(e) =>setDescription(e.target.value)}
                       />
                </div>

                <div className="form-control">
                <label htmlFor="TransactionAmount"><b>Transaction Amount(Enter + for income, - for Expense)</b>
                </label>
            
                <input type="number" 
                       id="TransactionAmount"
                       placeholder="Enter Transaction Amount"
                       required = "required"
                       value={Amount}
                       onChange={(e) =>setTransaction(e.target.value)}

                       />
                
                </div>
                <button className="btn">
                    Add Transaction
                </button>
            </form>
        </div>
    )
}

export default AddTransaction;