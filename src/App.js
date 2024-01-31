// import pwphoto from './pwphoto.jpeg';
import pwphoto from './pwphoto.png';
import medium from './medium.jpg';
import './styles.css';
import './App.css';
import { SocialIcon } from 'react-social-icons';
import { FaBookOpen } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import { FaPenAlt } from "react-icons/fa";
import ReactTyped from "react-typed";
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App overflow-clip">
      <header className="App-header ">
      <h1 className="name font-semibold text-[62px]">
      🌱 justin guo
        </h1>
      </header>
      <div className='flex flex-row w-1/2 '>
        {/* <img src={pwphoto} className='w-[450px] h-[450px] rounded-[100px] shadow-xlg shadow-inner' alt='hi'></img> */}
        <div className='flex w-11/12 ml-10 justify-center mr-6 rounded-full'>
          <h2 className='text-[#f0f0f0] font-semibold tracking-wide text-[20px] mt-2 mb-3 '>product manager • founder  • writer • athlete </h2>
        </div>
      </div>

 

      <div className='flex flex-row justify-center '>
        
      </div>

<div className='flex flex-row mr-4 mt-3 h-[63px] mb-3'>
        <div className='w-[100px] h-[100px] rounded-[1000px] shadow-xlg hover:transform hover:scale-110 transition-transform duration-300 ease-in-out ' alt='justin guo'>
            <SocialIcon url="https://www.linkedin.com/in/justinbguo/" bgColor='#0E3B05' style={{ height: 50, width: 50}}/>
          </div>

          <div className=' hover:transform hover:scale-110 transition-transform duration-300 ease-in-out' alt='justin guo'>
            <SocialIcon url="https://open.spotify.com/user/dlz0ay7yvvu5nrmmfjd4nuhoe?si=f7a08b1e97204e7f" bgColor='#0E3B05' style={{ height: 50, width: 50 }}/>
          </div>

          <a href='https://docs.google.com/document/d/1qZzbAl-Us3-3VSjtv-62VEfONhlgbhsXO-sfxj05AkU/edit'>
          <div className='w-[50px] h-[50px] items-center justify-center flex rounded-[1000px] shadow-xlg  hover:transform hover:scale-110 transition-transform duration-300 ease-in-out ml-5  hover:bg-green-800 bg-[#0E3B05]' alt='justin guo'>
            <FaBookOpen style={{ height: 22, width: 22, color: 'white' }} />
          </div>
            </a>

          <a href='https://docs.google.com/document/d/10l9hb2p25nOWMVBlgW55dBj3zzCRoMMdvr5U5-LTa5o/edit?usp=sharing'>
          <div className=' w-[50px] h-[50px] items-center justify-center flex rounded-[1000px] shadow-xlg hover:transform hover:scale-110 transition-transform duration-300 ease-in-out ml-5 bg-[#0E3B05] hover:bg-green-800' alt='justin guo'>
            <FaBriefcase style={{ height: 22, width: 22, color: 'white',  }}/>
          </div>
          </a>

          <a href='https://medium.com/@guodini'>
          <div className=' w-[50px] h-[50px] items-center justify-center flex rounded-[1000px] shadow-xlg  hover:transform hover:scale-110 transition-transform duration-00 ease-in-out ml-5 bg-[#0E3B05] hover:bg-green-800' alt='justin guo'>
            <FaPenAlt style={{ height: 22, width: 22, color: 'white' }} />
          </div>
          </a>
  </div>
        

        

        {/* <h1 className='mt-10 text-white text-[30px] font-semibold'>Personal</h1> */}
        <div className='flex flex-row mr-20'>
        <div className='w-[120px] border-1 border-white  rounded-lg mr-3 hover:transform hover:scale-105 transition-transform duration-300 justify-evenly'>
          <p className='text-white font-normal p-3 text-center'>
            <p className='font-bold mt-12'>
            <b><i>Empathy <br/><br/><br/> Imagination <br/><br/><br/> Playfulness <br/><br/><br/> Passion <br/><br/><br/> Authenticity <br/><br/><br/> Curiosity</i></b>
            </p>
        </p>
        

        </div>
          
          <div>
      
        <div className='w-[500px] h-[50px] border-1 border-white bg-green-900 rounded-md  shadow-lg hover:bg-black hover:transform hover:scale-102 transition-transform duration-300'>
          <p className='text-white tracking-wide p-3 text-center text-[20px] font-bold'>
          <i>"think different" </i>
            <p className='font-semibold'>
            </p>
              <br/>.
        </p>
        </div>

        <div className='w-[500px]'>
          <p className='text-gray-200 font-normal tracking-wide p-3 text-start text-[18px]'>
    
            <p className='font'>
              I study Business and Computer Science at the University of Michigan Ann-Arbor. I believe in leveraging my individuality to produce impactful output for people. 
              <br/><br/>
              Some day, I want to be a founder. For now, my thing is PM, with a specialization in consumer-facing tech.<br></br><br></br> I can bring clarity, structure, and originality to organizations with a smile on my face. I pride myself on my leadership, critical thinking, and personability.
              <br/><br/>
              I'm currently working on a consumer social app <u className='bold'><a className='font-bold' href='https://joinpush.app/'>Push</a></u> and growth initiatives for <u className='bold'><a className='font-bold' href='https://open.spotify.com/artist/2BugRvdm3aasWYT3VthewW?si=bb8cc2b0bc0c4f26'>Habe</a></u>. Personally,
I love soccer, music, sunlight, dark green, building fulfilling relationships, and overcoming adversity. 
              

              
            </p>
              
        </p>
        </div>
        </div>
        
        

        </div>
 
<p className='text-white mt-6 mb-2'>jbguo@umich.edu / @justinguoo </p>
    </div>
    </Router>
  );
}

export default App;
