import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../components/Layout';
import '../styles/globals.css';
import { GetData } from '../utils/getData';


function MyApp({ Component, pageProps }) {

const allgetting = GetData();


  return (
    <Layout>
      <ToastContainer position='top-center' autoClose={1500} />
      <Component {...pageProps} allgetting={allgetting}/>
    </Layout>
  )
}

export default MyApp;
