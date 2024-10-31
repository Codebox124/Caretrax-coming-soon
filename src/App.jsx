import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Countdown from 'react-countdown';
import Image from './assets/img1.png'; 
import logo from './assets/logo.svg'; 

function App() {
  const date = new Date(2025, 0, 1)
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
    
      <div style={{
        height:"500px",
      }} className="flex flex-col md:flex-row w-full h-full max-w-5xl overflow-hidden bg-white rounded-lg ">
        
       
        <div 
        style={{
          width:"50%",
        }}
        className="flex flex-col items-center justify-center w-full md:w-1/2 p-10 bg-gray-50">
          
          <img src={logo} alt="Logo" className="w-24 md:w-32 h-auto mb-6" />

          
          <div className="text-center md:text-left">
            <h3 className="text-sm font-light text-gray-500 uppercase ">CareTrax</h3>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold text-gray-800">Coming Soon</h1>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Stay tuned for something amazing! Our platform will be launching soon.
            </p>
          </div>
          
        
          <div className="flex items-center mt-8 space-x-2">
            {/*<span className="w-3 h-3 bg-orange-500 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-300 rounded-full"></span>*/}
          
           <Countdown  date={date} renderer={dateRenderer} />
        
          </div>

         
        </div>

        
        {/*<div className="w-full md:w-1/2 h-64 md:h-full">
          {/*<img src={Image} alt="Coming Soon" className="object-cover w-full h-full" />
        </div>*/}
           <DotLottieReact
            style={{
              width:"50%",
              height:"100%",
            }}
      src="/Animation - 1730370954380.lottie"
      loop
      autoplay
    />
      </div>
    </div>
  );
}

export default App;

const style = {
  fontSize:"max(13px, 1vw)"
}

const dateRenderer = ({ days, hours, minutes, seconds})=>{
  return  <div className="countdown">
    <div>
      <span>{days}</span>
      <span style={style} >{days===1?"Day":"Days"}</span>
    </div>
    <div>
      :
    </div>
    <div>
      <span>{hours}</span>
      <span style={style} >{hours===1?"Hour":"Hours"}</span>
    </div>
    <div>
      :
    </div>
    <div>
      <span>{minutes}</span>
      <span style={style} >{minutes===1?"Minute":"Minutes"}</span>
    </div>
    <div>
      :
    </div>
    <div>
      <span>{seconds}</span>
      <span style={style} >{seconds===1?"Second":"Seconds"}</span>
    </div>
  </div>
}