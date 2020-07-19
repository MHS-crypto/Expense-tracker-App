import React from 'react';
import './App.css';

//Import Componenets
import Header from './Components/Header';
import Balance from './Components/Balance';
import AccountSummary from './Components/AccountSummary';
import TransactionHistory from './Components/TransactionHistory';
import AddTransaction from './Components/AddTransaction';

//Import the global provider
import {GlobalProvider} from './Context/GlobalStatePositive';
import {GlobalProviderr} from './Context/GlobalStateNegative';


import './App.css';


function App() {
  return (
    <GlobalProvider>
      <GlobalProviderr>
     <Header/>
     <div className="container">
     <Balance/>
     <AccountSummary/>
     <TransactionHistory/>
     <AddTransaction/>
     </div>
     </GlobalProviderr>
    </GlobalProvider>
  );
}

export default App;
