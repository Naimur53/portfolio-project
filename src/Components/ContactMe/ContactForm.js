import React from 'react';
import { useForm } from 'react-hook-form';
import { Grid } from '@mui/material';
import axios from 'axios';

const ContactForm = () => {
    const { register, unregister, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        axios.post('http://localhost:5000/sendMail', data)


    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={4}>
                    <Grid item md={6} xs={12}>
                        <input type="text"  {...register("displayName", { required: true })} placeholder='Your Name*' className='px-4 py-2 inline-block w-full border border-gray-500 rounded bg-gray-900  ' />

                    </Grid>
                    <Grid item md={6} xs={12}>
                        <input type="email" placeholder='Your Email*' {...register("email", { required: true })} className='px-4 py-2 inline-block w-full border border-gray-500 rounded bg-gray-900  ' />
                    </Grid>
                    <Grid item xs={12}>
                        <textarea placeholder='Your Comment*' {...register("comment", { required: true })} className='px-4 mb-3 py-2 inline-block w-full border border-gray-500 rounded bg-gray-900  ' cols="30" rows="10"></textarea>
                    </Grid>
                </Grid>
                <div className='flex justify-between'>
                    <button type='submit' className='bg-yellow-400  font-bold px-5 py-2 rounded text-gray-900'>Submit </button>

                </div>

            </form>
        </div >
    );
};

export default ContactForm;