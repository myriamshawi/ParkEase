import React, { useState } from 'react';
import Swal from 'sweetalert2';
import '../../Styles/FeedbackForm.css';


const FeedbackForm = () => {
    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Process feedback submission logic here (e.g., send to a server)

        // Display SweetAlert2 message
        Swal.fire({
            title: 'Thank you!',
            text: 'Thank you for your feedback!',
            icon: 'success',
            confirmButtonText: 'Ok'
        }).then(() => {
            // Reset feedback form
            setRating(0);
            setFeedback('');
        });
    };

    return (
        <form onSubmit={handleSubmit} className="feedback-form">
            <h2>Leave Feedback</h2>
            <div className="rating">
                {/* Implement a star rating or thumbs up/down component */}
            </div>
            <textarea
                value={feedback}
                onChange={e => setFeedback(e.target.value)}
                placeholder="Write your feedback here..."
            />
            <button type="submit">Submit Feedback</button>
        </form>
    );
};

export default FeedbackForm;

