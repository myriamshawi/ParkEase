import React from 'react';
import PaymentInterface from './PaymentInterface';
import FeedbackForm from './FeedbackForm';
import {Card} from "react-bootstrap";

const SidePanel = () => {
    return (
        <div className="sidebar d-flex flex-column">
            <Card className="payment-card mb-4">
                <Card.Body>
                    <PaymentInterface />
                </Card.Body>
            </Card>
            <Card className="feedback-card">
                <Card.Body>
                    <FeedbackForm />
                </Card.Body>
            </Card>
        </div>
    );
};

export default SidePanel;