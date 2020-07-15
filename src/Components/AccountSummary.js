import React from 'react';

export const AccountSummary = () => {
    return (
        <div className="inc-exp-container">
            <div>
                <h3>Income</h3>
                <p className="money plus">
                $0.00
                 </p>
            </div>
            <div>
             <h3>Expense</h3>
             <p className="money minus">
                $0.00
            </p>
            </div>
            
        </div>
    )
}

export default AccountSummary;