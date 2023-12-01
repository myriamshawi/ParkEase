import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';

const CreditCardForm = ({ onSubmit }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryMonth, setExpiryMonth] = useState('');
    const [expiryYear, setExpiryYear] = useState('');

    const handleCardNumberChange = (event) => {
        let value = event.target.value;
        value = value.replace(/\s/g, ''); // Remove existing spaces
        const formattedValue = value.match(/.{1,4}/g)?.join(' ') ?? ''; // Insert space after every 4 digits
        setCardNumber(formattedValue);
    };

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="cardName">
                <Form.Label>Cardholder Name</Form.Label>
                <Form.Control type="text" placeholder="Enter cardholder name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="cardNumber">
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                    type="text"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    placeholder="Enter 16-digit card number"
                    maxLength="19" // 16 digits + 3 spaces
                    pattern="\d{4}\s\d{4}\s\d{4}\s\d{4}"
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="expiryDate">
                <Form.Label>Expiry Date (MM-YY)</Form.Label>
                <div className="d-flex">
                    <Form.Control
                        type="text"
                        value={expiryMonth}
                        onChange={(e) => setExpiryMonth(e.target.value)}
                        placeholder="MM"
                        maxLength="2"
                        pattern="\d{2}"
                        required
                        className="me-2"
                    />
                    <Form.Control
                        type="text"
                        value={expiryYear}
                        onChange={(e) => setExpiryYear(e.target.value)}
                        placeholder="YY"
                        maxLength="2"
                        pattern="\d{2}"
                        required
                    />
                </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="cvv">
                <Form.Label>CVV</Form.Label>
                <Form.Control type="text" pattern="\d{3}" placeholder="Enter 3-digit CVV" required />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default CreditCardForm;
