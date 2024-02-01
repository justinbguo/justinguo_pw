// import pwphoto from './pwphoto.jpeg';
import React, { useState } from 'react';

import pwphoto from './pwphoto.png';
import medium from './medium.jpg';
import './styles.css';
import './App.css';
import { SocialIcon } from 'react-social-icons';
import { FaBookOpen } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaPenAlt } from "react-icons/fa";
import {ReactTyped} from "react-typed";
import { FaCirclePlay } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { backdropClasses } from '@mui/material';



function App() {
  return (
    <Router>
    <div className="App overflow-clip">
      <header className="App-header ">
      <h1 className="name font-bold text-[62px] ">

        </h1>
      </header>
      

 

      <div className='flex flex-row justify-center '>
        
      </div>
{/* 
<div className='flex flex-row mr-4 mt-3 h-[63px]'>
        <div className='w-[100px] h-[100px] rounded-[1000px] shadow-xlg  target=”_blank”' alt='justin guo'>
            <SocialIcon url="https://www.linkedin.com/in/justinbguo/ "  bgColor='#0E3B05' target="_blank"style={{ height: 50, width: 50}} />
          </div>

          <div className=' ' alt='justin guo'>
            <SocialIcon url="https://open.spotify.com/user/dlz0ay7yvvu5nrmmfjd4nuhoe?si=f7a08b1e97204e7f" className=''bgColor='#0E3B05' target="_blank" style={{ height: 50, width: 50 }}/>
          </div>

          <a href='https://docs.google.com/document/d/1qZzbAl-Us3-3VSjtv-62VEfONhlgbhsXO-sfxj05AkU/edit ' target="_blank">
          <div className='items-center justify-center flex rounded-[1000px] shadow-xlg   ml-3  hover:bg-green-800 bg-[#8E6E51]' alt='justin guo'>
            <FaBookOpen style={{ height: 27, width: 27, color: 'white' }} />
          </div>
            </a>

          <a href='https://docs.google.com/document/d/10l9hb2p25nOWMVBlgW55dBj3zzCRoMMdvr5U5-LTa5o/edit?usp=sharing 'target="_blank" >
          <div className=' items-center justify-center flex rounded-[1000px] shadow-xlg  ml-3 bg-[#8E6E51] hover:bg-green-800' alt='justin guo'>
            <FaBriefcase style={{ height: 27, width: 27, color: 'white',  }}/>
          </div>
          </a>

          <a href='https://medium.com/@guodini' target="_blank">
          <div className=' items-center justify-center flex rounded-[1000px] shadow-xlg  hover:transform hover:scale-110 transition-transform duration-00 ease-in-out ml-3 bg-[#8E6E51] hover:bg-green-800' alt='justin guo'>
            <FaPenAlt style={{ height: 27, width: 27, color: 'white' }} />
          </div>
          </a>
  </div> */}
        

        

        {/* <h1 className='mt-10 text-white text-[30px] font-semibold'>Personal</h1> */}
        <div className='flex flex-row mr-20'>
        <div className='w-[120px] border-1 border-white  rounded-lg mr-3 justify-evenly'>
          <p className='text-white font-normal p-3 text-end'>
            <p className='font-bold'>
              <p className='hover:transform hover:scale-105 transition-transform duration-300 protate-3d mb-[60px] hover:text-green-200 mt-[58px] '>
                intro <br/><br/>
              </p>
              <p className='hover:transform hover:scale-105 transition-transform duration-300 mb-8 protate-3d  hover:text-blue-300'>
                career<br/><br/>
              </p>
              <p className='hover:transform hover:scale-105 transition-transform duration-300  protate-3d mb-8 hover:text-yellow-200 '>
                strengths<br/><br/>
              </p>
              <p className='hover:transform hover:scale-105 transition-transform duration-300 protate-3d mb-[60px] hover:text-red-400'>
                current<br/><br/>
              </p>
              <p className='hover:transform hover:scale-105 transition-transform duration-300 protate-3d mb-[60px] hover:text-orange-300'>
                personal<br/><br/>
              </p>
              <p className='hover:transform hover:scale-105 transition-transform duration-300 protate-3d mb-12 hover:text-purple-300'>
                contact<br/><br/><br/>
              </p>
            </p>
        </p>


        

        </div>
          
          <div>
      

          <p className='text-white tracking-wide text-center text-[30px] font-bold mt-2'>
          <p className='title underline-animation absolute ml-3'>justin guo • 
        <ReactTyped className='ml-2'
          strings={["product manager", "founder", "father of three", "kidding", "think different","writer", "athlete"]}
          typeSpeed={80}
          loop
          backSpeed={30}
        />


    <br />

    

           </p>
          
          
          <div>
    <br />

   
  </div>

        </p>
        <div className='flex flex-row  '>
        {/* <img src={pwphoto} className='w-[450px] h-[450px] rounded-[100px] shadow-xlg shadow-inner' alt='hi'></img> */}

        {/* <div className='justify-center rounded-full mt-3'>
          <h2 className='text-[#f0f0f0] font-semibold tracking-wide text-[20px] '>product manager • founder  • writer • athlete </h2>
        </div> */}
      </div>

        <div className='w-[590px]'>
          
          <p className='text-gray-200 font-normal tracking-wide p-3 text-start text-[18px]'>
    
            <p>
              hey! i study <u>business & cs</u> at the <u>university of michigan ann-arbor</u>. my goal is to sharpen my individuality and then leverage it to create something positive to give back to the world.
              <br/><br/>
              my professional focus lies in <u className=' underline-offset-2'>entrepreneurship</u> and <u>product management</u> with emphasis in consumer-facing software.<br></br><br></br> 
              leadership, business acumen, product sense, intuition, critical thinking, resourcefulness, curiosity, positive attitude, cleverness. 
              <br/><br/>
              as a wannabe founder, i love side projects. i'm currently working to build a consumer social app <u className='bold text-white-700 hover:text-green-600 transition-colors duration-500'><a  target="_blank" className='font-bold'  href='https://joinpush.app/' >push</a></u> with two engineers and propel an amazing artist <u className='bold bold text-white-700 hover:text-orange-600 transition-colors duration-500'><a  target="_blank" className='font-bold' href='https://open.spotify.com/artist/2BugRvdm3aasWYT3VthewW?si=bb8cc2b0bc0c4f26'>habe</a></u> to Spotify stardom. 
              <br/><br/>huge fan of soccer, music, and esoteric shades of green. 
              <br/>huge hater of gossip, raisins, and too much walking. 

              <br/> if you're in a good mood, read my 2nd brain or my writing below
              <br></br><br></br> to say hi and/or employ me → <a href="mailto:jbguo@umich.edu" class="email-button" className='  underline-offset-1-bold text-[18px] hover:text-green-600 transition-colors duration-500'>jbguo@umich.edu</a>


              

              
            </p>
              
        </p>
        
        </div>
        <div className='h-1 w-11/12 bg-white ml-3 rounded-lg'></div>

<div className='flex flex-row mt-3 justify-between w-[150px] ml-3'>
<a href='https://www.linkedin.com/in/justinbguo/' target="_blank">
    <div className='items-center justify-evenly flex rounded-sm shadow-xlg hover:bg-[#0B5FB6] duration-500 p-1 mb-12 ' alt='justin guo'>
          <FaLinkedinIn className="h-5 w-5 text-white transition-colors duration-200 " />
          </div>
          </a>
          <a href='https://open.spotify.com/user/dlz0ay7yvvu5nrmmfjd4nuhoe?si=022b198c7c1842e5' target="_blank">
          <div className='items-center justify-evenly flex rounded-[1000px] shadow-xlg mt-1 ml-2  ' alt='justin guo'>
          <FaSpotify className="h-5 w-5 text-white hover:text-[#1BD760] transition-colors duration-200"  />
          </div>
          </a>
          <a href='https://docs.google.com/document/d/10l9hb2p25nOWMVBlgW55dBj3zzCRoMMdvr5U5-LTa5o/edit?usp=sharing 'target="_blank" >
          <div className='items-center justify-evenly flex rounded-[1000px] shadow-xlg mt-1 ml-3' alt='justin guo'>
            <FaBriefcase className="h-5 w-5 text-white hover:text-[#b6997e] transition-colors duration-200" />
          </div>
          </a>

          <a href='https://docs.google.com/document/d/1qZzbAl-Us3-3VSjtv-62VEfONhlgbhsXO-sfxj05AkU/edit ' target="_blank">
          <div className='items-center justify-evenly flex rounded-[1000px] shadow-xlg mt-1 ml-3' alt='justin guo'>
            <FaBookOpen className="h-5 w-5 text-white hover:text-orange-300 transition-colors duration-200"  />
          </div>
            </a>


          <a href='https://medium.com/@guodini' target="_blank">
          <div className='items-center justify-evenly flex rounded-[1000px] shadow-xlg mt-1 ml-3' alt='justin guo'>
            <FaPenAlt className="h-5 w-5 text-white hover:text-green-700 transition-colors duration-200"  />
          </div>
          </a>
  </div>
        </div>
        
        

        </div>
 
{/* <p className='text-white mt-10 mb-6'>jbguo@umich.edu / @justinguoo </p> */}
    </div>
    </Router>
  );
}

export default App;
