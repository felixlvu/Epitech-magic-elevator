import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SlideButton from 'react-slide-button';
import './dashboardPage.css';

const DashboardPage = () => {
    const [reset, setReset] = useState(0);

    const handleSubmit = async () => {
        const response = await fetch('http://localhost:4242/elevate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            console.log("elevator call");
        } else {
            alert('Erreur d\'authentification');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <main className='dashboard-background'>
                <div className='dashboard-title-container'>
                  <div className='dashboard-title-text-container'>
                    <h1 className='dashboard-title-text-n1'>Automatic</h1>
                    <h1 className='dashboard-title-text-n2'>Epitech</h1>
                    <h1 className='dashboard-title-text-n3'>Elevator</h1>
                  </div>
                  <div className='dashboard-title-contributor-container'>
                  </div>
                </div>
                <div className='dashboard-button-slide-container'>
                <SlideButton
                    mainText="Call elevator"
                    overlayText=""
                    classList="slide-button-container"
                    caretClassList="slide-button-bar-icon"
                    overlayClassList="slide-button-bar"
                    onSlideDone={() => {
                        handleSubmit()
                    }}
                />
                </div>
                <div className='dashboard-button-container'>
                    <div className='dashboard-credit-container'>
                        <h1 className='dashboard-credit-text'>Vous pouvez prendre l'ascenseur.</h1>
                        <h1 className='dashboard-credit-subtext'>Il vous reste 1 crédit.</h1>
                    </div>
                    <h1 className='dashboard-button-info-text'>Vous obtenez 2 crédits d'ascenseur par jour.</h1>
                </div>
            </main>
        </form>
    );
}

export default DashboardPage;