"use client";

import React, { useState } from 'react';

interface Service {
  id: number;
  icon: string;
  title: string;
  modalTitle: string;
  description: string;
  features: string[];
}

const Services: React.FC = () => {
  const [activeModal, setActiveModal] = useState<number>(0);

  const services: Service[] = [
    {
      id: 1,
      icon: 'uil uil-web-grid',
      title: 'Product\nDesigner',
      modalTitle: 'Product Designer',
      description: 'Service with more than 3 years of experience. Providing quality work to client and companies.',
      features: [
        'I develop the user interface.',
        'Web page development.',
        'Position your company brand.',
        'I create UX element interface',
        'Design and mockups of products for companies.'
      ]
    },
    {
      id: 2,
      icon: 'uil uil-arrow',
      title: 'Ui/Ux\nDesigner',
      modalTitle: 'Ui/Ux Designer',
      description: 'Service with more than 3 years of experience. Providing quality work to client and companies.',
      features: [
        'I develop the user interface.',
        'Web page development.',
        'Position your company brand.',
        'I create UX element interface',
        'Design and mockups of products for companies.'
      ]
    },
    {
      id: 3,
      icon: 'uil uil-arrow',
      title: 'Visual\nDesigner',
      modalTitle: 'Visual Designer',
      description: 'Service with more than 3 years of experience. Providing quality work to client and companies.',
      features: [
        'I develop the user interface.',
        'Web page development.',
        'Position your company brand.',
        'I create UX element interface',
        'Design and mockups of products for companies.'
      ]
    }
  ];

  const toggleModal = (index: number): void => {
    setActiveModal(index === activeModal ? 0 : index);
  };

  return (
    <section className="Services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="container grid grid-cols-3 gap-7 md:grid-cols-2 sm:grid-cols-1">
        {services.map((service) => (
          <div key={service.id} className="services__content relative bg-white border border-solid border-black/10 p-24 pr-10 pb-8">
            <div>
              <i className={`${service.icon} services__icon block text-3xl text-title-color mb-4`}></i>
              <h3 className="services__title text-h3 font-medium mb-4 whitespace-pre-line">
                {service.title}
              </h3>
            </div>

            <span 
              className="services__button text-title-color text-small inline-flex items-center gap-1 cursor-pointer"
              onClick={() => toggleModal(service.id)}
            >
              View More
              <i className="uil uil-arrow-right service__button-icon text-base transition-transform duration-300 group-hover:translate-x-px"></i>
            </span>

            <div className={`service__modal fixed inset-0 bg-black/50 z-modal flex justify-center items-center p-4 transition-all duration-300 ${activeModal === service.id ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <div className="services__modal-content w-125 relative bg-container-color p-18 py-10 rounded-2xl">
                <i 
                  className="uil uil-times services__modal-close absolute top-6 right-6 text-2xl text-title-color cursor-pointer"
                  onClick={() => toggleModal(0)}
                ></i>
                <h3 className="Service__modal-title text-h3 font-medium text-center mb-4">
                  {service.modalTitle}
                </h3>
                <p className="service__modal-description text-small text-center px-14 mb-8">
                  {service.description}
                </p>

                <ul className="services__modal-services grid gap-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="services__modal-service flex items-center gap-2">
                      <i className="uil uil-check-circle service__modal-icon text-title-color text-lg"></i>
                      <p className="services__modal-info text-small">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;