export default (state,action) => {
  switch(action.type)
  {
    case 'DELETE_ITRANSACTION':
      return{
        ...state,
        transactions: state.transactions.filter(transaction =>transaction.id!==action.payload)
      }

      case 'DELETE_ETRANSACTION':
        return{
          ...state,
          Expensetransactions: state.Expensetransactions.filter(expense => expense.idd!==action.payload)
        }

      case 'ADD_ITRANSACTION':
        return{
         
           
           transactions: [action.payload, ...state.transactions]

        }
     
      case  'ADD_ETRANSACTION':
        return{
          ...state,
          Expensetransactions: [action.payload, ...state.Expensetransactions]
        }  
    
      default:
          return state;
  }


}