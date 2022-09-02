import { Avatar } from '@mui/material';
import { data } from 'autoprefixer';
import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';
import { allData } from '../../dataSlice/dataSlice';
import ShareLove from '../ShareLove/ShareLove';

const MainSection = ({ bio }) => {
    const { blogDetails } = useSelector(allData);
    return (
        <>
            {!bio && <div className='block md:flex justify-between items-center pb-5 md:pb-0'>
                <div className='pb-5 flex mt-5'>
                    <div className='mr-4'>
                        <Avatar src='https://i.ibb.co/5LwPHgJ/20190320-WEST-AFRICA-FROM-GUNJUR-TO-BASSE-2964-removebg-preview.png' alt="blog " sx={{
                            width: 40, height: 40
                        }}></Avatar>
                    </div>
                    <div className='border-l border-gray-800 pl-3'>
                        <h1 className='text-sm text-hading'>Author: John Baggen</h1>
                        <h3 className='text-sm font-light text-contentText'>{new Date(blogDetails.date).toDateString()}</h3>
                    </div>
                </div>
                <ShareLove></ShareLove>
            </div>}
            <div>
                <p className='text-contentText'>{blogDetails.description}</p>
            </div>
        </>
    );
};

export default MainSection;