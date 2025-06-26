import React, { useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import WaitlistForm from '../components/WaitlistForm';
import FeatureIcons from '../components/FeatureIcons';
import './HomePage.css';

const HomePage = () => {
    const featuresRef = useRef(null);
    const inputRef = useRef(null);
    const [showFeatures, setShowFeatures] = useState(false);

    const scrollToFeatures = () => {
        setShowFeatures(true);
        setTimeout(() => {
            if (featuresRef.current) {
                featuresRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }, 50);
    };

    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div className="home-page-container">
            <Navbar onJoinWaitlistClick={focusInput} />
            <div className="content">
                <h1>
                    Outsmart <span className="gradient-text">everything</span>
                </h1>
                <h2>
                    Everything <a href="https://cluely.com" target="_blank" rel="noopener noreferrer" className="cluely-link">Cluely</a> does, but <span className="green-text">built to give you more control, not more costs</span>
                </h2>
                <p className="subtitle">Excited? We are too. Join the waitlist!</p>
                <WaitlistForm inputRef={inputRef} />
                <div className="footer-notes">
                    <p><span className="green-dot"></span>Undetectable on screen shares</p>
                    <p><span className="blue-dot"></span> Always accessible</p>
                </div>
                <button className="see-features-btn" onClick={scrollToFeatures}>
                    See Features
                </button>
            </div>
            <div ref={featuresRef}>
                {showFeatures && <FeatureIcons />}
            </div>
        </div>
    );
};

export default HomePage; 