import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/landing.css';
import Menu from './Menu';
import Button from './Button';
import DisplaySquares from './DisplaySquares';
import DisplayImages from './DisplayImages';
import landingSquare from '../utils/landingSquares';
import landingImages from '../utils/landingImages';

function Landing() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact');
        window.scrollTo(0, 0);
    };

    return (
        <div className="landing-container">
            <Menu />
            <div className="landing-content">
                <h1 className="landing-title">
                    <span className="part-1">Twoja wizja</span>
                    <span className="part-2">moja kreatywność</span>
                    <span className="part-3">stworzę Twój ślad w sieci</span>
                </h1>
                <Button nextClass="landing-btn" onClick={handleClick}>
                    kontakt
                </Button>
            </div>
            <DisplaySquares elements={landingSquare} />
            <DisplayImages elements={landingImages} />
        </div>
    );
}

export default Landing;
