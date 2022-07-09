import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { CircularProgress } from '@mui/material';

const CategoryCard = ({ admin, i, _id, thumbnail, title, description, categoryName, photos, subCategory }) => {
    const [loading, setLoading] = useState(false);
    console.log(i);
    const handleDelete = () => {
        if (window.confirm('Are you sure to delete this category')) {
            setLoading(true);
            axios.delete(`https://stark-atoll-95180.herokuapp.com/category?id=${_id}`)
                .then(res => {
                    setLoading(false)
                })

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
        <motion.div className={loading ? 'grayscale' : ''} initial="initial" animate="animate" exit='initial' variants={popIn} >
            <div className="category-card-wrap cursor-pointer overflow-hidden">
                <Link href={'/category/' + _id}>
                    <div className='relative'>
                        <div className='relative' >
                            <Image className='w-full cursor-pointer category-card-img h-auto' src={thumbnail} height={500} width={400} alt={title}></Image>
                            <div style={{ background: '#0000009a' }} className='absolute category-text-wrap backdrop-blur-sm  flex items-end inset-0 z-10' >
                                <div className=' p-4'>
                                    <h1 className='text-lg  ' >{title.slice(0, 100)}</h1>
                                    {/* <p>{description.slice(0, 30)}</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-0">
                            <div className='bg-black mt-2 inline-block  p-2'>
                                <h1 className='text-xl font-family-allerta '>{categoryName} {subCategory && <span>- {subCategory}</span>}</h1>
                            </div>
                        </div>

                    </div>
                </Link>
                {
                    admin && <div>
                        {loading ? <CircularProgress /> : <button onClick={() => handleDelete()} className='bg-red-900 px-5 py-2 mt-2 rounded'>Delete</button>}
                    </div>
                }
            </div>
        </motion.div>
    );
};

export default CategoryCard;