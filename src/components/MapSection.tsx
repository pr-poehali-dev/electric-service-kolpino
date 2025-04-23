
import React from 'react';

const MapSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-tele2-black to-tele2-darkpurple">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 neon-text">
          Вызов электрика в городе Колпино 8 950 030 88 30
        </h2>
        
        <div className="relative rounded-lg overflow-hidden shadow-2xl border-2 border-tele2-lightpurple">
          {/* Lightning overlay on the map */}
          <div className="absolute inset-0 pointer-events-none z-10">
            <svg className="w-full h-full" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M500,50 L450,200 L550,220 L480,450" 
                stroke="#a889f5" 
                strokeWidth="4" 
                fill="none" 
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lightning-effect"
              />
              <path 
                d="M500,50 L450,200 L550,220 L480,450" 
                stroke="white" 
                strokeWidth="2" 
                fill="none" 
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-pulse"
              />
            </svg>
          </div>
          
          {/* Actual map iframe */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32050.80005588697!2d30.563860274280506!3d59.74402252257785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469636aeaaf9e507%3A0x5d5b59c2da2f9170!2z0JrQvtC70L_QuNC90L4sINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCz!5e0!3m2!1sru!2sru!4v1700996673688!5m2!1sru!2sru" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="filter contrast-[0.85] brightness-[0.85]"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
