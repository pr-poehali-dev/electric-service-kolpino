import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const MapSection = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-b from-background to-tele2-black/80">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 neon-text">
          Вызов электрика в городе Колпино
        </h2>
        <div className="flex justify-center mb-6">
          <Button 
            className="bg-tele2-purple hover:bg-tele2-purple/90 font-bold text-xl px-6"
          >
            <Phone className="mr-2" />
            8 950 030 88 30
          </Button>
        </div>
        
        <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] mb-8 rounded-lg overflow-hidden shadow-xl">
          {/* Map background */}
          <div className="absolute inset-0 bg-tele2-darkpurple/30">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32133.330571681396!2d30.565980232543945!3d59.74058155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310e21649e73%3A0x784a330fc3644485!2z0JrQvtC70L_QuNC90L4sINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCz!5e0!3m2!1sru!2sru!4v1720122698996!5m2!1sru!2sru" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(0.5) contrast(1.1)' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта города Колпино"
              className="opacity-80"
            ></iframe>
          </div>
          
          {/* Lightning overlay */}
          <div className="absolute inset-0 pointer-events-none lightning-effect">
            <svg 
              viewBox="0 0 500 300" 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-full h-full"
            >
              <path 
                d="M250,50 L230,150 L270,150 L220,250" 
                stroke="#a889f5" 
                strokeWidth="6" 
                fill="none" 
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="drop-shadow(0 0 8px rgba(168,137,245,0.8))"
              />
              <path 
                d="M250,50 L230,150 L270,150 L220,250" 
                stroke="white" 
                strokeWidth="2" 
                fill="none" 
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-pulse"
              />
              
              {/* Additional lightning branches */}
              <path 
                d="M250,100 L270,120" 
                stroke="#a889f5" 
                strokeWidth="3" 
                fill="none" 
                strokeLinecap="round"
                filter="drop-shadow(0 0 5px rgba(168,137,245,0.6))"
              />
              <path 
                d="M230,150 L210,170" 
                stroke="#a889f5" 
                strokeWidth="3" 
                fill="none" 
                strokeLinecap="round"
                filter="drop-shadow(0 0 5px rgba(168,137,245,0.6))"
              />
            </svg>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-200 mb-6">
            Профессиональные электромонтажные работы в городе Колпино и Колпинском районе Санкт-Петербурга. 
            Выезд мастера в течение часа, гарантия на все виды работ.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
