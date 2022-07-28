import Image from 'next/image';
import React from 'react';

const UpadateImage = ({ url }) => {
    return (
        <div>
            <Image src={url} width={400} height={500} alt='image'></Image>
        </div>
    );
};

export default UpadateImage;