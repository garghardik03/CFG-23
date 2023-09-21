

import { Inter } from 'next/font/google'

import DonateUs from '@/components/DonateUs'
// import Aboutus from '@/components/Aboutus'
const inter = Inter({ subsets: ['latin'] })






import Testimonials from '@/components/Testimonials'
import Testimonial_FeedBack from '@/components/Testimonial_FeedBack'
import Programmes from '@/components/Programmes'
import ChartStats from '@/components/ChartStats'
export default function Home() {
  
  return (

    

<main>
      
      {/* <Aboutus/> */}
      <div id='About' className='m-8'>
      <h5 className='text-gray-800 font-semibold mx-auto my-4 text-center text-4xl'>About Us</h5>
      <DonateUs/>

      </div>
      <div id='Programmes' className='m-8'>
      <h5 className='text-gray-800 font-semibold mx-auto my-4 text-center text-4xl'>Our Programmes</h5>
      <Programmes/>
      </div>
      <div id='Statics' className='m-8'>
      <h5 className='text-gray-800 font-semibold mx-auto my-4 text-center text-4xl'>Statics</h5>
      <ChartStats/>
      </div>


      <div id='Testinomial' className='m-8'>
      <h5 className='text-gray-800 font-semibold mx-auto my-4 text-center text-4xl'>Testinomials</h5>


      <Testimonials />
      </div>
      <h5 className='text-gray-800 font-semibold mx-auto my-4 text-center text-4xl'>Provide Your Feedbacks</h5>
    
      <Testimonial_FeedBack />

      
 </main>


  )

}