
import React from 'react';
import { 
  Cable, Lightbulb, Home, Wifi, 
  ToggleLeft, Smartphone, BatteryCharging, Wrench 
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Cable className="w-10 h-10 text-tele2-lightpurple" />,
      title: "Монтаж проводки",
      description: "Качественный монтаж электропроводки в квартирах, домах и офисах с соблюдением всех правил безопасности."
    },
    {
      icon: <ToggleLeft className="w-10 h-10 text-tele2-lightpurple" />,
      title: "Сенсорные выключатели",
      description: "Установка современных сенсорных выключателей с возможностью дистанционного управления."
    },
    {
      icon: <Home className="w-10 h-10 text-tele2-lightpurple" />,
      title: "Умный дом под ключ",
      description: "Полное оснащение жилья системой умного дома, интеграция всех электрических устройств в единую сеть."
    },
    {
      icon: <Wifi className="w-10 h-10 text-tele2-lightpurple" />,
      title: "Дистанционные устройства",
      description: "Установка и настройка дистанционных розеток, выключателей и светильников с управлением через смартфон."
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-tele2-lightpurple" />,
      title: "Монтаж освещения",
      description: "Установка различных типов светильников, люстр, бра, точечного и декоративного освещения."
    },
    {
      icon: <Smartphone className="w-10 h-10 text-tele2-lightpurple" />,
      title: "Системы безопасности",
      description: "Монтаж электрических систем безопасности, датчиков движения и умных камер."
    },
    {
      icon: <BatteryCharging className="w-10 h-10 text-tele2-lightpurple" />,
      title: "Устранение неполадок",
      description: "Диагностика и устранение неисправностей электросети любой сложности."
    },
    {
      icon: <Wrench className="w-10 h-10 text-tele2-lightpurple" />,
      title: "Замена электрощитов",
      description: "Модернизация, ремонт и полная замена электрощитов в соответствии с современными требованиями."
    }
  ];

  return (
    <section className="py-16 bg-tele2-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
          Услуги электрика в Колпино
        </h2>
        
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          Частный мастер по электромонтажным работам в городе Колпино Колпинского района Санкт-Петербурга. 
          Выполняю все виды электротехнических работ с гарантией качества.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-tele2-darkpurple to-tele2-black border border-tele2-purple rounded-lg p-6 hover:shadow-lg hover:shadow-tele2-lightpurple/20 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 transform hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
