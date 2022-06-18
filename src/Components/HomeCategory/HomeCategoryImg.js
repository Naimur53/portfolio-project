import { Link } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const HomeCategoryImg = ({ title, thumbnail, _id }) => {

    return (
        <Link href={'/category/' + _id} className='overflow-hidden   block text-gray-50 transition duration-300 brightness-50 hover:brightness-100 grayscale hover:grayscale-0 no-underline hover:no-underline  pb-20 w-full relative'>

            <Image priority width={200} height={200} layout={'raw'} src={thumbnail} className=' block w-full  ' alt='Image' ></Image>
            <div className=" pointer-events-none  w-full">
                <h2>

                    {title.slice(0, 40)}
                </h2>
            </div>

        </Link>
    );
};

export default HomeCategoryImg;