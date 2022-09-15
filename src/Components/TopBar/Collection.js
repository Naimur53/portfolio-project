import { CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleCollection from './SingleCollection';
const Collection = ({ data }) => {
    return (
        <div className='relative  menu-collection-wrap  bg-black '>
            <ul className='backdrop-blur visible collection-main'>
                {
                    data?.length ? data?.map(single => <SingleCollection key={single._id} {...single}></SingleCollection>) : <li >
                        <div className='flex ml-5 '>

                            <CircularProgress sx={{ color: 'white' }}></CircularProgress>
                        </div>
                    </li>
                }
            </ul>
        </div>
    );
};

export default Collection;