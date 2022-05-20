import { Avatar, Grid } from '@mui/material';
import React from 'react';

const Comments = ({ data }) => {
    return (
        <Grid container >
            <Grid md={2}>
                <Avatar src={data.user.photoUrl}></Avatar>

            </Grid>
            <Grid md={10}>
                <div className="border border-gray-600">
                    <div>
                        <h1>{data.user.displayName}</h1>
                        <h1>{data.date}</h1>
                    </div>
                </div>

            </Grid>

        </Grid>
    );
};

export default Comments;