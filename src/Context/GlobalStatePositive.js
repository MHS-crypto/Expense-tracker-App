import React, {createContext, useReducer} from 'react';


//Import the reducer
import AppReducer from './AppReducer';

//Create the initial state
const initialState = {
       transactions: []   
}

//Create the Global Context
export const GlobalContext = createContext(initialState);

//Create a Provider
export const GlobalProvider = ({children}) => {

    const [state,dispatch] = useReducer(AppReducer, initialState)

    //Actions
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_ITRANSACTION',
            payload: id
            
        });
    }
    
    function AddTransaction(transaction){
        dispatch({
                type:'ADD_ITRANSACTION',
                payload: transaction
                
         });
    }
    

    

return (
    <GlobalContext.Provider value = {
        {
        transactions: state.transactions,
        deleteTransaction,
        AddTransaction
        }
    }> 
      {children}
    </GlobalContext.Provider>
)

    }

