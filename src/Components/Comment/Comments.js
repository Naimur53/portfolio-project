import { Avatar, Grid } from '@mui/material';
import React from 'react';

const Comments = ({ data, small }) => {
    return (
        <div className='mb-5'>
            <Grid container >
                <Grid xs={2} md={1}>
                    <div className=''>
                        <Avatar src={data.user.photoUrl}></Avatar>
                    </div>

                </Grid>
                <Grid xs={10} md={11}>
                    <div className={` ${small ? 'px-4 pb-4' : 'border p-4'} border-gray-700`}>
                        <div className={small ? '' : 'pb-4'}>
                            <h1 className='mb-1 text-gray-400'>{data.user.displayName}</h1>
                            <h6 className='text-sm text-gray-400 font-light '>{data.date}</h6>
                        </div>
                        {
                            !small && <hr className='border-gray-800' />
                        }

                        <div className={`${small ? 'mt-2' : 'mt-5'} text-gray-300`}>
                            <p>{small ? data.comment.slice(0, 200) : data.comment}</p>
                        </div>
                    </div>

                </Grid>

            </Grid>
            {small && <hr className='border-gray-800' />}
        </div>
    );
};

export default Comments;