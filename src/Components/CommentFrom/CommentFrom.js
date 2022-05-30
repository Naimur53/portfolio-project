import { Grid } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

const CommentFrom = () => {
    const { register, unregister, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    const handleClick = () => {
        console.log('done');
    }
    return (
        <div id='commentlogin' className='relative p-4 border rounded-xl border-gray-600 '>
            <h1 className='text-2xl mb-5 '>Leave a comment</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={4}>
                    <Grid item md={6} xs={12}>
                        <input type="text" placeholder='Your Name*' className='px-2 py-2 inline-block w-full border border-gray-500 rounded-xl bg-gray-900  ' />

                    </Grid>
                    <Grid item md={6} xs={12}>
                        <input type="email" placeholder='Your Email*' className='px-2 py-2 inline-block w-full border border-gray-500 rounded-xl bg-gray-900  ' />
                    </Grid>
                    <Grid item xs={12}>
                        <textarea placeholder='Your Comment*' className='px-2 py-2 inline-block w-full border border-gray-500 rounded-xl bg-gray-900  ' cols="30" rows="10"></textarea>
                    </Grid>
                </Grid>
                <button className='bg-yellow-400 font-bold px-5 py-2 rounded-xl text-gray-900'>Submit Comment</button>
            </form>
            <div className='absolute  inset-0 backdrop-blur-sm flex justify-center items-center		'>
                <button onClick={handleClick}>
                    <div className='g-sign-in-button'>
                        <div className='content-wrapper'>
                            <div className='logo-wrapper'>
                                <img src='https://developers.google.com/identity/images/g-logo.png' />
                            </div>
                            <span className='text-container'>
                                <span>Sign in with Google</span>
                            </span>
                        </div>
                    </div>
                </button>

            </div>
        </div>
    );
};

export default CommentFrom;