import background from "../../assets/Image/background.jpg"


const BlogCard = ({card}) => {

  

    return (
      <div className="max-w-2xl mx-8 my-12">
      {console.log(card)}
      <a href="/blogsection">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl  leading-5  transform transition duration-1000 hover:scale-110">
        
          
            <img
              className="rounded-t-lg"
              src={card?.banner_image}
              alt
            />
          
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 transform transition duration-500 hover:text-[#2563EB]">
                {card?.title}
              </h5>
            </a>
            
            <p className="mb-3 font-normal text-gray-700 text-justify">
              {card?.summary}
            </p>
           
            <div className="flex items-center gap-5 my-4">
          <div className="flex items-center gap-2">
            <img
              src={card?.author_photo}
              className="w-8 h-8 rounded-full"
            />
  
            <h4 className="font-roboto text-gray-500 ">{card?.author}</h4>
          </div>
          <h4 className="font-roboto text-gray-500 ">{card?.published_date
          }</h4>
        </div>
          </div>
        </div>
        </a>
      </div>
    );
  };
  
  export default BlogCard;