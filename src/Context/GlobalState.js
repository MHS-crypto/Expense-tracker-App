import React, {createContext, useReducer} from 'react';


//Import the reducer
import AppReducer from './AppReducer';

//Create the initial state
const initialState = {
       transactions: [
            {id:1 , description:"Income1", Amount: 1000},
            {id:2 , description:"Expense1", Amount: -100},
            {id:3 , description:"Income2", Amount: 2000},
            {id:4 , description:"Expense2", Amount: -1000}



       ]   
}

//Create the Global Context
export const GlobalContext = createContext(initialState);

//Create a Provider
export const GlobalProvider = ({children}) => {

    const [state] = useReducer(AppReducer, initialState)

return (
    <GlobalContext.Provider value = {
        {
        transactions: state.transactions
        }
    }> 
      {children}
    </GlobalContext.Provider>
)

}