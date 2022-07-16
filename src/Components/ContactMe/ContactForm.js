import React from 'react';
import { useForm } from 'react-hook-form';
import { Grid } from '@mui/material';
import axios from 'axios';
import MgButton from '../SmallComponents/MgButton';
import { toast } from 'react-toastify';

const ContactForm = () => {
    const { register, unregister, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        axios.post('https://stark-atoll-95180.herokuapp.com/sendMail', { ...data, subject: `${data.displayName} try to contact you` })
            .then(res => {
                console.log(res);
                if (res.data.res !== 'error') {
                    toast.success('Message Send Successfully', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    }); 675.
                }
                else {
                    toast.error('Error to send message', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    }); 675.
                }
            })

        reset();
    }
    return (
        <div>
            <form id='contact' onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={4}>
                    <Grid item md={6} xs={12}>
                        <input type="text"  {...register("displayName", { required: true })} placeholder='Your Name*' className='px-4 py-2 inline-block w-full border border-gray-50 rounded bg-black placeholder:text-gray-100' />

                    </Grid>
                    <Grid item md={6} xs={12}>
                        <input type="email" placeholder='Your Email*' {...register("email", { required: true })} className='px-4 py-2 inline-block w-full border border-gray-50 rounded bg-black placeholder:text-gray-100' />
                    </Grid>
                    <Grid item xs={12}>
                        <textarea placeholder='Your Message*' {...register("comment", { required: true })} className='px-4 mb-3 py-2 inline-block w-full border border-gray-50 rounded bg-black placeholder:text-gray-100  md:hidden ' cols="10" rows="5"></textarea>
                        <textarea placeholder='Your Message*' {...register("comment", { required: true })} className='px-4 mb-3 hidden md:block py-2  w-full border border-gray-50 rounded bg-black placeholder:text-gray-100' cols="10" rows="8"></textarea>
                    </Grid>
                </Grid>
                <div className='flex justify-between'>
                    <MgButton buttonProps={{ type: 'submit' }} text='Submit'></MgButton>

                </div>

            </form>
        </div >
    );
};

export default ContactForm;