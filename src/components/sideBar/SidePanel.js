import React from 'react';
import PaymentInterface from './PaymentInterface';
import FeedbackForm from './FeedbackForm';
import '../../Styles/SidePanel.css'

const SidePanel = ({ selectedSpot, onPaymentComplete }) => {
    return (
        <div className="sidebar d-flex flex-column">
            <div className="card mb-4">
                <div className="card-body">
                    <PaymentInterface selectedSpot={selectedSpot} onPaymentComplete={onPaymentComplete} />
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <FeedbackForm />
                </div>
            </div>
        </div>

    );
};

export default SidePanel;