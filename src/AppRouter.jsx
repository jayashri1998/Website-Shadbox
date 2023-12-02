import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Career from './Pages/Career'
import Service from './Pages/Service'
import Contact from './Pages/Contact'
import About from './Pages/About'
import HireDeveloper from './Pages/HireDeveloper'
import Blog from './Pages/Blog'
import BlogSection from './components/Blog/BlogSection'
import MobileApp from './components/Service/MobileApp'
import WebDevelopment from './components/Service/WebDevelopment'
import HireSoftware from './components/Service/HireSoftware'
import Integration from './components/Service/Integration&Migration'
import UXDesigner from './components/Service/UXDesigner'
import CareerDetails from './components/Career/CareerDetails'
import PrivacyPolicy from './components/OtherFile/PrivacyPolicy'
import Approach from './components/About/Approach'
import Solution from './components/About/Solution'
import Success from './components/About/Success'
import Industries from './components/About/Industries'
 


const AppRouter = () => {
  return (

   <Router>
  
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/service" element={<Service/>}/>
   <Route path="/about" element={<About/>}/>
   <Route path="/career" element={<Career/>}/>
   <Route path="/contact" element={<Contact/>}/>
   <Route path='/blog' element={<Blog/>}/>
   <Route path='/hiredeveloper' element={<HireDeveloper/>}/>
   <Route path='/blogsection' element={<BlogSection/>}/>
   <Route path ='/service/mobileapp' element={<MobileApp/>}/>
   <Route path='/service/webdevelopment' element={<WebDevelopment/>}/>
   <Route path='/service/hiresoftware' element={<HireSoftware/>}/>
   <Route path= '/service/integration' element={<Integration/>}/>
   <Route path='/service/uxdesign' element= {<UXDesigner/>}/>
   <Route path = '/career/details' element ={<CareerDetails/>}/>
   <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
   <Route path='/about/approach' element={<Approach/>}/>
   <Route path='/about/solution' element={<Solution/>}/>
   <Route path='/about/success' element={<Success/>}/>
   <Route path='/about/industries' element={<Industries/>}/>
 
    </Routes>
   
   </Router>

  )
}

export default AppRouter