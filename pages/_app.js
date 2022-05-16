import '../styles/globals.css'
import { wrapper } from '../src/store/store'
import { AnimatePresence } from 'framer-motion'
function MyApp({ Component, pageProps, router }) {
  const Layout = Component.Layout || EmptyLayout;
  return <Layout> <AnimatePresence exitBeforeEnter> <Component {...pageProps} key={router.route} /> </AnimatePresence></Layout>
}
const EmptyLayout = ({ children }) => <>{children}</>
export default wrapper.withRedux(MyApp);