import Image from 'next/image';
import React, { useState } from 'react';
import { useEffect } from 'react';

const SelectMenuCard = ({ thumbnail, selected, categoryName, _id, handleAdd, handleRemove, subCategory, handle }) => {
    const [status, setStatus] = useState({ active: false, num: 0 });
    useEffect(() => {
        const result = selected.find(single => single._id === _id)
        if (result?._id) {
            const index = selected.findIndex(single => single._id === _id)

            setStatus({ active: true, num: index + 1 })
        }
        else {
            setStatus({ active: false, num: 0 })

        }
    }, [selected, _id])

    const handleClick = () => {
        const result = selected.find(single => single._id === _id)

        if (result?._id) {
            handleRemove({ thumbnail, categoryName, _id })
        } else {
            handleAdd({ thumbnail, categoryName, _id })
        }
    }
    return (
        <div onClick={handleClick} className='relative cursor-pointer'>
            <Image src={thumbnail} height={400} width={400} alt={categoryName}></Image>
            {
                status.active && <div className='border border-blue-400 absolute flex justify-center items-center inset-0'>
                    <div className='rounded-full text-white  flex justify-center items-center bg-blue-500 w-20 h-20'>
                        {status.num}
                    </div>


                </div>
            }
            <div className='absolute inset-0'>
                <h2 className='bg-black p-2 inline-block text-white my-2'>
                    {categoryName}
                </h2>

            </div>
        </div >
    );
};

export default SelectMenuCard;