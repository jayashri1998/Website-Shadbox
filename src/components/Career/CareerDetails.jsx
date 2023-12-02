import CareerForm from "./CareerForm";
import { FaLocationDot } from "react-icons/fa6";
import { MdCastForEducation } from "react-icons/md";
import { SiLevelsdotfyi } from "react-icons/si";
import { FaPerson } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import {Fade} from "react-reveal";


const CareerDetails = () => {
    return (
      <div>
      <Fade bottom>
      <h1 className="lg:mx-32 text-2xl font-roboto text-center py-16 mt-8 font-bold ">React JS  Developer</h1>
      <hr className=" border-gray-500 border-t-4xl w-80 mx-auto" />
      </Fade>
    
      <div className=" mt-16 lg:flex lg:ml-32 "> 
      <Fade left>
        <div className="max-w-xl mx-7 mt-6 ">
         <h4 className="font-semibold text-xl font-roboto text-justify "> About this job:</h4>
         <p className="font-normal font-roboto">Proven experience as a React Developer with a strong portfolio of relevant projects.
         In-depth knowledge of JavaScript, ReactJS, and its core principles.
         Familiarity with state management libraries such as Redux.
         Experience with RESTful APIs and modern web technologies.
         Strong understanding of front-end build tools, such as Webpack, Babel, etc.
         Knowledge of server-side rendering and its benefits.
         Familiarity with code versioning tools such as Git.
         Excellent problem-solving and communication skills.
         Ability to work collaboratively in a fast-paced team environment.</p>

         <div className="mt-8 gap-4">
         <h4 className=" font-semibold  font-roboto">Job Type:<span className=" font-normal px-2 text-base">Full time</span></h4> 
         <h4 className="  font-roboto font-semibold flex">
         <FaLocationDot className="w-4 h-4 mr-2"/>Job Location:
         <span className="px-2  font-normal">Nagpur, Maharashtra India</span></h4> 
         <h4 className="font-semibold  font-roboto flex"> 
         <MdCastForEducation className="w-4 h-4 mr-2 "/>Education:
         <span className="px-2 font-normal">Bachelor's Degree
         </span></h4> 
         <h4 className="font-semibold  font-roboto flex"> 
         <SiLevelsdotfyi className="w-4 h-4 mr-2" />Experience:<span className="px-2 text-base font-normal">2+ years </span></h4> 
         <h4 className="font-semibold  font-roboto flex"><FaPerson  className="w-4 h-4 mr-2"/>Position:<span className=" font-normal px-2 ">2</span></h4> 
         </div> <h4 className="font-semibold  font-roboto flex"><GiTakeMyMoney className="w-4 h-4" />Salary:<span className= " font-normal px-2 ">20,000 - 30,000 month</span></h4> 
          </div>
          </Fade>
          <Fade right>
        <CareerForm/>
        </Fade>
      </div>
      </div>
    );
  };

  export default CareerDetails;