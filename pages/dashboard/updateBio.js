import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router';
import { Avatar, CircularProgress, IconButton } from '@mui/material';
import { useForm } from 'react-hook-form';
import ClearIcon from '@mui/icons-material/Clear';
import { toast } from 'react-toastify';
import axios from 'axios';
import fetcher from '../../src/util/fatcher';
import { allData } from '../../src/dataSlice/dataSlice';
import BlogSectionUpdate from '../../src/Components/BlogSectionUpdate/BlogSectionUpdate';
import DashboardLayout from '../../src/Layouts/DashboardLayout';
const UpdateBio = () => {
    const { user } = useSelector(allData)
    const { data: res, error } = useSWR(
        `https://stark-atoll-95180.herokuapp.com/bio`,
        fetcher
    );
    const [data, setData] = useState({})
    const [upLoading, setUpLoading] = useState(false);
    const [imgLoading, setImgLoading] = useState(false);
    const { register, unregister, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm({ shouldUnregister: false });

    useEffect(() => {
        if (res?._id) {
            setData(res)
            setValue('tags', res.tags)
        }
    }, [res, setValue])



    if (!data?._id) {
        return <div className='flex justify-center' >
            <CircularProgress color='inherit' sx={{ color: 'white' }}></CircularProgress>
        </div>
    }



    //handle from submit 
    const onSubmit = (mainData) => {

        setUpLoading(true)
        let createSection = [];
        data.sections.forEach((element, i) => {
            const singleSection = {
                ...data.sections[i],
                description: mainData['description' + i],
                title: mainData['title' + i],
                url: mainData['url' + i],
            }
            createSection = [...createSection, singleSection]
        });

        const create = {
            ...data,
            description: mainData.description,
            heading: mainData.heading,
            sections: createSection,
        }
        axios.put(`https://stark-atoll-95180.herokuapp.com/bio?id=${data._id}`, { mainData: create, user: user?.email }, {
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('idToken')
            },
        }).then(res => {
            setUpLoading(false)
            toast.success('Successfully post the blog', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

        })
            .catch(e => {
                setUpLoading(false)

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
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input type="text" {...register("heading", { required: true })} defaultValue={data.heading} className=' text bg-transparent   text-xl md:text-3xl text-center text-heading font-family-mono font-thin border-white block w-full px-4  py-2' />

                </div>
                <div>
                    <textarea type="text" defaultValue={data.description} {...register("description", { required: true })} className='text-white bg-transparent   border-white block w-full px-4  py-2' cols='5' rows='5' />

                </div>
                {
                    data?.sections.map((single, i) => <BlogSectionUpdate key={i} setData={setData} index={i} register={register} {...single}></BlogSectionUpdate>)
                }
                <div>

                    <button className='hidden ' id='submit'>submit</button>
                </div>


            </form>
            {
                upLoading ? <CircularProgress color='inherit' sx={{ color: 'white' }}></CircularProgress> : <label htmlFor="submit" className='text-yellow-500 inline-block px-4 py-2 mt-5 border border-yellow-500' type='submit'>Update blog</label>
            }
        </div>
    );
};
UpdateBio.Layout = DashboardLayout;
export default UpdateBio;
