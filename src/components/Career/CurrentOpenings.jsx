import  { useEffect, useState } from 'react';

import axios from 'axios';


const CurrentOpenings = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://run.mocky.io/v3/2e82145a-34aa-4fa3-8e5f-9fd5a1909fbb');

        setData(response?.data?.data);
        console.log(response)
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); 


    return (
      
      <div className="text-center my-10 font-poppins">
        <h1 className="text-6xl text-red-500 font-poppins font-semibold animate-pulse">
          Current Openings
        </h1>
        {console.log(data?.cards)}
        <div className="flex flex-col md:flex-row flex-wrap  mt-8">
        {data?.cards.map((card,index)=>(
          <div key={index} className=" mx-8 max-w-sm mb-6 text-center border-2 rounded-lg px-5 py-8 hover:shadow-2xl transition-shadow duration-300 font-roboto">
       
            <h1 className="font-medium text-2xl my-3 hover:text-red-500 transition duration-300">
              {card.title} 
            </h1>
            <h2 className="text-start my-2 text-lg font-medium">Key Responsibilties:</h2>
            {console.log(card.key_roles)}
           
            <ul  className="list-disc text-start tracking-wide leading-8 ml-4">
             {card?.key_roles.map((roles,roleIndex)=>(
              <li key={roleIndex}>{roles}</li>
             ))}
            </ul>
            <div className="text-start my-2">
            {card?.skills.length > 0 && (
              <div>
                <h2 className="font-medium">Skills:</h2>
                <p>{card.skills.join(', ')}</p>
              </div>
            )}
            </div>
            
           <div className="text-start my-2">
              <h2 className="font-medium">Experience:</h2>
              
              <h3>{card.experience} <span className="text-gray-500">(required)</span></h3>
              
           </div>
           <button type='butto' className='border rounded-lg w-full font-medium mt-8 p-3 hover:bg-blue-500 ' onClick={()=> window.location.href='/career/details' } >Apply Now</button>
      
             </div>
            
        ))}
</div>
</div>

    );
  };
  
  export default CurrentOpenings;