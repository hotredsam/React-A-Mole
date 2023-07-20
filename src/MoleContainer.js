import React, { useState, useEffect } from 'react';
import Mole from './Mole';
import EmptySlot from './EmptySlot';

const MoleContainer = ({ score, setScore }) => {
    const [displayMole, setDisplayMole] = useState(Math.random() < 0.5);

    const handleClick = () => {
        if (displayMole) {
            setScore(score + 1);
            setDisplayMole(false);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setDisplayMole(!displayMole);
        }, 5000); // Change the mole display every 5 seconds

        return () => clearTimeout(timer);
    }, [displayMole]);

    return (
        <div onClick={handleClick}>
            {displayMole ? <Mole /> : <EmptySlot />}
        </div>
    );
};

export default MoleContainer;
