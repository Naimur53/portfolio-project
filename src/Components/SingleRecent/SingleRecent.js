import { Avatar, Grid } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const SingleRecent = ({ data }) => {
    console.log(data);
    return (
        <Link href={`/blogs/${data._id}`}>
            <div className='pr-3 cursor-pointer'>
                <div className='pb-5 flex mt-5'>
                    <div className='mr-4'>
                        <Avatar src={data.img} alt="blog " sx={{
                            width: 60, height: 60
                        }}></Avatar>
                    </div>
                    <div className='font-family-mono'>
                        <h1 className='text-sm   text-gray-300'>{data.heading}</h1>
                        <h1 className='text-sm  text-gray-400'>Malysiha Bankok</h1>
                        <h3 className='font-light text-xs text-gray-400'>{new Date(data.date).toDateString()}</h3>
                    </div>
                </div>
                <hr className='border-gray-800' />
            </div>
        </Link>
    );
};

export default SingleRecent;