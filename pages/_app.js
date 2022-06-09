import '../styles/globals.css'
import '../styles/homeCategroy.css'
import '../styles/HomeBlog.css'
import '../styles/category.css'
import '../styles/AboutMe.css'
import { wrapper } from '../src/store/store'
import { AnimatePresence } from 'framer-motion'
import EmptyLayout from '../src/Layouts/EmptyLayout'
import { ToastContainer } from 'react-toastify';
import Router from "next/router";

import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';

function MyApp({ Component, pageProps, router }) {

  const Layout = Component.Layout || EmptyLayout;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("findished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return <Layout>
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
      {
        loading && <div className='backdrop-blur z-20 bg-transparent absolute inset-0 flex justify-center items-center'>
          <CircularProgress color="inherit"></CircularProgress>

        </div>
      }
      <ToastContainer theme="dark" />
    </AnimatePresence>
  </Layout>
}

export default wrapper.withRedux(MyApp);