import React from 'react';
import PaymentInterface from './PaymentInterface';
import FeedbackForm from './FeedbackForm';
import '../../Styles/SidePanel.css'

const SidePanel = () => {
    return (
        <div className="sidebar d-flex flex-column">
            <div className="card mb-4">
                <div className="card-body">
                    <PaymentInterface />
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