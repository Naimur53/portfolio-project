import { Link } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const HomeCategoryImg = ({ thumbnail, _id }) => {

    return (
        <Link href={'/' + _id} className='overflow-hidden block text-gray-50 transition duration-300 brightness-50 hover:brightness-100 grayscale hover:grayscale-0  pb-20 w-full relative'>
            <div className='w-full h-full'>
                <Image priority width={200} height={200} layout={'raw'} src={thumbnail} className=' block w-full js' alt='Image' ></Image>
            </div>
            <div className="absolute s pointer-events-none 	w-full">
                Lorem ipsum dolor sit amet consectetur,
            </div>
        </Link>
    );
};

export default HomeCategoryImg;