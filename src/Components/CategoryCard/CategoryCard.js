import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import { allData } from '../../dataSlice/dataSlice';

const CategoryCard = ({ admin, i, _id, thumbnail, title, description, categoryName, photos, subCategory }) => {
    const [loading, setLoading] = useState(false);
    console.log(i);
    const { user } = useSelector(allData)
    const handleDelete = () => {
        if (user?.email) {
            if (window.confirm('Are you sure to delete this category')) {
                setLoading(true);
                axios.delete(`http://localhost:5000/category?id=${_id}`, {
                    headers: {
                        authorization: 'Bearer ' + localStorage.getItem('idToken')
                    },
                    data: {
                        user: user.email
                    }
                })
                    .then(res => {
                        setLoading(false)
                    })

            }
        }

    }
    const popIn = {
        initial: {
            scale: 1.1,
            opacity: 0
        },

        animate: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: i * .2
            }
        }
    }

    return (
        <motion.div className={loading ? 'grayscale pb-2' : 'pb-2'} initial="initial" animate="animate" exit='initial' variants={popIn} >
            <div className="category-card-wrap cursor-pointer overflow-hidden">
                <Link href={'/category/' + _id}>
                    <div className='relative h-full'>
                        <div className='relative ' >
                            <Image className='w-full cursor-pointer category-card-img h-auto' src={thumbnail} layout='raw' width={1000} height={1000} alt={title}></Image>
                            <div style={{ background: '#0000009a' }} className='absolute category-text-wrap backdrop-blur-sm  flex items-end inset-0 z-10' >
                                <div className=' p-4'>
                                    <h1 className='text-lg  text-white' >{title.slice(0, 100)}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-0">
                            <div className='bg-black mt-2 inline-block  p-2'>
                                <h1 className='  font-family-Helvetica  text-heading font-thin tracking-widest'>{categoryName} {subCategory && <span>- {subCategory}</span>}</h1>
                            </div>
                        </div>

                    </div>
                </Link>

            </div>
            {
                admin && <div className='mt-2'>
                    {loading ? <CircularProgress /> : <button onClick={() => handleDelete()} className='bg-red-900 px-5 py-2 mt-2 rounded  text-white'>Delete</button>}
                </div>
            }
        </motion.div>
    );
};

export default CategoryCard;