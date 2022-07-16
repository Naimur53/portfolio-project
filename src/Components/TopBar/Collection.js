import axios from 'axios';
import React, { useEffect, useState } from 'react';
import fetcher from '../../util/fatcher';
import PhoneCollection from './PhoneCollection';
import SingleCollection from './SingleCollection';
import useSWR from 'swr'
const Collection = ({ phone }) => {
    const { data, error } = useSWR(
        "https://stark-atoll-95180.herokuapp.com/chooseMenu",
        fetcher
    );
    // useEffect(() => {
    //     axios.get('https://stark-atoll-95180.herokuapp.com/chooseMenu').then(res => {
    //         setMenuData(res.data)
    //     })
    // }, [])
    console.log(data);

    if (phone) {
        return <PhoneCollection data={data}></PhoneCollection>
    }
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