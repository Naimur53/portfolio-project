import { Avatar, Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Comments = ({ data, small }) => {
    console.log(data)
    return (
        <div className='mb-5 font-family-mono'>
            <Grid container >
                <Grid xs={2} md={1}>
                    <div className='px-1 md:p-0'>
                        {
                            data.user?.photoURL ? <Image className='rounded-full' src={data.user.photoURL} width={50} height={50} alt='dfdf'></Image> : <Avatar></Avatar>
                        }
                    </div>

                </Grid>
                <Grid xs={10} md={11}>
                    <div className={` ${small ? 'px-4 pb-4' : 'border p-4'} border-gray-700`}>
                        <div className={small ? '' : 'pb-4'}>
                            <h1 className='mb-1 text-heading'>{data.user?.displayName}</h1>
                            <h6 className='text-sm text-subTitles'>{data.date ? new Date(data.date).toDateString() : (
                                new Date(data.time).toLocaleTimeString()
                                + " " + new Date(data.time).toDateString()
                            )}</h6>
                        </div>
                        {
                            !small && <hr className='border-gray-800' />
                        }

                        <div className={`${small ? 'mt-2 text-sm' : 'mt-5'} text-subTitles text-xl`}>
                            <p>{small ? data.comment?.slice(0, 100) : data.comment}</p>
                        </div>
                    </div>

                </Grid>

            </Grid>
            {small && <hr className='border-gray-800' />}
        </div>
    );
};

export default Comments;