import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageSquare, Send, Zap } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-12 px-4 bg-tele2-black relative overflow-hidden">
      {/* Background lightning effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-[10%] left-[20%] w-[2px] h-[30%] bg-tele2-lightpurple animate-pulse"></div>
        <div className="absolute top-[5%] right-[30%] w-[2px] h-[20%] bg-tele2-lightpurple animate-pulse"></div>
        <div className="absolute bottom-[15%] left-[40%] w-[2px] h-[25%] bg-tele2-lightpurple animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[25%] w-[2px] h-[35%] bg-tele2-lightpurple animate-pulse"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-10">
          <Zap className="h-12 w-12 text-tele2-lightpurple mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">Контакты</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Свяжитесь с нами любым удобным способом для консультации или вызова электрика на дом в Колпино
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-tele2-lightpurple/20 hover:border-tele2-lightpurple/40 transition-all duration-300 text-center">
            <div className="p-3 rounded-full bg-tele2-darkpurple/50 backdrop-blur-sm inline-flex items-center justify-center mb-4">
              <Phone className="h-6 w-6 text-tele2-lightpurple" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">WhatsApp</h3>
            <p className="text-gray-300 mb-4">+7 950 030 88 30</p>
            <Button 
              className="w-full bg-green-600 hover:bg-green-700"
              onClick={() => window.open('https://wa.me/79500308830', '_blank')}
            >
              Написать
            </Button>
          </div>
          
          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-tele2-lightpurple/20 hover:border-tele2-lightpurple/40 transition-all duration-300 text-center">
            <div className="p-3 rounded-full bg-tele2-darkpurple/50 backdrop-blur-sm inline-flex items-center justify-center mb-4">
              <Send className="h-6 w-6 text-tele2-lightpurple" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Telegram</h3>
            <p className="text-gray-300 mb-4">@elektrikkolpino</p>
            <Button 
              className="w-full bg-blue-500 hover:bg-blue-600"
              onClick={() => window.open('https://t.me/elektrikkolpino', '_blank')}
            >
              Написать
            </Button>
          </div>
          
          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-tele2-lightpurple/20 hover:border-tele2-lightpurple/40 transition-all duration-300 text-center">
            <div className="p-3 rounded-full bg-tele2-darkpurple/50 backdrop-blur-sm inline-flex items-center justify-center mb-4">
              <MessageSquare className="h-6 w-6 text-tele2-lightpurple" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Telegram канал</h3>
            <p className="text-gray-300 mb-4">@elektrikvkolpino</p>
            <Button 
              className="w-full bg-blue-500 hover:bg-blue-600"
              onClick={() => window.open('https://t.me/elektrikvkolpino', '_blank')}
            >
              Подписаться
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
