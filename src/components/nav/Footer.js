import React from 'react';
import '../../Styles/navbarAndFooter.css'

const Footer = () => {
    return (
        <footer className="footer">
            <a href="#support">Customer Support</a> |
            <a href="#faqs">FAQs</a> |
            <a href="#terms">Terms of Service</a>
            {/* Add other links as needed */}
        </footer>
    );
};

export default Footer;
