import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Countdown from 'react-countdown';
import logo from './assets/logo.svg';

function App() {
  const date = new Date(2025, 0, 1);

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="flex flex-col-reverse md:flex-row w-full max-w-5xl h-auto md:h-[500px] bg-white rounded-lg overflow-hidden shadow-lg">
        
     
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-6 md:p-10 bg-gray-50">
          <img src={logo} alt="Logo" className="w-20 md:w-24 lg:w-32 h-auto mb-4 md:mb-6" />
          
          <div className="text-center md:text-left px-2 md:px-0">
            <h3 className="text-xs md:text-sm font-light text-gray-500 uppercase">CareTrax</h3>
            <h1 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">Coming Soon</h1>
            <p className="mt-4 text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
              Stay tuned for something amazing! Our platform will be launching soon.
            </p>
          </div>

          <div className="mt-6 md:mt-8">
            <Countdown date={date} renderer={dateRenderer} />
          </div>
        </div>

     
        <div className="w-full md:w-1/2 h-64 md:h-auto flex items-center justify-center ">
          <DotLottieReact
            style={{
              width: "100%",
              height: "100%",
              maxWidth: "400px",
              maxHeight: "400px",
            }}
            src="/Animation - 1730370954380.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
}

export default App;

const dateRenderer = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="flex justify-center text-gray-800 space-x-2 text-sm md:text-lg">
      <TimeUnit value={days} label={days === 1 ? "Day" : "Days"} />
      <span className="text-2xl font-bold">:</span>
      <TimeUnit value={hours} label={hours === 1 ? "Hour" : "Hours"} />
      <span className="text-2xl font-bold">:</span>
      <TimeUnit value={minutes} label={minutes === 1 ? "Minute" : "Minutes"} />
      <span className="text-2xl font-bold">:</span>
      <TimeUnit value={seconds} label={seconds === 1 ? "Second" : "Seconds"} />
    </div>
  );
};

const TimeUnit = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <span className="text-2xl md:text-3xl font-bold">{value}</span>
    <span className="text-xs md:text-sm">{label}</span>
  </div>
);
