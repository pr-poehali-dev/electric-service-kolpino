import React from 'react';
import { Bulb, Smartphone, Zap, Cpu, Cable, PlugZap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const services = [
  {
    icon: <Zap className="h-8 w-8 text-tele2-lightpurple" />,
    title: 'Монтаж проводки',
    description: 'Профессиональная прокладка электропроводки в квартирах, домах и коммерческих помещениях в Колпино.'
  },
  {
    icon: <Smartphone className="h-8 w-8 text-tele2-lightpurple" />,
    title: 'Сенсорные выключатели',
    description: 'Установка современных сенсорных выключателей с различными функциями и возможностями.'
  },
  {
    icon: <Cpu className="h-8 w-8 text-tele2-lightpurple" />,
    title: 'Умный дом под ключ',
    description: 'Полное оснащение вашего дома системой "Умный дом" для максимального комфорта и безопасности.'
  },
  {
    icon: <PlugZap className="h-8 w-8 text-tele2-lightpurple" />,
    title: 'Дистанционные розетки',
    description: 'Монтаж и настройка дистанционно управляемых розеток и электрических устройств.'
  },
  {
    icon: <Bulb className="h-8 w-8 text-tele2-lightpurple" />,
    title: 'Установка светильников',
    description: 'Монтаж люстр, точечных светильников, настенных бра и других осветительных приборов.'
  },
  {
    icon: <Cable className="h-8 w-8 text-tele2-lightpurple" />,
    title: 'Электромонтажные работы',
    description: 'Полный спектр электромонтажных работ любой сложности в Колпинском районе Санкт-Петербурга.'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-b from-tele2-black/90 to-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          Наши услуги
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="p-6 bg-black/20 backdrop-blur-sm border border-tele2-lightpurple/20 hover:border-tele2-lightpurple/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-tele2-darkpurple/50 backdrop-blur-sm">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
