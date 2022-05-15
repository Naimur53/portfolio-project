import '../styles/globals.css'
import { wrapper } from '../src/store/store'
import { AnimatePresence } from 'framer-motion'
function MyApp({ Component, pageProps, router }) {
  const Layout = Component.Layout || EmptyLayout;
  return <AnimatePresence exitBeforeEnter> <Component {...pageProps} key={router.route} /> </AnimatePresence>
}
const EmptyLayout = ({ children }) => <>{children}</>
export default wrapper.withRedux(MyApp);