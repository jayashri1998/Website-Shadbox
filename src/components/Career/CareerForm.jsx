import React from 'react';
import { useForm } from 'react-hook-form';
import { HiOutlineUser, HiOutlineMail, HiOutlinePhone, HiOutlineChatAlt,HiDocumentText } from 'react-icons/hi';
import { AiOutlineGithub,AiFillLinkedin } from "react-icons/ai";
import { MdOutlineAccessTimeFilled } from "react-icons/md";


import 'react-phone-input-2/lib/style.css';

const CareerForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // You can handle the form data submission logic here
  };

  const handleEmailChange = (e) => {
    const lowercaseEmail = e.target.value.toLowerCase();
    register('email').onChange(lowercaseEmail);
  };

  const handlePhoneNumberChange = (e) => {
    // Allow only numerical input and restrict total length to ten characters
    const sanitizedValue = e.target.value.replace(/[^\d]/g, '').slice(0, 10);
    register('phone').onChange(sanitizedValue);
  };

  const handleKeyPress = (e) => {
    // Allow only numeric characters, backspace, delete, and tab
    const isValidInput = /^[0-9\b\t]+$/.test(e.key);
    if (!isValidInput) {
      e.preventDefault();
    }
  };

  return (
    <div className="max-w-md mx-auto m-8 p-6 bg-gray-100 rounded-md font-poppins">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Apply for this position</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 align-middle" htmlFor="name">
            <HiOutlineUser className="inline-block mr-2" />Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Name'
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
              errors.name ? 'border-red-500' : ''
            }`}
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email" >
            <HiOutlineMail className="inline-block mr-2" />Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder='email'
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
              errors.email ? 'border-red-500' : ''
            }`}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Invalid email address',
              },
            })}
            onChange={handleEmailChange}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

         {/* Phone Field */}
         <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            <HiOutlinePhone className="inline-block mr-2" />Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]*"
            inputMode="numeric"
            maxLength="10"
            placeholder="Enter your phone number"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
              errors.phone ? 'border-red-500' : ''
            }`}
            {...register('phone', { required: 'Phone is required' })}
            onChange={handlePhoneNumberChange}
            onKeyPress={handleKeyPress}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>

        {/* Skills Field */}
        {/* Add your skills dropdown here */}

        {/* Experience Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="experience">
          <MdOutlineAccessTimeFilled className="inline-block mr-2" />Experience (in years)
          </label>
          <input
            type="number"
            id="experience"
            name="experience"
            placeholder='experience'
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
              errors.experience ? 'border-red-500' : ''
            }`}
            {...register('experience', { required: 'Experience is required' })}
          />
          {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience.message}</p>}
        </div>

        {/* Resume Upload Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resume">
          <HiDocumentText className="inline-block mr-1 mb-1" /> Resume (PDF)
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
              errors.resume ? 'border-red-500' : ''
            }`}
            {...register('resume', { required: 'Resume is required' })}
          />
          {errors.resume && <p className="text-red-500 text-xs mt-1">{errors.resume.message}</p>}
        </div>

        {/* LinkedIn Profile URL Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="linkedin">
          <AiFillLinkedin className="inline-block mr-2 mb-1" />LinkedIn URL
          </label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            placeholder='your Linkdln Url'
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
              errors.linkedin ? 'border-red-500' : ''
            }`}
            {...register('linkedin')}
          />
          {errors.linkedin && <p className="text-red-500 text-xs mt-1">{errors.linkedin.message}</p>}
        </div>

        {/* GitHub URL Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="github">
          <AiOutlineGithub className="inline-block mr-2 mb-1"/>
GitHub URL
          </label>
          <input
            type="url"
            id="github"
            name="github"
            placeholder='your github URl'
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
              errors.github ? 'border-red-500' : ''
            }`}
            {...register('github')}
          />
          {errors.github && <p className="text-red-500 text-xs mt-1">{errors.github.message}</p>}
        </div>

        {/* Cover Letter Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="coverLetter">
            <HiOutlineChatAlt className="inline-block mr-2" />Cover Letter
          </label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            rows="4"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
              errors.coverLetter ? 'border-red-500' : ''
            }`}
            {...register('coverLetter', { required: 'Cover Letter is required' })}
          ></textarea>
          {errors.coverLetter && <p className="text-red-500 text-xs mt-1">{errors.coverLetter.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CareerForm;