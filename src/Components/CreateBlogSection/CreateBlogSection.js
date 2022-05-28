import { Button, CircularProgress, Container, Drawer, Grid, IconButton, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
const a = {
    title: "The disappointment comes at home. ",
    img: [{ title: 'Ait Ben Haddou  Morocco: A first attempt under poor light conditions', url: 'https://i.ibb.co/hVm9s2y/20161021-AIT-BEN-HABBOU-351-Pano-1200x406.jpg' }],
    video: "",
    description: "I have a few golden rules. One of these rules, ‘Don’t try to organize, be on time and stay until you are completely satisfied.’ So I was on time. Sunset was expected around 7:30 and I was there at five. Camera tripod set up and the Nikon D5 on it. New pack of Marlboro in my pocket for the usual ‘Time killing smoking’. Slowly, bit by bit I see the light change. At that moment the light plan starts in my head. I take in some reference points. When the sun goes down there …. that is my moment. I do some spot measurements and light up another Marlboro. Just wait, this is going to be all right."
}


const CreateBlogSection = ({ errors, unregister, handleComplete, setPhotosLoading, photosLoading, singleSec, register, setValue, watch, handleDelete }) => {
    let handleChange = watch(`photosFile${singleSec.num}`);
    const [isOpen, setIsOpen] = useState(false);

    // create filed 
    // useEffect(() => {
    //     setValue(`img${singleSec.num}`, []);
    //     setValue(`video${singleSec.num}`, '');
    // }, []);
    useEffect(() => {
        const file = watch(`photosFile${singleSec.num}`);
        console.log('amar fiel', file);
        // console.log('file', Object.values(file), process.env.NEXT_PUBLIC_IMAGEBB_API);
        if (file?.length) {
            setPhotosLoading(true)
            console.log('in');
            const main = Object.values(file).map(singleFile => {
                let body = new FormData()
                body.set('key', process.env.NEXT_PUBLIC_IMAGEBB_API)
                body.append('image', singleFile)
                return axios({
                    method: 'post',
                    url: 'https://api.imgbb.com/1/upload',
                    data: body
                })
            })
            Promise.all(main)
                .then(res => {
                    console.log('all', res);
                    const allUrl = res.map(singleRes => {
                        return {
                            url: singleRes.data.data?.url,
                            title: singleRes.data.data?.title
                        }
                    })
                    setValue(`img${singleSec.num}`, allUrl);
                    console.log('url', allUrl);

                })
                .catch(e => {
                    alert('unknown error happen in multiple image upload');
                    setValue(`img${singleSec.num}`, []);
                    setValue(`photosFile${singleSec.num}`, []);
                    console.log('error');
                })
                .finally(() => {
                    setPhotosLoading(false);
                })
        }

    }, [handleChange]);

    useEffect(() => {
        if (watch(`file${singleSec.num}`)?.length) {

            let formData = new FormData();
            formData.append("video", watch(`file${singleSec.num}`)[0]);

            // sending to api
            axios.post('http://localhost:5000/video', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(res => {
                    console.log(res, 'success');
                    setValue(`video${singleSec.num}`, res.url)
                })
                .catch(e => {
                    alert('Error to uploading a video')
                    setValue(`file${singleSec.num}`, []);
                    setValue(`video${singleSec.num}`, '');
                })
        }

    }, [watch(`file${singleSec.num}`)])

    //handle complete 
    useEffect(() => {
        if (
            watch(`title${singleSec.num}`) && watch(`description${singleSec.num}`)
        ) {
            console.log("complete");
            handleComplete(singleSec.num, true);
        }
    }, [watch(`title${singleSec.num}`), watch(`description${singleSec.num}`), watch(`photosFile${singleSec.num}`), watch(`file${singleSec.num}`)]);

    // const toggleDrawer = (anchor, open) => (event) => {
    //     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //       return;
    //     }

    //     setState({ ...state, [anchor]: open });
    //   };
    const handleTitleChange = (value, i) => {
        const old = watch(`img${singleSec.num}`)
        old[i].title = value;
        setValue(`img${singleSec.num}`, old)
    }
    return (
        <div>
            <TextField className='bg-white'  {...register(`title${singleSec.num}`, { required: true })} label="Enter Title" color="secondary" />
            {errors[`title${singleSec.num}`] && <span>This field is required</span>}
            <TextField className='bg-white'  {...register(`description${singleSec.num}`, { required: true })} label="Enter description" color="secondary" />
            {errors[`description${singleSec.num}`] && <span>This field is required</span>}
            <input {...register(`photosFile${singleSec.num}`)} className='hidden' id={'photosFile' + singleSec.num} type="file" accept="image/*" multiple={true} />

            <input {...register(`file${singleSec.num}`)} className='hidden' type="file" id={'file' + singleSec.num} accept="video/*" />


            {
                !watch(`file${singleSec.num}`)?.length ? photosLoading ? <CircularProgress></CircularProgress> : <label className='bg-red-400 p-4 inline-block ' htmlFor={'photosFile' + singleSec.num}>Add Photo-{watch(`photosFile${singleSec.num}`)?.length}</label> : ''
            }

            {
                !watch(`photosFile${singleSec.num}`)?.length ? <label htmlFor={'file' + singleSec.num} className='bg-green-500 p-4 inline-block '>Add video{watch}</label> : ""
            }

            {
                watch(`img${singleSec.num}`)?.length && <button onClick={() => setIsOpen(true)}>Edit Photos Name </button>
            }
            {
                singleSec.num != 1 && <IconButton onClick={() => handleDelete(singleSec.num)} sx={{ color: 'red', }}><CloseIcon></CloseIcon></IconButton>
            }

            <Drawer
                anchor={'bottom'}
                open={isOpen}
            >
                <div className=' h-screen flex flex-col'>
                    <div className="grow overflow-y-scroll ">
                        <div>

                            <Grid container spacing={2}>
                                {watch(`img${singleSec.num}`)?.map((single, i) => <Grid key={i} item xs={12} md={3}>
                                    <Image src={single.url} alt={single.title} height={300} width={340}></Image>
                                    <TextField type="text" onChange={e => handleTitleChange(e.target.value, i)} className='w-full' defaultValue={single.title} />
                                </Grid>)}
                            </Grid>
                        </div>

                    </div>
                    <div className='flex-none'>

                        <button onClick={() => setIsOpen(false)} className='bg-red-400 p-2'>done </button>
                    </div>
                </div>
            </Drawer>

        </div>
    );
};

export default CreateBlogSection;