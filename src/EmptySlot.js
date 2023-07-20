import React, { useEffect } from 'react';
import molehill from './images/molehill.png';

const EmptySlot = () => {

    useEffect(() => {
        const timer = setTimeout(() => {
            
        }, 2000); 

        return () => clearTimeout(timer);
    }, []); 

    return (
        <div>
            <img src={molehill} alt="molehill" />
        </div>
    );
};

export default EmptySlot;
