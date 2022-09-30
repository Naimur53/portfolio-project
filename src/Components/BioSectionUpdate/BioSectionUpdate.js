import React from 'react';
import { CircularProgress, FormControlLabel, FormGroup, Grid, Switch } from '@mui/material';
import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import ImgSlider from '../ImgSlider/ImgSlider';
const BioSectionUpdate = ({ register, description, img, title, index, setData, url, video, column, watch }) => {
    const [photosLoading, setPhotosLoading] = useState(false);
    const [videoLoading, setVideoLoading] = useState(false);
    const handleChange = (value, i) => {
        setData(pre => {
            pre.sections[index].img[i].title = value;

            return {
                ...pre,
            }

        });

    }
    const handleDeleteImages = () => {
        console.error('dfdfdfkdj fkldjfdkljf')
        setData(pre => {
            delete pre.sections[index].img

            return {
                ...pre,
                section: [...pre.sections]
            }

        })
    }
    const handleDeleteVideo = () => {
        setData(pre => {
            delete pre.sections[index].video

            return {
                ...pre,
                section: [...pre.sections]
            }

        })
    }
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
                    url: 'https://stark-atoll-95180.herokuapp.com/uplaodImage',
                    data: body
                })
            })
            Promise.all(main)
                .then(res => {

                    const allUrl = res.map(singleRes => {
                        return {
                            url: singleRes.data.data?.url,
                            title: ''
                        }
                    })
                    setData(pre => {
                        pre.sections[index].img = allUrl;
                        return {
                            ...pre,
                        }
                    })

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
            axios.post('https://stark-atoll-95180.herokuapp.com/video', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(res => {

                    setVideoLoading(false)
                    setData(pre => {
                        pre.sections[index].video = res.data.url;
                        return {
                            ...pre,
                        }
                    })
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

                })
        }

    };
    console.log({ index, column: watch(`column${index}`) });
    return (
        <div className='mt-10  '>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <FormGroup>
                        <FormControlLabel sx={{ color: 'white' }} control={<Switch defaultValue={column} color="warning"  {...register(`column${index}`,)} />} label={watch(`column${index}`) ? 'Tow Columns' : 'One Column'} />
                    </FormGroup>

                </Grid>
                <Grid item xs={12} md={6}>
                    <FormGroup>
                        <FormControlLabel sx={{ color: 'white' }} control={<Switch color="warning"  {...register(`reverse${index}`,)} />} label={watch(`reverse${index}`) ? 'Reverse' : 'No Reverse'} />
                    </FormGroup>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Grid container spacing={2}
                        sx={{
                            alignItems: 'center',
                            justifyContent: 'start',
                            flexDirection: watch(`column${index}`) ? watch(`reverse${index}`) ? 'row-reverse' : 'row' : watch(`reverse${index}`) ? 'column-reverse' : 'column'
                        }}
                    >
                        <Grid xs={12} item sx={{ width: '100%' }} md={watch(`column${index}`) ? 6 : 12}>
                            <div className='  py-10'>

                                <div className="  bg-black/[.6] flex justify-center items-center z-50 pointer-events-none">
                                    {
                                        img?.length || video ? photosLoading || videoLoading ? <CircularProgress color='inherit' sx={{ color: 'white' }}></CircularProgress> : img?.length ? <div>
                                            <label htmlFor={'photosFile' + index} className='border-b pointer-events-auto border-green-400 text-green-400 cursor-pointer mr-4 '>Change image</label>
                                            <button onClick={() => handleDeleteImages()} className='border-b pointer-events-auto border-red-400 text-red-400 '>Delete Images</button>
                                        </div> : <div>
                                            <label htmlFor={'file' + index} className='border-b pointer-events-auto border-green-400 text-green-400 cursor-pointer mr-4 '>Change video</label>
                                            <button onClick={() => handleDeleteVideo()} className='border-b pointer-events-auto border-red-400 text-red-400 '>Delete video</button>
                                        </div> : <div className='py-5'>
                                            {
                                                photosLoading || videoLoading ? <CircularProgress color='inherit' sx={{ color: 'white' }}></CircularProgress> : <div className='my-5 inline-block'>
                                                    <label htmlFor={'photosFile' + index} className='border-b pointer-events-auto border-green-400 text-green-400 cursor-pointer mr-4 '>Add image</label>
                                                    <label htmlFor={'file' + index} className='border-b pointer-events-auto border-red-400 text-red-400 cursor-pointer mr-4 '>Add video</label>
                                                </div>
                                            }
                                        </div>
                                    }

                                </div>

                            </div>
                            <input type="text" defaultValue={title} placeholder='title' {...register(`title${index}`, { required: true })} className='  text-2xl mt-4  mb-2 text-heading border  bg-transparent   border-white block w-full px-4  py-2' />
                            <input type="text" placeholder='Enter url (optional)' defaultValue={url} {...register(`url${index}`)} className="w-full p-3 my-5 rounded-lg border bg-gray-900 placeholder:text-slate-400 text-white" />
                            <input onChange={handlePhotosFile} className='hidden' id={'photosFile' + index} type="file" accept="image/*" multiple={true} />
                            <input onChange={handleVideoUpload} className='hidden' type="file" id={'file' + index} accept="video/*" />
                            <textarea type="text" defaultValue={description} placeholder='description' {...register(`description${index}`, { required: true })} className=' mb-2 text-heading  bg-transparent   border-white block w-full px-4 border py-2' cols='10' rows='5' />

                        </Grid>
                        <Grid xs={12} sx={{ width: '100%' }} item md={watch(`column${index}`) ? 6 : 12}>
                            <div >
                                {
                                    img?.length ? img.length > 2 ? <ImgSlider data={img}></ImgSlider> : img.length === 2 ? <Grid container spacing={2}>

                                        {
                                            img.map((single, i) => <Grid key={single.url} item md={6} xs={12}>

                                                <Image src={single.url} height={618} layout='raw' className='w-full' width={1060} alt='d'></Image>
                                                <input type="text" onChange={({ target: { value } }) => handleChange(value, i)} defaultValue={single.title} placeholder='Enter title' className='  text bg-transparent  italic text-heading border-white block w-full px-4  py-2 mt-4' />
                                            </Grid>)
                                        }

                                    </Grid> : <>
                                        {img.map(single => <>
                                            <Image key={single.url} layout='raw' className='w-full' src={single.url} height={618} width={1060} alt='d'></Image>

                                            <input type="text" onChange={({ target: { value } }) => handleChange(value, 0)} defaultValue={single.title} placeholder='Enter title' className=' text bg-transparent  italic   border-white mt-4 block w-full px-4  py-2 text-heading' /></>)}
                                    </> : video ? <video preload="metadata" controls src={video + '#t=2'}></video> : <></>
                                }
                            </div>
                        </Grid>

                    </Grid>

                </Grid>


            </Grid>
        </div>
    );
};


export default BioSectionUpdate;