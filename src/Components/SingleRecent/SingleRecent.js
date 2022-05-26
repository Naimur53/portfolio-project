import { Avatar, Grid } from '@mui/material';
import React from 'react';

const SingleRecent = ({ data }) => {
    return (
        <div className='pr-3'>
            <div className='pb-5 flex mt-5'>
                <div className='mr-4'>
                    <Avatar src={data.mainSection.img} alt="blog " sx={{
                        width: 60, height: 60
                    }}></Avatar>
                </div>
                <div>
                    <h1 className='text-xl text-gray-300'>{data.mainSection.heading}</h1>
                    <h3 className='font-light text-gray-300'>{data.mainSection.date}</h3>
                </div>
            </div>
            <hr className='border-gray-800' />
        </div>
    );
};

export default SingleRecent;