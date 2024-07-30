import React, { useState, useCallback } from 'react';
import Toast from 'react-bootstrap/Toast';
import { Container, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//Funtion Component
function PassGene() {
    // State to hold the generated password and to control the visibility of the toast
    const [password, setPassword] = useState('');
    const [showToast, setShowToast] = useState(0);

    const generatePassword = useCallback((length) => {
        const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const numberChars = '0123456789';
        const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
        const allChars = upperCaseChars + lowerCaseChars + numberChars + specialChars;
        let password = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            password += allChars[randomIndex];
        }
        return password;
    }, []);

    const handleGenerate = () => {
        const length = parseInt(document.getElementById('length').value) || 12;
        const newPassword = generatePassword(length);
        setPassword(newPassword);
        setShowToast(1);
    };

    return (
        <Container className="mx-6 mt-4">
            <Col md={6}>
                <h1>Random Password Generator</h1>
                <div className="mb-3">
                    <label htmlFor="length">Password Length:</label>
                    <input
                        type="number"
                        id="length"
                        defaultValue="12"
                        min="1"
                        max="50"
                        style={{ width: '100%' }}
                    />
                </div>
                <Button onClick={handleGenerate} className='bg-danger' >
                    Generate Password
                </Button>

            </Col>
            <Col md={6}>
                <Toast
                    onClose={() => setShowToast(false)}
                    show={showToast}
                    delay={8000} // Toast will hide after 8 seconds
                    autohide
                >
                    <Toast.Header>
                        <strong className="me-auto">Your Password</strong>
                    </Toast.Header>
                    <Toast.Body>
                        {password || 'No password generated yet'}
                    </Toast.Body>
                </Toast>
            </Col>
        </Container>
    );
}

export default PassGene;
