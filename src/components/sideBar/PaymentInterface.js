import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import CreditCardForm from './CreditCardForm';
import Swal from 'sweetalert2';

const PaymentInterface = ({ selectedSpot, onPaymentComplete }) => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        Swal.fire({
            title: 'Success!',
            text: 'Transaction completed successfully!',
            icon: 'success',
            confirmButtonText: 'Ok'
        }).then(() => {
            onPaymentComplete(); // Notify that payment is complete
            handleClose();
        });
    };

    const totalDue = selectedSpot ? `${selectedSpot.price} - ${selectedSpot.name}` : "Select a parking spot";

    return (
        <div className="payment-interface">
            <h2>Parking Payment</h2>
            <p>Total due: {totalDue}</p>
            <button disabled={!selectedSpot} onClick={handleShow}>Pay with Credit Card</button>
            <button disabled={!selectedSpot}>Pay with Digital Wallet</button>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Credit Card Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CreditCardForm onSubmit={handleSubmit} />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default PaymentInterface;
