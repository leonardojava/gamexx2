"use client";

import React, { useState,useEffect,useRef } from 'react';
import { Award, Star, Sparkles} from 'lucide-react';

export default function CertificateTemp({recipientName, courseName}) {
  const [certificateData, setCertificateData] = useState({
    recipientName: recipientName || ':3',
    courseName: courseName || ':3',
    organization: 'Leo : 3',
  });
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.loop = true;
      audio.play().catch(err => {
        console.warn("Audio playback prevented:", err);
      });
    }
  }, []);


 

  return (
    <div className="min-h-screen bg-cyan-400 p-8 flex items-center justify-center relative overflow-hidden">
      <audio ref={audioRef} src="/scream.mp3"/>
      
      <div className="absolute inset-0 opacity-80">
        <div className="absolute inset-0 bg-red-500 animate-pulse" style={{ animationDuration: '0.21s', animationDelay: '0.03s' }}></div>
      </div>
      
      <div className="relative">
        
        <div className="absolute inset-0 bg-lime-400 rounded-3xl blur-xl opacity-85 animate-pulse" style={{ animationDuration: '0.14s', animationDelay: '0.08s' }}></div>
        
        
        
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full min-w-300">
          
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-bounce"></div>
            <div className="absolute top-32 right-20 w-20 h-20 bg-gradient-to-br from-pink-500 to-red-500 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-20 left-32 w-24 h-24 bg-gradient-to-br from-green-500 to-blue-500 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-32 right-10 w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          </div>

          
          <div className="relative z-10 animate-pulse bg-fuchsia-400 p-8 text-center" style={{ animationDuration: '0.14s', animationDelay: '0.08s' }}>
            <div className="flex items-center justify-center mb-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mr-4">
                <Award className="w-12 h-12 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white tracking-wide">CERTIFICATE</h1>
                <p className="text-xl text-white/90 font-light">of Achievement</p>
              </div>
            </div>
            <button onClick={() => audioRef.current.play()}  className="bg-cyan-500 text-white font-bold py-2 px-4 rounded animate-pulse" style={{ animationDuration: '0.21s', animationDelay: '0.03s' }}>Play Music</button>
            
            <div className="flex justify-center space-x-4 mt-4">
              <Star className="w-6 h-6 text-yellow-300 fill-current animate-pulse" />
              <Star className="w-8 h-8 text-yellow-300 fill-current animate-pulse" style={{ animationDelay: '0.5s' }} />
              <Star className="w-6 h-6 text-yellow-300 fill-current animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>

         
          <div className="relative z-10 p-12">
            <div className="text-center mb-8">
              <p className="text-2xl text-gray-600 mb-6 font-light">This is to certify that</p>
              
              
              <div className="relative mb-8">
                <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {certificateData.recipientName}
                </h2>
                <div className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto w-64"></div>
              </div>

              <p className="text-xl text-gray-600 mb-4">throughout the heavens and the earth is alone</p>
              
              {/* Course Name */}
              <h3 className="text-3xl font-semibold text-gray-800 mb-8 relative">
                <Sparkles className="inline-block w-6 h-6 text-yellow-500 ml-2 animate-spin" style={{ animationDuration: '0.5s' }} />
                {certificateData.courseName}
                <Sparkles className="inline-block w-6 h-6 text-yellow-500 ml-2 animate-spin" style={{ animationDuration: '0.5s' }} />
              </h3>

              {/* Organization */}
              <p className="text-xl text-gray-600 mb-2">awarded by</p>
              <p className="text-2xl font-semibold text-gray-800 mb-8">{certificateData.organization}</p>
            </div>

            
          </div>

          {/* Decorative Border */}
          <div className="absolute inset-0 rounded-3xl border-4 border-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20"></div>
        </div>
      </div>

     

      
    </div>
  );
}