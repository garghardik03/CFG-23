
import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import Nav from '@/components/Nav'



import { AuthProvider } from '@/context/AuthProvider'
import FooterC from '@/components/FooterC';


export default function App({ Component, pageProps }) {

  return(

  <>
  <AuthProvider>
  <Nav/>


 

  <Component {...pageProps} />
  <FooterC/>
  </AuthProvider>

  </>
  )


}
