import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PhoneCollection from './PhoneCollection';
import SingleCollection from './SingleCollection';

const Collection = ({ phone }) => {
    const [menuData, setMenuData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/chooseMenu').then(res => {
            setMenuData(res.data)
        })
    }, [])
    console.log(menuData);

    if (phone) {
        return <PhoneCollection data={menuData}></PhoneCollection>
    }
    return (
        <div className='relative  menu-collection-wrap  bg-black '>
            <ul className='backdrop-blur visible collection-main'>
                {
                    menuData.map(single => <SingleCollection key={single._id} {...single}></SingleCollection>)
                }
            </ul>
        </div>
    );
};

export default Collection;