import Link from 'next/link';
import React from 'react';

const SingleCollection = ({ categoryName, thumbnail, _id, dropdown }) => {
    return (
        <li className='relative  cursor-pointer block '>
            <Link href={'/category/' + _id} ><span className=' block p-2 hover:bg-yellow-600'>{categoryName}</span></Link>
            {
                !dropdown?.length == 0 && <ul className='backdrop-blur bg-black'>
                    {
                        dropdown.map(single => <li className=' relative hover:bg-bottom block p-2 hover:bg-yellow-600' key={single._id}>
                            <Link href={'/category/' + single._id} ><span className=' block p-2 hover:bg-yellow-600'>{single.categoryName}-{single.subCategory}</span></Link>

                        </li>)
                    }
                </ul>
            }

        </li>
    );
};

export default SingleCollection;