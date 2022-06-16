import Image from 'next/image';
import React from 'react';

const CategorySingleImg = ({ url }) => {
    return (
        <div className='pb-4 '>
            <Image className='w-full ' priority layout='raw' src={url} height={200} width={200} alt='photo'></Image>
        </div>
    );
};

export default CategorySingleImg;