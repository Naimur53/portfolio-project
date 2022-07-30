
import { Autocomplete, Button, Chip, CircularProgress, Container, Grid, IconButton, TextField } from '@mui/material';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import DashboardLayout from '../../src/Layouts/DashboardLayout'
import { useEffect, useState } from 'react';
import CreateBlogSection from '../../src/Components/CreateBlogSection/CreateBlogSection';
import ClearIcon from '@mui/icons-material/Clear';
import { Box } from '@mui/system';
import { toast } from 'react-toastify';
import { allData } from '../../src/dataSlice/dataSlice';
import { useSelector } from 'react-redux';

const AddBlog = () => {
    const [imgLoading, setImgLoading] = useState(false);
    const [photosLoading, setPhotosLoading] = useState(false);
    const [videoLoading, setVideoLoading] = useState(false);
    const { user } = useSelector(allData)

    const [numSection, setNumSection] = useState([{ num: 1, complete: false }])
    const { register, unregister, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm({ shouldUnregister: false });
    // default
    const createObj = (title, description, img, video) => {
        return { title, description, img, video }
    }
    console.log('errors', errors);
    const onSubmit = data => {
        const { tags, img, heading, description, address, tagsRaw } = data
        if (!tags) {
            toast.error('Add tags for submit', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        // create section field
        const sections = numSection.map(ele => {
            return createObj(data['title' + ele.num], data['description' + ele.num], data['img' + ele.num], data['video' + ele.num])
        })
        // create main data for post 
        const mainData = { img, tags, heading, description, address, sections };
        axios.post('https://stark-atoll-95180.herokuapp.com/blog', { mainData, user: user?.email }, {
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('idToken')
            },
        }).then(res => {
            console.log(res);
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
                toast.error('Something bad happened when post the blog', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
        reset()
    }

    // handle main section img upload 
    console.log('all', numSection);
    const handleComplete = (num, isComplete) => {
        if (isComplete) {
            const old = [...numSection];
            console.log(old[num - 1]);
            old[num - 1] = { num, complete: true }
            setNumSection(old);
        }
        ``
    }
    const handleDelete = (num) => {
        console.log(num);
        //unregister that filed 
        const fields = ['title', 'description', 'img', 'video']
        fields.forEach((field, i) => {

            setValue(field + num, '');
        })
        setValue(`title${num}`, '');
        setValue(`description${num}`, '');
        setValue(`img${num}`, []);
        setValue(`video${num}`, []);

        setNumSection(pre => {
            console.log(watch(`title${num}`));
            pre.filter(preNum => preNum.num !== num).forEach((element, i) => {
                console.log(i);
                setValue(`title${i + 1}`, watch(`title${element.num}`))
                setValue(`description${i + 1}`, watch(`description${element.num}`))
                setValue(`photosFile${i + 1}`, watch(`photosFile${element.num}`))
                setValue(`file${i + 1}`, watch(`file${element.num}`))
                setValue(`img${i + 1}`, watch(`img${element.num}`))
            });
            const newRe = pre.filter(preNum => preNum.num !== num).map((ele, i) => {
                return { num: ++i, complete: ele.complete }
            });
            return newRe;
        })
    }
    const addTags = e => {
        if (e.key === 'Enter') {
            console.log('add tages ', e.target.value);
            if (watch('tags')) {

                setValue('tags', [...watch('tags'), e.target.value])
            }
            else {
                setValue('tags', [e.target.value])

            }
            e.target.value = '';
        }
    }
    const handleDeleteTags = (i) => {
        console.log(i);
        const without = watch('tags').filter((tag, index) => index !== i)
        setValue('tags', without)

    }

    const handleMainImg = (e) => {
        const file = e.target.files;
        console.log(file);
        if (file.length) {
            setImgLoading(true)
            let body = new FormData()
            body.set('key', process.env.NEXT_PUBLIC_IMAGEBB_API)
            body.append('image', file[0]);
            axios({
                method: 'post',
                url: 'https://api.imgbb.com/1/upload',
                data: body
            })
                .then(res => {
                    console.log(res.data.data.url);
                    setValue('img', res.data.data.url)
                })
                .catch(e => {
                    setValue('img', '')
                    setValue('mainImg', '')
                    toast.error('Unknown error happen on image upload', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                })
                .finally(() => setImgLoading(false))
        }

    }
    return (
        <>
            <form className=' ' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <h2 className='text-2xl text-white text-center mb-5'>Create a main section of blog</h2>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <input className="w-full p-3 rounded-lg  bg-gray-900 placeholder:text-slate-400 text-white" placeholder="Enter Title"  {...register("heading", { required: true })} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <input className="w-full p-3 rounded-lg  bg-gray-900 placeholder:text-slate-400 text-white" placeholder="Location"  {...register("address", { required: true })} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <textarea  {...register("description", { required: true })} className='w-full dashboard-scrollBar p-3 rounded-lg  bg-gray-900 placeholder:text-slate-400 text-white' placeholder='Enter description' cols="30" rows="6"></textarea>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                className='h-40 bg-gray-900 bg-center bg-cover flex justify-center items-center'
                                sx={{
                                    backgroundImage: `url("${watch('img')}")`
                                }}
                            >
                                <input onChange={handleMainImg} type="file" accept="image/*" id='mainImg' className='hidden' />
                                {
                                    imgLoading ? <CircularProgress color="inherit" sx={{ color: 'white' }}></CircularProgress> : <label htmlFor='mainImg' className="bg-black/[.7] text-white p-2 rounded-md cursor-pointer">{watch('img')?.length ? "Change Thumbnail" : 'Choose Thumbnail'}</label>
                                }

                            </Box>
                        </Grid>


                    </Grid>
                </div>
                <div>
                    <h2 className=' my-5 text-center text-2xl text-white'>Add sections</h2>
                    <Grid container spacing={4}>

                        {
                            numSection.map(singleSec => <CreateBlogSection videoLoading={videoLoading} setVideoLoading={setVideoLoading} handleDelete={handleDelete} errors={errors} key={singleSec.num} singleSec={singleSec} unregister={unregister} handleComplete={handleComplete} setPhotosLoading={setPhotosLoading} photosLoading={photosLoading} register={register} watch={watch} setValue={setValue}  ></CreateBlogSection>)
                        }

                    </Grid>

                    {
                        numSection[numSection.length - 1].complete && <button className='bg-yellow-500 mt-5 text-gray-900 p-4 rounded' onClick={() => { setNumSection([...numSection, { complete: false, num: numSection.length + 1 }]) }}>Add another section</button>
                    }
                </div>



                <button type='submit' id='submit' className=' hidden '>submit</button>
            </form>
            <div>
                <h2 className=' my-5 text-center text-2xl text-white'>Add tags </h2>
                <div className='my-5   '>
                    {
                        watch('tags')?.map((tag, i) => <span className='inline-block text-white mb-2 p-2 border rounded-full mr-2' key={i}>
                            #{tag}
                            <IconButton onClick={() => handleDeleteTags(i)} sx={{ p: 0, mx: .5 }}>
                                <ClearIcon sx={{ fontSize: '20px', color: 'red', p: 0 }}></ClearIcon>
                            </IconButton>
                        </span>
                        )
                    }
                </div>
                <input className="w-full p-3 rounded-lg text-white bg-gray-900 placeholder:text-slate-400" onKeyDown={addTags} placeholder='Enter tags and press enter ' />
            </div>
            {
                imgLoading || photosLoading || videoLoading ? <button
                    className='bg-red-400 text-black rounded-md px-5 text-xl py-2 my-5 inline-block '
                >wait until loading</button> : <label htmlFor="submit" className='bg-contentText text-black rounded-md px-5 text-xl py-2 my-5 inline-block '>submit</label>
            }


        </>
    );
};
AddBlog.Layout = DashboardLayout;

export default AddBlog;