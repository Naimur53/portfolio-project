import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import AdbIcon from '@mui/icons-material/Adb';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Collection from './Collection';
import { Accordion, AccordionDetails, AccordionSummary, Drawer } from '@mui/material';
import useSWR from 'swr'
import fetcher from '../../util/fatcher';
import PhoneCollection from './PhoneCollection';
import { useSelector } from 'react-redux';
import { allData } from '../../dataSlice/dataSlice';
import CustomLink from '../SmallComponents/CustomLink';
const pages = ['home', 'aboutme', 'dashboard', 'blogs',];
const TopBar = () => {

    const [open, setOpen] = useState(null);
    const { collection, user } = useSelector(allData)
    // const { data, error } = useSWR(
    //     "https://stark-atoll-95180.herokuapp.com/chooseMenu",
    //     fetcher
    // );
    const handleOpenNavMenu = (event) => {
        setOpen(!open);
    };
    let easing = [0.6, -0.05, 0.01, 0.99];

    const stagger = {
        animate: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };
    const fadeInUp = {
        initial: {
            y: -100,
            transition: { duration: 0.6, }
        },
        animate: {
            y: 0,
            transition: {
                duration: 1,
            }
        }
    };
    const fadeEnter = {
        initial: {
            x: -100,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
        }
    };
    const Element = (
        <motion.div variants={stagger} className='px-2 py-5 '>
            <motion.div variants={fadeEnter}
            >
                <Link href={'/'}>
                    <span
                        className='w-full border  flex justify-center mb-3 py-2 border-gray-700 rounded-sm hover:border-yellow-300 text-white'
                    >
                        Home
                    </span>
                </Link>

            </motion.div>

            <motion.div variants={fadeEnter}
            >
                <Link href={'/aboutme'}>
                    <span

                        className='w-full border  flex justify-center mb-3 py-2 border-gray-700 rounded-sm hover:border-yellow-300 text-white'
                    >
                        About me
                    </span>
                </Link>

            </motion.div>
            <motion.div variants={fadeEnter}
            >
                <Accordion
                    sx={{ background: 'black' }}
                    className='w-full border    mb-3  bg-black border-gray-700 rounded-sm hover:border-yellow-300 text-white'
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: 'white', }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <h1 className='text-white'>Collection</h1>
                    </AccordionSummary>
                    <AccordionDetails>
                        <PhoneCollection data={collection}></PhoneCollection>
                    </AccordionDetails>
                </Accordion>
            </motion.div>
            <motion.div variants={fadeEnter}
            >
                <Link href={'/category'}>
                    <span
                        className='w-full border  flex justify-center mb-3 py-2 border-gray-700 rounded-sm hover:border-yellow-300 text-white'
                    >
                        Gallery
                    </span>
                </Link>

            </motion.div>
            <motion.div variants={fadeEnter}
            >
                <Link href={'/blogs'}>
                    <span
                        className='w-full border  flex justify-center mb-3 py-2 border-gray-700 rounded-sm hover:border-yellow-300 text-white'
                    >
                        Stories NL - GB
                    </span>
                </Link>

            </motion.div>
            {
                user.isAdmin && <motion.div variants={fadeEnter}
                >
                    <Link href={'/dashboard'}>
                        <span
                            className='w-full border  flex justify-center mb-3 py-2 border-gray-700 rounded-sm hover:border-yellow-300 text-white'
                        >
                            Dashboard
                        </span>
                    </Link>

                </motion.div>
            }
        </motion.div>
    )

    return (
        <motion.div initial='initial' animate='animate' className='overflow-hidden   ' exit={{ opacity: 0 }}>
            <AppBar position="fixed" sx={{ background: 'rgba(0,0,0,.3)' }} className='  shadow-none' >
                <Container maxWidth="xl" className=' bg-transparent shadow-none' >
                    <Toolbar disableGutters>
                        <motion.div
                            initial={{
                                x: '-120%'
                            }}
                            animate={{
                                x: '0%',
                                transition: {
                                    type: 'easeOut',
                                    duration: .7

                                }
                            }}
                            className='flex'

                        >

                            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                LOGO
                            </Typography>
                        </motion.div>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Drawer
                                anchor={'left'}
                                open={open}
                                onClose={handleOpenNavMenu}
                                sx={{}}
                            >
                                <Box className='h-full overflow-x-hidden' sx={{ background: 'black', width: '50vw' }}>
                                    {Element}
                                </Box>
                            </Drawer>
                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }}>
                            <motion.div className=' flex' variants={stagger}  >
                                <motion.div className='px-5' variants={fadeInUp}
                                >
                                    <CustomLink href={'/'}>
                                        <Button

                                            sx={{ py: 0, color: 'white', display: 'block' }}
                                        >
                                            Home
                                        </Button>
                                    </CustomLink>

                                </motion.div>

                                <motion.div className='pr-5' variants={fadeInUp}
                                >
                                    <CustomLink href={'/aboutme'}>
                                        <Button

                                            sx={{ py: 0, color: 'white', display: 'block' }}
                                        >
                                            About me
                                        </Button>
                                    </CustomLink>

                                </motion.div>
                                <motion.div className='menu-collection-wrap-main pr-5' variants={fadeInUp}
                                >
                                    <Button

                                        sx={{ py: 0, color: 'white', display: 'block' }}
                                    >
                                        Collection

                                    </Button>
                                    <Collection data={collection}></Collection>
                                </motion.div>
                                <motion.div className='pr-5' variants={fadeInUp}
                                >
                                    <CustomLink href={'/category'}>
                                        <Button

                                            sx={{ py: 0, color: 'white', display: 'block' }}
                                        >
                                            Gallery
                                        </Button>
                                    </CustomLink>

                                </motion.div>
                                <motion.div className='pr-5' variants={fadeInUp}
                                >
                                    <CustomLink href={'/blogs'}>
                                        <Button

                                            sx={{ py: 0, color: 'white', display: 'block' }}
                                        >
                                            Stories NL - GB
                                        </Button>
                                    </CustomLink>

                                </motion.div>
                                {
                                    user.isAdmin && <motion.div className='pr-5' variants={fadeInUp}
                                    >
                                        <CustomLink href={'/dashboard'}>
                                            <Button

                                                sx={{ py: 0, color: 'white', display: 'block' }}
                                            >
                                                Dashboard
                                            </Button>
                                        </CustomLink>

                                    </motion.div>
                                }
                            </motion.div>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </motion.div>
    );
};

export default TopBar;