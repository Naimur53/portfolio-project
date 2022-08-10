import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import { allData } from '../../dataSlice/dataSlice';
import { toast } from 'react-toastify';
const CategoryCard = ({ admin, i, _id, thumbnail, title, description, categoryName, photos, subCategory, setAlldata }) => {
    const [loading, setLoading] = useState(false);
    console.log(i);
    const { user } = useSelector(allData)
    const handleDelete = () => {
        if (user?.email) {
            if (window.confirm('Are you sure to delete this category')) {
                setLoading(true);
                axios.delete(`https://stark-atoll-95180.herokuapp.com/category?id=${_id}`, {
                    headers: {
                        authorization: 'Bearer ' + localStorage.getItem('idToken')
                    },
                    data: {
                        user: user?.email
                    }
                })
                    .then(res => {
                        setAlldata(be => be._id !== _id)
                        setLoading(false)
                        toast.success(' Successfully Updated', {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    })
                    .catch(e => {
                        setLoading(false)
                        console.log(e.response?.data?.error);
                        if (e.response?.data?.error === 'UnAuthorize') {

                            toast.error('UnAuthorize try to reload or re-login to the site ' + e.message, {
                                position: "bottom-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                        } else {
                            toast.error('Something bad happened when post the blog' + e.message, {
                                position: "bottom-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                        }
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
                                    <h1 className='text-lg font-thin  text-white' >{description?.length >= 250 ? description.slice(0, 250) + '...see more' : description.slice(0, 250)}</h1>
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
                    {loading ? <CircularProgress sx={{ color: 'white' }} /> : <div className=''>
                        <button onClick={() => handleDelete()} className='text-red-500 border border-red-500 mr-4 px-4 p-2 mt-2 '>Delete</button>
                        <Link href={'/dashboard/updateCategory/' + _id}>
                            <button className='text-green-500 border border-green-500 mr-4 px-4 p-2 mt-2'>Update</button>
                        </Link>

                    </div>}
                </div>
            }
        </motion.div>
    );
};

export default CategoryCard;