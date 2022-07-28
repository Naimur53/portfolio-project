
import { Avatar, Button, CircularProgress, Container } from "@mui/material";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";
import Link from "next/link";
import { allData } from "../dataSlice/dataSlice";
import { useSelector } from "react-redux";
import useFirebase from "../hooks/useFirebase";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import CategoryIcon from '@mui/icons-material/Category';
import AddTaskIcon from '@mui/icons-material/AddTask';
import HomeIcon from '@mui/icons-material/Home';
import { useRouter } from "next/router";

const DashboardLayout = ({ children, window }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const drawerWidth = 240;
    const { user, loading } = useSelector(allData)
    const { } = useFirebase()
    const router = useRouter();

    useEffect(() => {

    }, [loading, router, user])
    console.log(loading, user)

    if (loading) {
        return <div className="h-screen items-center flex justify-center">
            <CircularProgress color='inherit'></CircularProgress>
        </div>
    }


    const drawer = (
        <div className="">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mt: 2,
                }}
            >
                <Avatar
                    sx={{ width: 70, height: 70 }}
                    src={user?.photoURL}
                    alt='admin img'
                />
                <Typography variant="h6" gutterBottom mt={1}>
                    {user?.displayName}
                </Typography>
            </Box>
            <Divider />
            <List>
                <ListItem disablePadding>

                    <ListItemButton>
                        <h2 className='ml-3 text-gray-400'>Main</h2>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: { sm: 'block', md: 'none', } }}>
                    <Link href="/">

                        <ListItemButton sx={{
                            py: 2,
                            background: router.pathname == "/" ? "black" : ""
                        }}>
                            <ListItemIcon sx={{ m: 0, p: 0, color: 'rgb(249 250 251)' }} >
                                <HomeIcon />
                            </ListItemIcon>
                            <h2>Home</h2>
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link href="/dashboard">

                        <ListItemButton sx={{
                            py: 2,
                            background: router.pathname == "/dashboard" ? "black" : ""
                        }}>
                            <ListItemIcon sx={{ m: 0, p: 0, color: 'rgb(249 250 251)' }}  >
                                <RemoveRedEyeIcon />
                            </ListItemIcon>
                            <h2>Overview</h2>
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link href="/dashboard/addCategory">

                        <ListItemButton

                            sx={{
                                py: 2,
                                background: router.pathname == "/dashboard/addCategory" ? "black" : ""
                            }}>
                            <ListItemIcon sx={{ m: 0, p: 0, color: 'rgb(249 250 251)' }}  >
                                <ControlPointDuplicateIcon />
                            </ListItemIcon>
                            <h2>Add category</h2>
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link href="/dashboard/addBlog">
                        <ListItemButton
                            sx={{
                                py: 2,
                                background: router.pathname == "/dashboard/addBlog" ? "black" : ""
                            }}
                        >
                            <ListItemIcon sx={{ m: 0, p: 0, color: 'rgb(249 250 251)' }}  >
                                <DriveFileRenameOutlineIcon />
                            </ListItemIcon>
                            <h2>Write a blog</h2>
                        </ListItemButton>
                    </Link>
                </ListItem>


                <ListItem disablePadding>

                    <ListItemButton>
                        <h2 className='ml-3 text-gray-400'>Setting</h2>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <Link href="/dashboard/allCategory">

                        <ListItemButton
                            sx={{
                                py: 2,
                                background: router.pathname == "/dashboard/allCategory" ? "black" : ""
                            }}
                        >
                            <ListItemIcon sx={{ m: 0, p: 0, color: 'rgb(249 250 251)' }} >
                                <CategoryIcon />
                            </ListItemIcon>
                            <h2>All category</h2>
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link href="/dashboard/allBlogs">

                        <ListItemButton
                            sx={{
                                py: 2,
                                background: router.pathname == "/dashboard/allBlogs" ? "black" : ""
                            }}
                        >
                            <ListItemIcon sx={{ m: 0, p: 0, color: 'rgb(249 250 251)' }} >
                                <InboxIcon />
                            </ListItemIcon>
                            <h2>All blogs</h2>
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link href="/dashboard/chooseDropdown">

                        <ListItemButton
                            sx={{
                                py: 2,
                                background: router.pathname == "/dashboard/chooseDropdown" ? "black" : ""
                            }}
                        >
                            <ListItemIcon sx={{ m: 0, p: 0, color: 'rgb(249 250 251)' }}  >
                                <AddTaskIcon />
                            </ListItemIcon>
                            <h2>Choose menu</h2>
                        </ListItemButton>
                    </Link>
                </ListItem>
            </List>

        </div>
    );


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const container = window !== undefined ? () => window().document.body : undefined;
    if (!loading && !user?.isAdmin) {
        router.push('/login')
        return <div className="h-screen flex justify-center items-center">
            <h2 className="text-xl text-white">
                Authorizing...
            </h2>

        </div>
    } else {
        return (<Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className='bg-black'
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    background: 'black'
                }}
            >
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        {/* <img src="https://i.ibb.co/n8Wp01q/web-logo.png" width="120" alt="weblogo" /> */}
                        <h2 className="text-3xl">MR.John logo</h2>

                    </Box>
                    <Typography sx={{ display: { xs: "none", md: "block" } }}>
                        <Link
                            style={{ textDecoration: "none", color: "gray" }}
                            href="/"
                        >
                            <Button color="inherit">Home</Button>
                        </Link>
                        <Link
                            style={{ textDecoration: "none", color: "gray" }}
                            href="/blogs"
                        >
                            <Button color="inherit">Blogs</Button>
                        </Link>
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    PaperProps={{
                        sx: {
                            color: "rgb(249 250 251)",
                            background: "rgb(17 24 39)",

                        }
                    }}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    PaperProps={{
                        sx: {
                            color: "rgb(249 250 251)",
                            background: "rgb(17 24 39)",

                        }
                    }}
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, background: 'black', width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box >
        );
    }

};

export default DashboardLayout;