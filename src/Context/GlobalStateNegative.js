import React, {createContext, useReducer} from 'react';


//Import the reducer
import AppReducer from './AppReducer';

//Create the initial state
const initialState = {
       Expensetransactions:[]
         
}

//Create the Global Context
export const GlobalContextt = createContext(initialState);

//Create a Provider
export const GlobalProviderr = ({children}) => {

    const [state,dispatch] = useReducer(AppReducer, initialState)

    //Actions
    function DeleteTransaction(idd){
        
        dispatch({
            type:'DELETE_ETRANSACTION',
            payload: idd
           
            
        })

    }

    function addTransaction(expense){
        
        dispatch({
            type:'ADD_ETRANSACTION',
            payload: expense
           
            
        })

    }

return (
    <GlobalContextt.Provider value = {
        {
        Expensetransactions: state.Expensetransactions,
        DeleteTransaction,
        addTransaction
        }
    }> 
      {children}
    </GlobalContextt.Provider>
)

}