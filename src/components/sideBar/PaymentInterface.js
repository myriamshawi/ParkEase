import React from 'react';
import '../../Styles/PaymentInterface.css'

const PaymentInterface = () => {
    return (
        <div className="payment-interface">
            <h2>Parking Payment</h2>
            {/* Display of parking fees and payment form */}
            <p>Total due: $5.00</p>
            <button>Pay with Credit Card</button>
            <button>Pay with Digital Wallet</button>
            {/* Add more payment options as needed */}
        </div>
    );
};

export default PaymentInterface;
