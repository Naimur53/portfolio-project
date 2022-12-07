import { Button, CircularProgress, Container, Drawer, Grid, IconButton, TextField, Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';
import { toast } from 'react-toastify';

// const a = {
//     title: "The disappointment comes at home. ",
//     img: [{ title: 'Ait Ben Haddou  Morocco: A first attempt under poor light conditions', url: 'https://i.ibb.co/hVm9s2y/20161021-AIT-BEN-HABBOU-351-Pano-1200x406.jpg' }],
//     video: "",
//     description: "I have a few golden rules. One of these rules, ‘Don’t try to organize, be on time and stay until you are completely satisfied.’ So I was on time. Sunset was expected around 7:30 and I was there at five. Camera tripod set up and the Nikon D5 on it. New pack of Marlboro in my pocket for the usual ‘Time killing smoking’. Slowly, bit by bit I see the light change. At that moment the light plan starts in my head. I take in some reference points. When the sun goes down there …. that is my moment. I do some spot measurements and light up another Marlboro. Just wait, this is going to be all right."
// }


const CreateBlogSection = ({ errors, unregister, handleComplete, setPhotosLoading, photosLoading, singleSec, register, setValue, watch, handleDelete, setVideoLoading, videoLoading }) => {
    let handleChange = watch(`photosFile${singleSec.num}`);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenVideo, setIsOpenVideo] = useState(false);

    //handle complete 
    useEffect(() => {
        if (
            watch(`title${singleSec.num}`) && watch(`description${singleSec.num}`)
        ) {

            handleComplete(singleSec.num, true);
        }
    }, [watch(`title${singleSec.num}`), watch(`description${singleSec.num}`), watch(`photosFile${singleSec.num}`), watch(`file${singleSec.num}`)]);


    // photos file upload 
    const handlePhotosFile = e => {
        const file = e.target.files;
        // 
        if (file?.length) {
            setPhotosLoading(true)
            const main = Object.values(file).map(singleFile => {
                let body = new FormData()
                body.set('key', process.env.NEXT_PUBLIC_IMAGEBB_API)
                body.append('image', singleFile)
                return axios({
                    method: 'post',
                    url: 'https://jhon-portfolio-server-production.up.railway.app/uplaodImage',
                    data: body
                })
            })
            Promise.all(main)
                .then(res => {

                    const allUrl = res.map(singleRes => {
                        return {
                            url: singleRes.data.data?.url,
                            title: '',
                        }
                    })
                    setValue(`img${singleSec.num}`, allUrl);


                })
                .catch(e => {
                    toast.error('Unknown error happen in multiple image upload', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setValue(`img${singleSec.num}`, []);
                    setValue(`photosFile${singleSec.num}`, []);

                })
                .finally(() => {
                    setPhotosLoading(false);
                })
        }
    }
    //handle video upload 
    const handleVideoUpload = (e) => {
        const file = e.target.files;
        if (file?.length) {
            setVideoLoading(true)
            let formData = new FormData();
            formData.append("video", file[0]);

            // sending to api
            axios.post('https://jhon-portfolio-server-production.up.railway.app/video', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(res => {

                    setValue(`video${singleSec.num}`, res.data.url)
                    setVideoLoading(false)
                })
                .catch(e => {
                    toast.error('Error to uploading a video', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });

                    setValue(`file${singleSec.num}`, []);
                    setValue(`video${singleSec.num}`, '');
                    setVideoLoading(false)
                })
        }

    };
    const handleTitleChange = (value, i) => {
        const old = watch(`img${singleSec.num}`)
        old[i].title = value;
        setValue(`img${singleSec.num}`, old)
    }
    return (
        <>
            <Grid item xs={12} md={12}>
                <input className="w-full p-3 rounded-lg text-white  bg-gray-900 placeholder:text-slate-400" placeholder="Enter Title"  {...register(`title${singleSec.num}`, { required: true })} />
            </Grid>
            <Grid item xs={12} md={6}>
                <textarea className='w-full p-3 rounded-lg text-white bg-gray-900 placeholder:text-slate-400' cols="30" placeholder='Enter Description' {...register(`description${singleSec.num}`, { required: true })} rows="6"></textarea>
            </Grid>
            <Grid item xs={12} md={6}>
                {/* hidden input tags */}
                <input onChange={handlePhotosFile} className='hidden' id={'photosFile' + singleSec.num} type="file" accept="image/*" multiple={true} />
                <input onChange={handleVideoUpload} className='hidden' type="file" id={'file' + singleSec.num} accept="video/*" />
                {/* design start */}
                <Box
                    className='h-40 relative bg-gray-900 bg-center flex justify-center items-center'

                >

                    {
                        photosLoading || videoLoading ? <CircularProgress sx={{ color: 'white' }} color="inherit"></CircularProgress> : <div>
                            {
                                !watch(`video${singleSec.num}`)?.length ? <label className='text-red-500  underline p-4 inline-block  cursor-pointer ' htmlFor={'photosFile' + singleSec.num}>{
                                    watch(`img${singleSec.num}`)?.length ? "Change Images" : "Add Images"
                                }</label> : <span></span>
                            }
                            {
                                watch(`video${singleSec.num}`)?.length ? <span></span> : <span>or</span>
                            }
                            {
                                watch(`img${singleSec.num}`)?.length ? <button type='button' className='text-blue-500 ml-3 underline cursor-pointer' onClick={() => setIsOpen(true)}> Edit Photos Name </button> : <span></span>
                            }
                            {
                                !watch(`img${singleSec.num}`)?.length ? <label htmlFor={'file' + singleSec.num} className='text-green-500 underline cursor-pointer p-4 inline-block '>{watch(`video${singleSec.num}`)?.length ? "Change video" : "Add video"}</label> : <span></span>
                            }
                            {watch(`video${singleSec.num}`)?.length ? <button type='button' className='cursor-pointer text-red-500 underline' onClick={() => setIsOpenVideo(true)}>Watch preview</button> : <span></span>}
                        </div>
                    }

                </Box>
            </Grid>
            <Grid item xs={12}>
                <input className="w-full p-3 rounded-lg text-white  bg-gray-900 placeholder:text-slate-400" placeholder="Enter Url (optional)"  {...register(`url${singleSec.num}`)} />

            </Grid>
            <div className='w-full flex justify-center items-center mt-5'>
                <Tooltip title='Delete upper section'>
                    <span className='bg-gray-900 rounded-full'>
                        {
                            singleSec.num != 1 && <IconButton onClick={() => handleDelete(singleSec.num)} sx={{ color: 'red', }}><CloseIcon></CloseIcon></IconButton>
                        }
                    </span>
                </Tooltip>
            </div>

            <Drawer
                anchor={'bottom'}
                open={isOpen}
            >
                <div className=' h-screen bg-black py-5 pl-4  flex flex-col'>
                    <div className="grow overflow-y-scroll dashboard-scrollBar p-2 ">
                        <div>

                            <Grid container spacing={2}>
                                {watch(`img${singleSec.num}`)?.map((single, i) => <Grid key={i} item xs={12} md={3}>
                                    <Image src={single.url} alt={single.title} height={300} width={340}></Image>
                                    <input className='w-full p-3 rounded-lg  bg-gray-900 placeholder:text-slate-400 text-white' type="text" onChange={e => handleTitleChange(e.target.value, i)} placeholder='Enter Title' defaultValue={single.title} />
                                </Grid>)}
                            </Grid>
                        </div>

                    </div>
                    <div className='flex-none '>

                        <button onClick={() => setIsOpen(false)} className='mt-2 rounded-md bg-yellow-500 px-4 p-2'>Done</button>
                    </div>
                </div>
            </Drawer>
            <Drawer
                anchor={'bottom'}
                open={isOpenVideo}
            >
                <div className='h-screen relative bg-black py-5 pl-4  flex justify-center'>
                    <video src={watch(`video${singleSec.num}`)} controls width='80%' autoPlay muted></video>
                    <div className='absolute top-0 right-0 '>

                        <button onClick={() => setIsOpenVideo(false)} className='mt-2 rounded-md bg-yellow-500 px-4 p-2'><CloseIcon></CloseIcon></button>
                    </div>
                </div>
            </Drawer>
        </>
    );
};

export default CreateBlogSection;