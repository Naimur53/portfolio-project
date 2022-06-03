
import { Autocomplete, Button, Chip, CircularProgress, Container, Grid, IconButton, TextField } from '@mui/material';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import DashboardLayout from '../../src/Layouts/DashboardLayout'
import { useEffect, useState } from 'react';
import CreateBlogSection from '../../src/Components/CreateBlogSection/CreateBlogSection';
import ClearIcon from '@mui/icons-material/Clear';
import { Box } from '@mui/system';
import { toast } from 'react-toastify';

// const data = {
//     img: "https://i.ibb.co/PMdzcvn/img-1.jpg",
//     heading: "ONE DAY FASHION SHOOT",
//     description: 'Curabitur eu congue erat. Donec posuere eu est eget egestas. Pellentesque porttitor blandit massa, nec luctus ligula facilisis sodales. Nam eu felis a ex efficitur faucibus in mollis arcu. Sed venenatis urna in lorem consequat rutrum. Nullam imperdiet arcu nec erat maximus faucibus...',
//     location: 'Klik hier voor Nederlands',
//     date: new Date().toDateString(),
//     sections: [{
//         title: "The disappointment comes at home. ",
//         img: [{ title: 'Ait Ben Haddou  Morocco: A first attempt under poor light conditions', url: 'https://i.ibb.co/hVm9s2y/20161021-AIT-BEN-HABBOU-351-Pano-1200x406.jpg' }],
//         video: "",
//         description: "I have a few golden rules. One of these rules, ‘Don’t try to organize, be on time and stay until you are completely satisfied.’ So I was on time. Sunset was expected around 7:30 and I was there at five. Camera tripod set up and the Nikon D5 on it. New pack of Marlboro in my pocket for the usual ‘Time killing smoking’. Slowly, bit by bit I see the light change. At that moment the light plan starts in my head. I take in some reference points. When the sun goes down there …. that is my moment. I do some spot measurements and light up another Marlboro. Just wait, this is going to be all right."
//     }],
//     tags: ['PHOTOGRAPHY', "FASHION", 'BLACK & WHITE'],
//     love: 30,
//     comments: [{
//         id: 'id', user: {
//             displayName: 'JONE DOE',
//             photoUrl: 'https://demo.themetorium.net/html/agatha/dark/assets/img/blog/small/avatar/avatar-1.jpg',
//         },
//         date: new Date().toDateString(),
//         comment: 'Quis ante id eros orci eget. Ac egestas praesent aliquam nisl in vitae aliquam vitae. Vivamus sed elementum. Sem sed sed. Hendrerit elit eget sem pellentesque a. Velit elit lacinia mattis amet nunc. Fames ipsum rhoncus. Natoque posuere nam commodo mattis orci. Aliquet praesent tempor ac dolor aliquet.'
//     },
//     {
//         id: 'id', user: {
//             displayName: 'JONE DOE',
//             photoUrl: 'https://demo.themetorium.net/html/agatha/dark/assets/img/blog/small/avatar/avatar-1.jpg',
//         },
//         date: new Date().toDateString(),
//         comment: 'Quis ante id eros orci eget. Ac egestas praesent aliquam nisl in vitae aliquam vitae. Vivamus sed elementum. Sem sed sed. Hendrerit elit eget sem pellentesque a. Velit elit lacinia mattis amet nunc. Fames ipsum rhoncus. Natoque posuere nam commodo mattis orci. Aliquet praesent tempor ac dolor aliquet.'
//     }
//     ]

// }

const AddBlog = () => {
    const [imgLoading, setImgLoading] = useState(false);
    const [photosLoading, setPhotosLoading] = useState(false);
    const [videoLoading, setVideoLoading] = useState(false);


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
        console.log(mainData);
        axios.post('http://localhost:5000/blog', mainData).then(res => toast.success('Successfully post the blog', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }))
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
    useEffect(() => {
        const file = watch('mainImg');
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


    }, [watch('mainImg')])
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
        const fields = ['title', 'description', 'photosFile', 'file', 'img', 'video']
        fields.forEach((field, i) => {
            console.log(field + num);
            console.log(field + (numSection.length));
            unregister(field + num, { keepDirty: false });
            unregister(field + numSection.length, { keepDirty: false });
        })
        unregister(`description${num}`, { keepDirty: false });
        unregister(`photosFile${num}`, { keepDirty: false });
        unregister(`file${num}`, { keepDirty: false });
        unregister(`img${num}`, { keepDirty: false });
        unregister(`video${num}`, { keepDirty: false });

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

    return (
        <>
            <form className=' ' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <h2 className='text-2xl text-center mb-5'>Create a main section of blog</h2>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <input className="w-full p-3 rounded-lg  bg-gray-900 placeholder:text-slate-400" placeholder="Enter Title"  {...register("heading", { required: true })} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <input className="w-full p-3 rounded-lg  bg-gray-900 placeholder:text-slate-400" placeholder="Location"  {...register("address", { required: true })} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <textarea  {...register("description", { required: true })} className='w-full dashboard-scrollBar p-3 rounded-lg  bg-gray-900 placeholder:text-slate-400' placeholder='Enter description' cols="30" rows="6"></textarea>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                className='h-40 bg-gray-900 bg-center bg-cover flex justify-center items-center'
                                sx={{
                                    backgroundImage: `url("${watch('img')}")`
                                }}
                            >
                                <input {...register("mainImg", { required: true })} type="file" accept="image/*" id='mainImg' className='hidden' />
                                {
                                    imgLoading ? <CircularProgress color="inherit"></CircularProgress> : <label htmlFor='mainImg' className="bg-black/[.7] p-2 rounded-md">{watch('img')?.length ? "Change Thumbnail" : 'Choose Thumbnail'}</label>
                                }

                            </Box>
                        </Grid>


                    </Grid>
                </div>
                <div>
                    <h2 className=' my-5 text-center text-2xl'>Add sections</h2>
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
                <h2 className=' my-5 text-center text-2xl'>Add tags </h2>
                <div className='my-5   '>
                    {
                        watch('tags')?.map((tag, i) => <span className='inline-block mb-2 p-2 border rounded-full mr-2' key={i}>
                            #{tag}
                            <IconButton onClick={() => handleDeleteTags(i)} sx={{ p: 0, mx: .5 }}>
                                <ClearIcon sx={{ fontSize: '20px', color: 'red', p: 0 }}></ClearIcon>
                            </IconButton>
                        </span>
                        )
                    }
                </div>
                <input className="w-full p-3 rounded-lg  bg-gray-900 placeholder:text-slate-400" onKeyDown={addTags} placeholder='Enter tags and press enter ' />
            </div>
            {
                imgLoading || photosLoading || videoLoading ? <button
                    className='bg-red-400 text-black rounded-md px-5 text-xl py-2 my-5 inline-block '
                >wait until loading</button> : <label htmlFor="submit" className='bg-yellow-400 text-black rounded-md px-5 text-xl py-2 my-5 inline-block '>submit</label>
            }


        </>
    );
};
AddBlog.Layout = DashboardLayout;

export default AddBlog;