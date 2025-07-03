import React from 'react';
import '../css/header.css'; // Import the CSS file for styling
import { Container } from 'react-bootstrap';

const Header = () => {
    return (
        <header className="home-header">
            <Container className="header-content">
                <h1>BOOKISH BLISS</h1>
            </Container>
        </header>
    );
};

export default Header;
