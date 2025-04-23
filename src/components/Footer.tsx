
import React from 'react';
import { PhoneCall, MessageCircle, Send, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tele2-black border-t border-tele2-purple py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">ЭЛЕКТРИК КОЛПИНО</h2>
            <p className="text-gray-400">Профессиональные электромонтажные работы</p>
          </div>
          
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-tele2-lightpurple" />
              <span className="text-gray-300">Колпино, Санкт-Петербург</span>
            </div>
            <a href="tel:+79500308830" className="flex items-center gap-2 hover:text-tele2-lightpurple transition-colors text-gray-300">
              <PhoneCall size={18} className="text-tele2-lightpurple" />
              <span>+7 950 030 88 30</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Электрик Колпино. Все права защищены.
          </p>
          
          <div className="flex space-x-4">
            <a 
              href="https://wa.me/79500308830" 
              className="text-white hover:text-green-500 transition-colors"
              aria-label="WhatsApp"
              target="_blank" 
              rel="noreferrer"
            >
              <PhoneCall size={20} />
            </a>
            <a 
              href="https://t.me/elektrikkolpino" 
              className="text-white hover:text-blue-500 transition-colors"
              aria-label="Telegram"
              target="_blank" 
              rel="noreferrer"
            >
              <Send size={20} />
            </a>
            <a 
              href="https://t.me/elektrikvkolpino" 
              className="text-white hover:text-blue-500 transition-colors"
              aria-label="Telegram Channel"
              target="_blank" 
              rel="noreferrer"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
