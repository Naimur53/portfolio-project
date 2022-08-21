import React, { useState, useEffect } from 'react';
import fetcher from '../../../src/util/fatcher';
import useSWR from 'swr';
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router';
import DashboardLayout from '../../../src/Layouts/DashboardLayout';
import { Avatar, CircularProgress, IconButton } from '@mui/material';
import BlogRight from '../../../src/Components/BlogRight/BlogRight';
import { useForm } from 'react-hook-form';
import BlogSectionUpdate from '../../../src/Components/BlogSectionUpdate/BlogSectionUpdate';
import ClearIcon from '@mui/icons-material/Clear';
import { allData } from '../../../src/dataSlice/dataSlice';
import { toast } from 'react-toastify';
import axios from 'axios';
const UpdateBlog = () => {
    const { query: { id } } = useRouter();
    const { user } = useSelector(allData)
    const { data: res, error } = useSWR(
        `https://stark-atoll-95180.herokuapp.com/blog?id=${id}`,
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



    console.log(data);
    if (!data?._id) {
        return <div className='flex justify-center' >
            <CircularProgress color='inherit' sx={{ color: 'white' }}></CircularProgress>
        </div>
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
                url: 'https://stark-atoll-95180.herokuapp.com/uplaodImage',
                data: body
            })
                .then(res => {
                    console.log(res.data.data.url);
                    setData(pre => {
                        return {
                            ...pre,
                            img: res.data.data.url,
                        }
                    })
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
    //handle from submit 
    const onSubmit = (mainData) => {
        if (!mainData.tags?.length) {
            toast.error('add tags to update', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return
        }
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
            tags: mainData.tags,

            sections: createSection,
        }
        console.log(create);
        axios.put(`https://stark-atoll-95180.herokuapp.com/blog?id=${data._id}`, { mainData: create, user: user?.email }, {
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('idToken')
            },
        }).then(res => {
            console.log(res);
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

                console.log(e.response?.data?.error);
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
                    <div className='relative bg-cover' style={{ height: '50vh', backgroundImage: `url(${data.img})` }}>
                        <div className='absolute inset-0 flex justify-center items-center bg-black/[.5]'>
                            {
                                imgLoading ? <CircularProgress color='inherit' sx={{ color: 'white' }}></CircularProgress> : <label htmlFor={'img'} className='border-b pointer-events-auto border-green-400 text-green-400 cursor-pointer mr-4 '>Change thumbnails</label>

                            }

                        </div>
                    </div>

                    <input onChange={handleMainImg} className='hidden' id={'img'} type="file" accept="image/*" />
                    <input type="text" {...register("heading", { required: true })} defaultValue={data.heading} className=' text bg-transparent   text-xl md:text-3xl text-center text-heading font-family-mono font-thin border-white block w-full px-4  py-2' />
                    <input type="text" {...register("address", { required: true })} defaultValue={data.address} className=' text-xl text-center text-subTitles font-family-mono bg-transparent  font-family-mono  border-white block w-full px-4  py-2' />
                </div>
                <div className='block md:flex justify-between items-center pb-5 md:pb-0'>
                    <div className='pb-5 flex mt-5'>
                        <div className='mr-4'>
                            <Avatar src='https://i.ibb.co/5LwPHgJ/20190320-WEST-AFRICA-FROM-GUNJUR-TO-BASSE-2964-removebg-preview.png' alt="blog " sx={{
                                width: 40, height: 40
                            }}></Avatar>
                        </div>
                        <div className='border-l border-gray-800 pl-3'>
                            <h1 className='text-sm text-hading'>Author: John Baggen</h1>
                            <h3 className='text-sm font-light text-contentText'>{new Date(data.date).toDateString()}</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <textarea type="text" defaultValue={data.description} {...register("description", { required: true })} className='text-white bg-transparent   border-white block w-full px-4  py-2' cols='5' rows='5' />

                </div>
                {
                    data?.sections.map((single, i) => <BlogSectionUpdate key={i} setData={setData} index={i} register={register} {...single}></BlogSectionUpdate>)
                }
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

                    <button className='hidden ' id='submit'>submit</button>
                </div>


            </form>
            <input type='name' className="w-full p-3 rounded-lg text-white bg-gray-900 placeholder:text-slate-400" onKeyDown={addTags} placeholder='Enter tags and press enter ' />
            {
                upLoading ? <CircularProgress color='inherit' sx={{ color: 'white' }}></CircularProgress> : <label htmlFor="submit" className='text-yellow-500 inline-block px-4 py-2 mt-5 border border-yellow-500' type='submit'>Update blog</label>
            }
        </div>
    );
};
UpdateBlog.Layout = DashboardLayout;
export default UpdateBlog;
