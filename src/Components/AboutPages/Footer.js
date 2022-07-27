import { Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    const info = ['John Baggen Photography ', 'Havenstraat 19a', '6171 ED Stein', 'The Netherlands', 'E-mail: info@johnbaggen.com', 'Phone: +31 6 5153 1805']







    const logos = ['https://i.ibb.co/bNXkjFn/footer-zw-brands3-4.jpg', 'https://i.ibb.co/b61SvDD/footer-zw-brands3-5.jpg', 'https://i.ibb.co/nmdm6Xd/footer-zw-brands3-1.jpg', 'https://i.ibb.co/mBkbcDL/footer-zw-brands3-2.jpg', ' https://i.ibb.co/5X0nQLZ/apple-logo-eps-logo-vector.png', 'https://i.ibb.co/CPhzYnt/footer-zw-brands3-3.jpg',]
    return (
        <div className='overflow-hidden mt-10 h-full '>
            {/* <div className='mt-10 text-center flex justify-center items-center flex-col'>
                <div>
                    {
                        info.map(single => <h2 key={single}>{single}</h2>)
                    }
                </div>
                <div className='mt-10'>
                    <Image alt='brand images' className='w-full' priority layout='raw' width={500} height={200} src='https://i.ibb.co/NyYk8Tr/footer-zw-brands3.jpg'></Image>
                </div>
            </div> */}
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={12}>
                            <div className="glass-bg p-4 flex justify-center flex-col items-center rounded-md">
                                <div
                                    className="p-4 border-dotted rounded-full border-2">

                                    <LocationOnIcon></LocationOnIcon>
                                </div>
                                <p className="mt-3">Havenstraat 19a, 6171 ED Stein, The Netherlands</p>

                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="glass-bg  p-4 flex justify-center flex-col items-center rounded-md">
                                <div
                                    className="p-4 border-dotted rounded-full border-2">

                                    <MailOutlineIcon></MailOutlineIcon>
                                </div>
                                <p className="mt-3">info@johnbaggen.com</p>

                            </div>

                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="glass-bg  p-4 flex justify-center flex-col items-center rounded-md">
                                <div
                                    className="p-4 border-dotted rounded-full border-2">

                                    <ConnectWithoutContactIcon></ConnectWithoutContactIcon>
                                </div>
                                <p className="mt-3"> +31 6 5153 1805</p>

                            </div>

                        </Grid>
                        <Grid item xs={12}>

                        </Grid>
                    </Grid>
                    <div className='mt-5 relative '>

                        <Image alt='brand images' objectFit='contain' width={1000} height={100} priority layout='responsive' src='https://i.ibb.co/vk9RfDF/image004.jpg'></Image>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    {/* <Grid container spacing={4}>
                        {
                            logos.map(single => <Grid key={single} item xs={12} md={4}>
                                <Image alt='logo' src={single} width={200} height={200}
                                    layout="raw" priority ></Image>
                            </Grid>)
                        }
                        <Grid item xs={12} md={12}>
                            <div className='flex justify-center'>
                                <Image alt='logo' src='https://i.ibb.co/fvYytgZ/adobe-logo-white.png' width={200} height={200}
                                    layout="raw" priority ></Image>

                            </div>
                        </Grid>

                    </Grid> */}
                    {/* <div className='flex h-full justify-center items-center'>
                        <div className='w-1/2 h-2/3 bg-cover bg-no-repeat '
                            style={
                                {
                                    backgroundImage: 'url(https://www.johnbaggen.gallery/wp-content/uploads/2019/07/footer-zw-brands3.jpg)'
                                }
                            }
                        >

                        </div>

                    </div> */}

                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;  