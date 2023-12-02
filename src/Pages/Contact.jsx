import React from 'react'
import HireForm from '../components/HireForm/HireForm'
import ContactContain from '../components/ContactUS/ContactContain'
import { Fade } from 'react-reveal'
import GetInTouch from '../components/OtherFile/GetInTouch'
import ContactUs from '../assets/Image/ContactUs.jpg'
import contactmain from '.././assets/Image/contactmain.jpg'


const Contact = () => {
  return (
    <div className=" mt-16">
 <img src={ContactUs} alt='' className='w-full h-32 lg:h-[340px]'/>
    <div className='text-center font-poppins text-2xl'>
  <p className=' text-4xl font-semibold'>------ </p>
  <span className='text-4xl font-semibold  '>Drop your Message!! </span>
  <p className='font-normal text-xl text-gray-600 lg:text-justify m-4'>Feel free to get in touch with us at Shadbox! We're here to answer any questions you may have, discuss your project ideas, or provide assistance. Whether you're looking to collaborate on a new web development project, explore partnership opportunities, or simply say hello, our team is ready to connect. Reach out to us, and let's start a conversation about turning your digital vision into a reality. Your success begins with a simple 'hello' – contact Shadbox today</p>
  </div>
    <div className=" lg:flex items-center justify-around ">
    <div>
    <Fade left>
    <img src={contactmain} alt='' className='w-96 h-96'/>
    <ContactContain/>
    </Fade>
    </div>
    <Fade right>
    <HireForm/>
    </Fade>
    </div>
    <Fade bottom>
    <div className='m-4'>
    <GetInTouch />
    </div>
    </Fade>
    
    
    </div>
  )
}


export default Contact