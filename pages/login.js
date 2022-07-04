import { CircularProgress } from '@mui/material';
import Image from 'next/image';
import Router, { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';
import { allData } from '../src/dataSlice/dataSlice';
import useFirebase from '../src/hooks/useFirebase';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
    const { google, loading, logOut } = useFirebase()
    const route = useRouter()
    const handleClick = () => {
        google()
    }
    const { user } = useSelector(allData)
    if (loading) {
        return <div className='h-screen flex justify-center items-center'>
            <CircularProgress color='inherit'></CircularProgress>
        </div>
    }
    return (
        <div className='h-screen flex justify-center items-center'>
            {
                !user.email ? <div onClick={handleClick}>
                    <div className='g-sign-in-button'>
                        <div className='content-wrapper' >
                            <div className='logo-wrapper'>
                                <Image width={200} priority layout='raw' height={200} raw alt='Google logo' src='https://i.ibb.co/yX16csP/g-logo.png' />
                            </div>
                            <div className='text-container'>
                                <span>Sign in with Google</span>
                            </div>
                        </div >
                    </div >
                </div > : <div>
                    <h2> You are logged in want to <span className='text-red-500 underline cursor-pointer' onClick={() => logOut()}>Logout</span>?</h2>
                </div>
            }
        </div >
    );
};

export default Login;