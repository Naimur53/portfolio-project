
import { Button, Container, TextField } from '@mui/material';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import DashboardLayout from '../../src/Layouts/DashboardLayout'
import { useEffect, useState } from 'react';
import CreateBlogSection from '../../src/Components/CreateBlogSection/CreateBlogSection';
const data = {
    mainSection: {
        img: "https://i.ibb.co/PMdzcvn/img-1.jpg",
        heading: "ONE DAY FASHION SHOOT",
        description: 'Curabitur eu congue erat. Donec posuere eu est eget egestas. Pellentesque porttitor blandit massa, nec luctus ligula facilisis sodales. Nam eu felis a ex efficitur faucibus in mollis arcu. Sed venenatis urna in lorem consequat rutrum. Nullam imperdiet arcu nec erat maximus faucibus...',
        location: 'Klik hier voor Nederlands',
        date: new Date().toDateString(),
    },
    sections: [{
        title: "The disappointment comes at home. ",
        img: [{ title: 'Ait Ben Haddou  Morocco: A first attempt under poor light conditions', url: 'https://i.ibb.co/hVm9s2y/20161021-AIT-BEN-HABBOU-351-Pano-1200x406.jpg' }],
        video: "",
        description: "I have a few golden rules. One of these rules, ‘Don’t try to organize, be on time and stay until you are completely satisfied.’ So I was on time. Sunset was expected around 7:30 and I was there at five. Camera tripod set up and the Nikon D5 on it. New pack of Marlboro in my pocket for the usual ‘Time killing smoking’. Slowly, bit by bit I see the light change. At that moment the light plan starts in my head. I take in some reference points. When the sun goes down there …. that is my moment. I do some spot measurements and light up another Marlboro. Just wait, this is going to be all right."
    }],
    tags: ['PHOTOGRAPHY', "FASHION", 'BLACK & WHITE'],
    love: 30,
    comments: [{
        id: 'id', user: {
            displayName: 'JONE DOE',
            photoUrl: 'https://demo.themetorium.net/html/agatha/dark/assets/img/blog/small/avatar/avatar-1.jpg',
        },
        date: new Date().toDateString(),
        comment: 'Quis ante id eros orci eget. Ac egestas praesent aliquam nisl in vitae aliquam vitae. Vivamus sed elementum. Sem sed sed. Hendrerit elit eget sem pellentesque a. Velit elit lacinia mattis amet nunc. Fames ipsum rhoncus. Natoque posuere nam commodo mattis orci. Aliquet praesent tempor ac dolor aliquet.'
    },
    {
        id: 'id', user: {
            displayName: 'JONE DOE',
            photoUrl: 'https://demo.themetorium.net/html/agatha/dark/assets/img/blog/small/avatar/avatar-1.jpg',
        },
        date: new Date().toDateString(),
        comment: 'Quis ante id eros orci eget. Ac egestas praesent aliquam nisl in vitae aliquam vitae. Vivamus sed elementum. Sem sed sed. Hendrerit elit eget sem pellentesque a. Velit elit lacinia mattis amet nunc. Fames ipsum rhoncus. Natoque posuere nam commodo mattis orci. Aliquet praesent tempor ac dolor aliquet.'
    }
    ]

}

const AddBlog = () => {
    const [imgLoading, setImgLoading] = useState(false);
    const [photosLoading, setPhotosLoading] = useState(false);
    const [numSection, setNumSection] = useState([{ num: 1, complete: false }])
    const { register, unregister, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm();
    console.log('errors', errors);
    const onSubmit = data => {
        console.log(data);
        // console.log(data.file[0]);
        // var formData = new FormData();
        // formData.append("video", data.file[0]);

        // sending to api
        // axios.post('http://localhost:5000/video', formData, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }
        // })
        //     .then(res => {
        //         console.log(res, 'success');
        //     })
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
                    alert('unknow error happen on img upload');
                    setValue('mainImg', '')
                })
                .finally(() => setImgLoading(false))
        }


    }, [watch('mainImg')])
    console.log(numSection);
    const handleComplete = (num, isComplete) => {
        if (isComplete) {
            const old = [...numSection];
            console.log(old[num - 1]);
            old[num - 1] = { num, complete: true }
            setNumSection(old);
        }

    }
    const handleDelete = (num) => {
        console.log(num);
    }
    return (
        <>
            <form className=' ' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <h2 className='text-xl mb-3'>Create a main section of blog</h2>
                    <TextField className='bg-white' {...register("heading", { required: true })} label="Enter Main Heading" color="secondary" />
                    <TextField className='bg-white' {...register("description", { required: true })} label="description" color="secondary" />
                    <TextField className='bg-white' type='address' {...register("address", { required: true })} label="Enter location" color="secondary" />
                    <input {...register("mainImg", { required: true })} type="file" accept="image/*" />


                </div>
                <div>
                    <h2 className='text-xl'>Add sections</h2>
                    {
                        numSection.map(singleSec => <CreateBlogSection handleDelete={handleDelete} errors={errors} key={singleSec.num} singleSec={singleSec} unregister={unregister} handleComplete={handleComplete} setPhotosLoading={setPhotosLoading} photosLoading={photosLoading} register={register} watch={watch} setValue={setValue}  ></CreateBlogSection>)
                    }
                    {
                        numSection[numSection.length - 1].complete && <Button className='bg-red-400 text-gray-900' onClick={() => { setNumSection([...numSection, { complete: false, num: numSection.length + 1 }]) }}>add another section</Button>
                    }
                </div>

                <button type='submit'>submit</button>
            </form>

        </>
    );
};
AddBlog.Layout = DashboardLayout;

export default AddBlog;