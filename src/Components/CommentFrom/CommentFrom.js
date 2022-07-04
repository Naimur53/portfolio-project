import { CircularProgress, Grid } from '@mui/material';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addComments, allData } from '../../dataSlice/dataSlice';
import useFirebase from '../../hooks/useFirebase';
const CommentFrom = () => {
    const { register, unregister, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm();
    const { blogDetails, user } = useSelector(allData)
    const dispatch = useDispatch()
    const { google, loading, logOut } = useFirebase()
    // console.log(google);
    const onSubmit = data => {

        //verify
        if (!user.email) {
            alert('User error')
            return
        }
        //next step 
        // user: userSchema,
        // date: {
        //     type: Date,
        //     default: new Date(),
        // },
        // comment: String
        const { displayName, email, comment } = data;
        const mainData = {
            user,
            comment,
        }
        console.log(mainData);
        axios.put(`http://localhost:5000/blog/comment?id=${blogDetails._id}`, mainData)
            .then(res => {
                console.log(res);
            })
        dispatch(addComments({ ...mainData, date: new Date() }))

        axios.post('http://localhost:5000/sendMail', { ...user, comment, subject: `${user?.displayName} comment on your blog name ${blogDetails.heading}` })

        reset()
    }
    const handleClick = () => {
        console.log('done');
        google()
    }
    useEffect(() => {
        if (user.email) {
            setValue('displayName', user.displayName)
            setValue('email', user.email)
        }
    }, [user])

    return (
        <div id='commentlogin' className='relative p-4 border rounded-xl border-gray-600 '>
            <h1 className='text-2xl mb-5 '>Leave a comment</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={4}>
                    <Grid item md={6} xs={12}>
                        <input readOnly type="text" defaultValue={user.displayName} {...register("displayName", { required: true })} placeholder='Your Name*' className='px-4 py-2 inline-block w-full border border-gray-500 rounded-xl bg-gray-900  ' />

                    </Grid>
                    <Grid item md={6} xs={12}>
                        <input readOnly type="email" defaultValue={user?.email} placeholder='Your Email*' {...register("email", { required: true })} className='px-4 py-2 inline-block w-full border border-gray-500 rounded-xl bg-gray-900  ' />
                    </Grid>
                    <Grid item xs={12}>
                        <textarea placeholder='Your Comment*' {...register("comment", { required: true })} className='px-4 mb-3 py-2 inline-block w-full border border-gray-500 rounded-xl bg-gray-900  ' cols="30" rows="10"></textarea>
                    </Grid>
                </Grid>
                <div className='flex justify-between'>

                    {
                        user.email ? <button type='submit' className='bg-yellow-400 font-bold px-5 py-2 rounded-xl text-gray-900'>Submit Comment</button> : <button className='bg-yellow-400 font-bold px-5 py-2 rounded-xl text-gray-900'>First Login</button>
                    }
                    {
                        user.email && <button onClick={() => logOut()} className='bg-red-500 font-bold px-5 py-2 rounded-xl text-gray-50'>Logout</button>
                    }
                </div>

            </form>
            {
                !user.email && <div className='absolute  inset-0 backdrop-blur-sm flex justify-center items-center '>

                    {
                        loading ? <div className="flex">
                            <CircularProgress color="inherit"></CircularProgress>
                        </div> : <div onClick={handleClick}>
                            <div className='g-sign-in-button'>
                                <div className='content-wrapper'>
                                    <div className='logo-wrapper'>
                                        <Image width={200} priority layout='raw' height={200} raw alt='Google logo' src='https://i.ibb.co/yX16csP/g-logo.png' />
                                    </div>
                                    <div className='text-container'>
                                        <span>Sign in with Google</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                </div>
            }
        </div >
    );
};

export default CommentFrom;