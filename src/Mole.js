import React, { useEffect } from 'react';
import mole from './images/mole.png';

const Mole = () => {

    useEffect(() => {
        const timer = setTimeout(() => {
           
        }, 5000); 

        return () => clearTimeout(timer);
    }, []); 

    return (
        <div>
            <img src={mole} alt="mole" />
        </div>
    );
};

export default Mole;
