import React from 'react';
import { PhoneCall, MessageCircle, Send } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full">
      {/* Banner with lightning */}
      <div className="lightning-banner bg-tele2-black h-[300px] relative overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgc3Ryb2tlPSIjYTg4OWY1IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTE2IDNMMTAgMjBIMjJMMTYgMjkiLz48L3N2Zz4=')] bg-repeat-space" />
        
        <div className="lightning-effect absolute inset-0 flex justify-center items-center z-10">
          <svg className="w-1/2 h-full max-h-[150px]" viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M50,0 L35,80 L60,80 L40,200" 
              stroke="#a889f5" 
              strokeWidth="3" 
              fill="none" 
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path 
              d="M50,0 L35,80 L60,80 L40,200" 
              stroke="white" 
              strokeWidth="1" 
              fill="none" 
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-pulse"
            />
          </svg>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold neon-text z-20 text-center mb-8">
          ЭЛЕКТРИК КОЛПИНО
        </h1>
        
        <div className="z-20 flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center text-white">
          <a href="https://wa.me/79500308830" className="flex items-center gap-2 contact-icon" target="_blank" rel="noreferrer">
            <div className="p-2 rounded-full bg-green-600">
              <PhoneCall size={18} />
            </div>
            <span>WhatsApp +7 950 030 88 30</span>
          </a>
          
          <a href="https://t.me/elektrikkolpino" className="flex items-center gap-2 contact-icon" target="_blank" rel="noreferrer">
            <div className="p-2 rounded-full bg-blue-500">
              <Send size={18} />
            </div>
            <span>Telegram: @elektrikkolpino</span>
          </a>
          
          <a href="https://t.me/elektrikvkolpino" className="flex items-center gap-2 contact-icon" target="_blank" rel="noreferrer">
            <div className="p-2 rounded-full bg-blue-500">
              <MessageCircle size={18} />
            </div>
            <span>Канал: @elektrikvkolpino</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
