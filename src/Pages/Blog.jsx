import { useEffect, useState } from "react";
import BlogCard from "../components/Blog/BlogCard";
import axios from "axios";
import Blogs from ".././assets/Image/Blog.jpg"


const Blog = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://run.mocky.io/v3/99e9e1a3-9aad-4293-ae95-1c8a4e0a14d7');

        setData(response?.data);
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
    <>
    <div className="mt-16">
   <img src={Blogs} alt=""/>
   <div className="lg:text-justify font-normal mx-4 ">
   <h1 className="text-center  font-bold text-4xl">
   <p>------</p>
   Our Blogs </h1>
   <span className="font-normal text-xl text-gray-700 lg:text-justify my-4 " > At Shadbox, we consider blog titles as the keys to our insightful content. Each title is chosen carefully to give you a glimpse of the valuable knowledge and expertise shared in our blogs. Whether it's through interesting questions or clear statements, our blog titles are designed to connect with our readers and offer solutions. </span>
    
   </div>
   </div>
    <div className="flex flex-col md:flex-row mx-auto flex-wrap m-8">
   
    {data?.map((card , index)=>(
      <BlogCard key={index} card={card}/>
    ))}
   
   </div>
   </>
  );
};

export default Blog;
