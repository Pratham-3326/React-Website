import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 Hi, I'm Prathamesh Narawade,🚀 As a dedicated React.js developer, I'm passionate about crafting seamless and engaging user experiences. My journey in the world of front-end development has equipped me with a strong command of React.js and its ecosystem. <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/nithin-manda-728019214/' target='_blank'>Software developer</a>
              <br />
              👨‍💻 With a focus on writing clean, modular, and maintainable code, I thrive in translating design concepts into efficient and scalable applications. I'm well-versed in leveraging state management tools like Redux and ensuring optimal performance across different browsers.
            <br/>
              💡 What sets me apart is my commitment to staying at the forefront of web development trends. I enjoy tackling challenges head-on and am always eager to explore innovative solutions to enhance the user interface and overall functionality.</p>

            <ButtonLink
              url='https://drive.google.com/drive/home'
              text='View Resume →'
              padding={`p-3`}
            />

          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;