import Image from 'next/image';
import React, { useState } from 'react';
import LightBox from './LightBox';
const CategorySingleImg = ({ url }) => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen);
    const handleClose = () => {
        console.log('knonck');
        setIsOpen(false)
    }
    return (
        <div className='pb-4 grid-item overflow-hidden'>
            <div className='overflow-hidden'>

                <Image onClick={() => setIsOpen(true)} className='w-full singleImg' priority layout='raw' src={url} height={200} width={200} alt='photo'></Image>
            </div>
            <LightBox
                url={url}
                isVisible={isOpen}
                onClose={handleClose}
            />
        </div>
    );
};


export default CategorySingleImg;