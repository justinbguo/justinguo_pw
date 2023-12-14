// import pwphoto from './pwphoto.jpeg';
import pwphoto from './pwphoto.png';
import './styles.css';
import './App.css';
import { SocialIcon } from 'react-social-icons';
import { FaHeadSideVirus } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import ReactTyped from "react-typed";



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="name font-semibold text-[50px]">
      🌱 justin benjamin guo
        </h1>
      </header>
      <div className='flex flex-row w-1/2 '>
        {/* <img src={pwphoto} className='w-[450px] h-[450px] rounded-[100px] shadow-xlg shadow-inner' alt='hi'></img> */}
        <div className='flex w-11/12 ml-10 justify-center mr-6 rounded-full'>
          <h2 className='text-white font-normaltracking-wide text-[20px] mt-3 '>student at umich interested in B2C product management.</h2>
        </div>
      </div>

 

      <div className='flex flex-row justify-center'>
        <div>
          <div className='w-[100px] h-[100px] rounded-[1000px] shadow-xlg mt-10 mr-5 flex items-center justify-center hover:transform hover:scale-110 transition-transform duration-300 ease-in-out' alt='justin guo'>
            <SocialIcon url="https://www.linkedin.com/in/justinbguo/" bgColor='' style={{ height: 90, width: 90 }}/>
          </div>
          <a href='https://docs.google.com/document/d/10l9hb2p25nOWMVBlgW55dBj3zzCRoMMdvr5U5-LTa5o/edit?usp=sharing'>
          <div className='w-[100px] h-[100px] rounded-[1000px] shadow-xlg bg-[#7c5f25] hover:transform hover:scale-110 transition-transform duration-300 ease-in-out mt-20 flex items-center justify-center' alt='justin guo'>
            <FaBriefcase style={{ height: 58, width: 50, color: 'white' }}/>
          </div>
          </a>
        </div>
        
        <img src={pwphoto} className='w-[300px] h-[300px] rounded-[10px] shadow-xlg shadow-inner border-2 overflow-hidden object-cover object-left mt-10 hover:transform hover:scale-105 transition-transform duration-300 ease-in-out' alt='justin guo'></img>

        <div>
          <div className='mt-12 ml-5 flex items-center justify-center hover:transform hover:scale-110 transition-transform duration-300 ease-in-out' alt='justin guo'>
            <SocialIcon url="https://open.spotify.com/user/dlz0ay7yvvu5nrmmfjd4nuhoe?si=f7a08b1e97204e7f" bgColor='' style={{ height: 90, width: 90 }}/>
          </div>

          <a href='https://docs.google.com/document/d/1qZzbAl-Us3-3VSjtv-62VEfONhlgbhsXO-sfxj05AkU/edit'>
          <div className='w-[100px] h-[100px] rounded-[1000px] shadow-xlg bg-[#115212]  mt-20 ml-5 flex items-center justify-center hover:transform hover:scale-110 transition-transform duration-300 ease-in-out' alt='justin guo'>
            <FaHeadSideVirus style={{ height: 58, width: 58, color: 'white' }} />
          </div>
          </a>
        </div>

      </div>
      <h2 className='mt-10 text-white text-[25px]'> I'm currently{" "}
        <ReactTyped
          strings={["building a consumer social app", "helping a music artist with strategy","thinking....."]}
          typeSpeed={80}
          loop
          backSpeed={30}
        />
        </h2>
        <div className='mt-6 w-1/4 bg-[#287a2a] rounded-full flex justify-center items-center mb-6'>
          <h1 className=' text-white text-[30px] font-semibold '> <u className='underline underline-offset-4'>jbguo@umich.edu</u></h1>
        </div>
        {/* <h1 className='mt-10 text-white text-[30px] font-semibold'>Professional</h1> */}
        <div className='mt-2 w-1/2  border-2 border-white bg-[#0a250a] mb-6'>
          <p className='text-white font-normal p-3 text-start'>
            <u className='underline underline-offset-4 font-bold'>Previous internships</u><br></br>
             <b>Unilever - Product Operations Intern</b> (selling Hellmann's mayonnaise to enterprises) <br></br> <b>Snack Break - PM intern</b> (developing product strategy for a new consumer social app). <br/><br/>

            <u className='underline underline-offset-4 font-bold'>Past work</u><br></br> 
            I've founded a YouTube channel with over 8M impressions, founded a direct-to-consumer online store that sold electric massage balls, and worked as a freelance video editor. <br/><br/>

            <u className='underline underline-offset-4 font-bold'>Why Product</u>? <br/>
            I really love product. I'm happy to have found something I find immensely interesting that I have an aptitude for. To be great at product is to be great at thinking. Your main responsibilities fundamentally center around analysis, decision-making, and communication (written/verbal); all skills which seep into your personal life. 
            I think when that blend between my personal and professional begins to occur, it's an indiciation that I love my work, and my learning is useful. I'm always consuming product content and seeing how it might help me make better decisions. <b>TLDR: interesting, useful, fun, me</b> <br></br><br></br>
            <u className='underline underline-offset-4 font-bold'>Technical Skills</u><br></br> 
            React Native, Tailwind CSS, HTML/CSS, C++, JavaScript, Python, Figma, Excel, Final Cut Pro<br/><br/>

            <u className='underline underline-offset-4 font-bold'>Soft Skills</u><br></br> 
            Critical Thinking, Resourcefulness, Public Speaking, Leadership, Communication, Writing, ChatGPT<br/>
        </p>
        

        </div>
        

        {/* <h1 className='mt-10 text-white text-[30px] font-semibold'>Personal</h1> */}
          
        <div className='w-1/2  border-2 border-white bg-[#0a250a]'>
          <p className='text-white font-normal p-3 text-start'>
            <u className='underline underline-offset-4 font-bold'>interests</u><br></br> soccer, philosophy, humor, fitness, music, chess, books (#nerd)  <br/>

            <u className='underline underline-offset-4 font-bold'>values</u> <br/>
            empathy, imagination, playfulness, passion, authenticity, curiosity
        </p>
        

        </div>
 
    </div>
  );
}

export default App;
