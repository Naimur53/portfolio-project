
import { Autocomplete, Button, Chip, CircularProgress, Container, Grid, IconButton, TextField } from '@mui/material';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import DashboardLayout from '../../src/Layouts/DashboardLayout'
import { useEffect, useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import { Box } from '@mui/system';
import { toast } from 'react-toastify';
import { allData, setLoading } from '../../src/dataSlice/dataSlice';
import { useSelector } from 'react-redux';
import fetcher from '../../src/util/fatcher';
import useSWR from 'swr'
import CreateAddBioSection from '../../src/Components/CreateAddBioSection/CreateAddBioSection';
const AddBio = () => {
    const [imgLoading, setImgLoading] = useState(false);
    const [photosLoading, setPhotosLoading] = useState(false);
    const [videoLoading, setVideoLoading] = useState(false);
    const [postLoading, setPostLoading] = useState(false);
    const { user } = useSelector(allData);
    const { data: preBio, error } = useSWR(
        "https://stark-atoll-95180.herokuapp.com/bio",
        fetcher
    );
    const [numSection, setNumSection] = useState([{ num: 1, complete: false }])
    const { register, unregister, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm({ shouldUnregister: false });
    // default
    const createObj = (title, url, description, img, video, column, reverse) => {
        return { title, url, description, img, video, column, reverse }
    }
    const onSubmit = data => {

        const { img, heading, description, } = data


        // create section field
        const sections = numSection.map(ele => {
            return createObj(data['title' + ele.num], data['url' + ele.num], data['description' + ele.num], data['img' + ele.num], data['video' + ele.num], data['column' + ele.num], data['reverse' + ele.num])
        })
        // create main data for post 
        const mainData = { img, heading, description, sections };
        setPostLoading(true)
        axios[preBio?._id ? 'put' : 'post'](`https://stark-atoll-95180.herokuapp.com/bio?id=${preBio?._id}`, { mainData, user: user?.email }, {
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('idToken')
            },
        }).then(res => {
            toast.success('Successfully add bio', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            setPostLoading(false)
            if (!preBio?._id) {
                location?.reload()
            }
            reset()
            setNumSection([{ num: 1, complete: false }])

        })
            .catch(e => {
                setPostLoading(false)

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
                    toast.error('Something bad happened when add bio' + e.message, {
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

    // handle main section img upload  
    const handleComplete = (num, isComplete) => {
        if (isComplete) {
            const old = [...numSection];
            old[num - 1] = { num, complete: true }
            setNumSection(old);
        }
    }
    const handleDelete = (num) => {
        //unregister that filed 
        const fields = ['title', 'description', 'img', 'video', 'url']
        fields.forEach((field, i) => {

            setValue(field + num, '');
        })
        setValue(`title${num}`, '');
        setValue(`description${num}`, '');
        setValue(`url${num}`, '');
        setValue(`img${num}`, []);
        setValue(`video${num}`, []);
        setValue(`column${num}`, false);
        setValue(`reverse${num}`, false);

        setNumSection(pre => {
            pre.filter(preNum => preNum.num !== num).forEach((element, i) => {
                setValue(`title${i + 1}`, watch(`title${element.num}`))
                setValue(`url${i + 1}`, watch(`url${element.num}`))
                setValue(`description${i + 1}`, watch(`description${element.num}`))
                setValue(`photosFile${i + 1}`, watch(`photosFile${element.num}`))
                setValue(`file${i + 1}`, watch(`file${element.num}`))
                setValue(`img${i + 1}`, watch(`img${element.num}`))
                setValue(`column${i + 1}`, watch(`column${element.num}`))
                setValue(`reverse${i + 1}`, watch(`reverse${element.num}`))
            });
            const newRe = pre.filter(preNum => preNum.num !== num).map((ele, i) => {
                return { num: ++i, complete: ele.complete }
            });
            return newRe;
        })
    }



    if (!preBio) {
        return <div className='h-screen flex justify-center items-center'>
            <CircularProgress sx={{ color: 'white' }} ></CircularProgress>
        </div>
    }
    if (error) {
        return <div className='h-screen flex justify-center items-center'>
            <CircularProgress sx={{ color: 'white' }} ></CircularProgress>
        </div>
    }
    return (
        <>
            <form className=' ' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <h2 className='text-2xl text-white text-center mb-5'>Create a main section of Bio</h2>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={12}>
                            <input className="w-full p-3 rounded-lg  bg-gray-900 placeholder:text-slate-400 text-white" placeholder="Enter Title"  {...register("heading", { required: true })} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <textarea  {...register("description", { required: true })} className='w-full dashboard-scrollBar p-3 rounded-lg  bg-gray-900 placeholder:text-slate-400 text-white' placeholder='Enter description' cols="30" rows="6"></textarea>
                        </Grid>



                    </Grid>
                </div>
                <div>
                    <h2 className=' my-5 text-center text-2xl text-white'>Add sections</h2>
                    <Grid container spacing={4}>

                        {
                            numSection.map(singleSec => <CreateAddBioSection videoLoading={videoLoading} setVideoLoading={setVideoLoading} handleDelete={handleDelete} errors={errors} key={singleSec.num} singleSec={singleSec} unregister={unregister} handleComplete={handleComplete} setPhotosLoading={setPhotosLoading} photosLoading={photosLoading} register={register} watch={watch} setValue={setValue}  ></CreateAddBioSection>)
                        }

                    </Grid>

                    {
                        numSection[numSection.length - 1].complete && <button className='bg-yellow-500 mt-5 text-gray-900 p-4 rounded' onClick={() => { setNumSection([...numSection, { complete: false, num: numSection.length + 1 }]) }}>Add another section</button>
                    }
                </div>



                <button type='submit' id='submit' className=' hidden '>submit</button>
            </form>

            {
                imgLoading || photosLoading || videoLoading || postLoading ? <button
                    className='bg-red-400 text-black rounded-md px-5 text-xl py-2 my-5 inline-block '
                >wait until loading</button> : <label htmlFor="submit" className='bg-contentText text-black rounded-md px-5 text-xl py-2 my-5 inline-block '>submit</label>
            }


        </>
    );
};
AddBio.Layout = DashboardLayout;
export default AddBio;