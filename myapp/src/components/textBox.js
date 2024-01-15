import React, { useState, useEffect } from 'react';

export default function TextBox() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const questions = [
        'Do you like React?',
        'Have you used React in a project?',
        'Is JavaScript your favorite language?',
        'Have you built a website before?',
        'Do you enjoy coding?'
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));

    useEffect(() => {
        const handleScroll = () => {
            const newScrollPosition = Math.max(window.scrollY, 0); // Ensure scrollPosition is not below 0
            setScrollPosition(newScrollPosition);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 

    const headerStyle = {
        padding: '20px',
        marginLeft: '40%',
        width: '40rem',
        height: '10rem',
        color: '#00008B',
        backgroundColor: scrollPosition >50? '#D3D3D3' : 'transparent',
        transition: 'background-color 0.3s ease-in-out',
    };

    const handleButtonClick2 = (response) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = response;

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }

        setAnswers(newAnswers);
    };

    const buttonStyle1 = {
        backgroundColor: 'white',
        border: '1px solid #00008B',
        borderRadius: '90%',
        padding: '13px 10px',
        margin: '30px',
        cursor: 'pointer',
    };
    const buttonStyle2 = {
        backgroundColor: 'white',
        border: '1px solid #00008B',
        borderRadius: '90%',
        padding: '13px 11px',
        margin: '44px',
        cursor: 'pointer',
    };

    return (
        <div className='Text-Outer'>
            <header style={headerStyle}>
                <h3 >{questions[currentQuestionIndex]}</h3>
                <button style={buttonStyle1} onClick={() => handleButtonClick2('Yes')}>Yes</button>
                <button style={buttonStyle2} onClick={() => handleButtonClick2('No')}>No</button>
            </header>

            <div style={{ height: '100px', marginLeft: '9rem' }}></div>

            {currentQuestionIndex === questions.length - 1 && (
                <div>
                   
                </div>
            )}
        </div>
    )
}