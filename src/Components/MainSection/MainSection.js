import Image from 'next/image';
import React from 'react';

const MainSection = ({ data }) => {
    return (
        <div>
            <Image src={data.img} height={618} width={1060} alt='d'></Image>
            <div>
                <h1 className='text-5xl mb-2'>{data.heading}</h1>
                <h4 className='text-xl mb-3'>{data.date}</h4>
                <p>{data.description}</p>
            </div>
        </div>
    );
};

export default MainSection;