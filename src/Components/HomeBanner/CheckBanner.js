import React, { useEffect, useState } from 'react';

const CheckBanner = () => {
    const [letter, setLetter] = useState('J');
    const [i, setI] = useState(0);
    useEffect(() => {

    }, [])
    const letters = 'JOHN'
    setTimeout(() => {
        setLetter(letters[i]);
        if (i === 3) {
            setI(0)
        } else {
            setI(i + 1)
        }
    }, 1000)
    return (
        <div className='flex justify-center h-full align-center'>
            <span className='letter select-none	' style={{ lineHeight: '1', fontSize: '600px', fontWeight: 'bold' }}>{letter}</span>
        </div>
    );
};

export default CheckBanner;