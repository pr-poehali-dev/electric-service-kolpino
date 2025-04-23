
import React from 'react';
import { Button } from '@/components/ui/button';
import { PhoneCall, Send, MessageCircle, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-tele2-darkpurple to-tele2-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 neon-text">
          Контакты
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="bg-gradient-to-br from-tele2-black to-tele2-darkpurple p-8 rounded-lg border border-tele2-purple shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-white">Свяжитесь со мной</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-tele2-purple text-white">
                  <PhoneCall size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Телефон</h4>
                  <a href="tel:+79500308830" className="text-gray-300 hover:text-tele2-lightpurple transition-colors">
                    +7 950 030 88 30
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-tele2-purple text-white">
                  <Send size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Telegram</h4>
                  <a href="https://t.me/elektrikkolpino" className="text-gray-300 hover:text-tele2-lightpurple transition-colors" target="_blank" rel="noreferrer">
                    @elektrikkolpino
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-tele2-purple text-white">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Telegram канал</h4>
                  <a href="https://t.me/elektrikvkolpino" className="text-gray-300 hover:text-tele2-lightpurple transition-colors" target="_blank" rel="noreferrer">
                    @elektrikvkolpino
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Working Hours */}
          <div className="bg-gradient-to-br from-tele2-black to-tele2-darkpurple p-8 rounded-lg border border-tele2-purple shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-white">Режим работы</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-tele2-purple text-white">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Время работы</h4>
                  <p className="text-gray-300">Ежедневно с 8:00 до 22:00</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-tele2-purple text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Обратная связь</h4>
                  <p className="text-gray-300">Оперативный ответ в течение 1 часа</p>
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  className="w-full py-6 bg-tele2-purple hover:bg-tele2-lightpurple text-white font-bold text-lg" 
                  onClick={() => window.location.href = 'https://wa.me/79500308830'}
                >
                  <PhoneCall className="mr-2" size={20} />
                  Вызвать электрика сейчас
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
