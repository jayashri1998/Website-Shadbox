import GetInTouch from "../components/OtherFile/GetInTouch";
import LogoSlider from "../components/Home/LogoSlider";
import ServiceCard from "../components/Service/ServiceCard";
import TechStack from "../components/OtherFile/TechStack";
import Fade from 'react-reveal';
import WhyShadbox from "../components/OtherFile/WhyShadbox";

const Services = () => {
  const serviceData = [
    {
      name: "Web Development",
      about:
        "We create dynamic and user-friendly websites tailored to your specific requirements. Whether you need a simple informational site or a complex e-commerce platform, our web development services cover everything from design and development to maintenance and support.",
      imageUrl: "https://img.icons8.com/clouds/100/code.png",
    },
    {
      name: "Mobile Apps Development",
      about:
        "In today's mobile-driven world, having a mobile app for your business is crucial. Our experienced developers specialize in crafting intuitive and feature-rich mobile applications for both Android and iOS platforms. From concept to deployment, we ensure that your app aligns with your business goals and engages your target audience effectively.",
      imageUrl: "https://img.icons8.com/clouds/100/touchscreen-smartphone.png",
    },
    {
      name: "Custom Software Development",
      about:
        " If you have unique business requirements that cannot be fulfilled by off-the-shelf solutions, our custom software development services are here to help. We work closely with you to understand your specific needs and develop tailored software solutions that streamline your operations, increase efficiency, and drive growth.",
      imageUrl: "https://img.icons8.com/clouds/100/programming-flag.png",
    },
    
  ];
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-3 mx-11 mt-14">
       <Fade left>
      <div>
          <h1 className="text-4xl font-roboto font-bold tracking-wide">
            Welcome to{" "}
            <span className="underline decoration-[#2563EB] underline-offset-4">
              Shad<span className="text-[#2563EB]">Box</span>
            </span>
            <br /> service section,
          </h1>
          <p className="mt-5 text-lg font-medium text-justify text-gray-500">
            We specialize in providing a wide range of professional services to
            meet your web and mobile development needs. With our expertise and
            passion for innovation, we strive to deliver top-notch solutions
            that enhance your online presence and drive your business forward.
          </p>
        </div>
        </Fade>
        <Fade right>
        <div className="mx-3">
          <img
            className=" max-w-sm md:max-w-lg rounded-lg hover:shadow-lg hover:scale-105 transition"
            src="https://images.pexels.com/photos/5077048/pexels-photo-5077048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        </Fade>
      </div>
      <LogoSlider/>
      <Fade bottom>
      <div className="flex flex-col md:flex-row gap-4 mt-20 mx-4">
        {serviceData.map((service, index) => (
          <ServiceCard
            key={index}
            name={service.name}
            about={service.about}
            imageUrl={service.imageUrl}
          />
        ))}
      </div>
      </Fade>
      <Fade bottom>
      <TechStack/>
      </Fade>
      <Fade bottom>
      <GetInTouch/>
      </Fade>
      <Fade bottom>
      <WhyShadbox/>
      </Fade>
    </div>
  );
};

export default Services;