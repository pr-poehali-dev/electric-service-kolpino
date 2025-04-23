import React from 'react';
import { Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tele2-black py-6 px-4 border-t border-tele2-lightpurple/20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-tele2-purple p-2 rounded-full mr-3">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-white font-bold">ЭЛЕКТРИК КОЛПИНО</span>
          </div>
          
          <div className="text-gray-400 text-sm">
            © {currentYear} Электромонтажные работы в Колпино. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
