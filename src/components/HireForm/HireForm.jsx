import { useForm } from 'react-hook-form';
import { HiOutlineUser, HiOutlineMail, HiOutlinePhone, HiOutlineChatAlt } from 'react-icons/hi';
import style from './HireForm.module.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const HireForm = () => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  const onSubmit = (data) => {
    console.log(data); 
  };

  const handleEmailChange = (e) => {
    setValue('email', e.target.value.toLowerCase());
  };


  return (
 
    
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl lg:w-[600px] p-6 lg:ml-32 bg-gray-100 rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          <HiOutlineUser className="inline-block mr-2" /> Name
        </label>
        <input
          {...register('name', { required: 'Name is required' })}
          type="text"
          placeholder="Enter your name"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          <HiOutlineMail className="inline-block mr-2" />Email
        </label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Invalid email address',
            },
          })}
          type="text"
          onChange={handleEmailChange}
          placeholder="Enter your email"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2 w-fit" htmlFor="phone">
          <HiOutlinePhone className="inline-block mr-2" />Phone Number
        </label>
        <PhoneInput
          inputProps={{
            name: 'phone',
            required: true,
          }}
          country={'us'}
          
          containerStyle={{borderColor:'#e5e7eb'}}
          inputClass={`${style.customPhoneInput}  w-96 h-12  px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
          placeholder="Enter your phone number"
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='requirement'>
          <HiOutlineChatAlt className="inline-block mr-2" />Describe Your Requirement
        </label>
        <textarea
          {...register('requirement', { required: 'Requirement description is required' })}
          placeholder="Describe your requirement"
          className={`${style.customScrollbar} w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
        />
        {errors.requirement && <p className="text-red-500 text-xs mt-1">{errors.requirement.message}</p>}
      </div>

      <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
};

export default HireForm;