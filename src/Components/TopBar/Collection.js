import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleCollection from './SingleCollection';
const Collection = ({ data }) => {
    return (
        <div className='relative  menu-collection-wrap  bg-black '>
            <ul className='backdrop-blur visible collection-main'>
                {
                    data?.map(single => <SingleCollection key={single._id} {...single}></SingleCollection>)
                }
            </ul>
        </div>
    );
};

export default Collection;