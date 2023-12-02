
import './App.css'
import Navabar from './components/Navbar/Navabar'
import AppRouter from './AppRouter'
import Footer from './components/Footer/Footer'
import AnimatedCursor from 'react-animated-cursor'
import ScrollIndicator from './components/OtherFile/ScrollIndicator'
import SocialMedia from './components/SocialMedia/SocialMedia'
import { useEffect, useState } from 'react'
import Loader from './components/OtherFile/Loader'

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
   const loadingTimeout = setTimeout(() =>{
    setLoading(false);

   }, 1000);
   return () => clearTimeout(loadingTimeout)
  }, []);

  return (
  <div>
  { loading? (
   <Loader/>
  ):(
    <>
    <ScrollIndicator />
      <AnimatedCursor
        innerSize={20}
        outerSize={30}
        color="37, 99, 235"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
     
      <Navabar />
     
      <AppRouter />
     <SocialMedia/>
      <Footer />
      </>
  )}
      </div>

      
  )
}

export default App
