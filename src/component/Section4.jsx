import React from 'react';
import './Section4.css'; // Fayl nomi aynan bir xil bo'lishi shart

const Section4 = () => {
  const services = [
    { id: 1, title: 'Ремонт микроволновки', desc: 'Замена слюды, магнетрона, восстановление кнопок и др', price: 'ОТ 2500 ₸.' },
    { id: 2, title: 'Ремонт пылесоса', desc: 'Замена или восстановление шланга, схемы управления, двигателя и пр.', price: 'ОТ 4000 ₸.' },
    { id: 3, title: 'Ремонт аудиотехники', desc: 'Колонки, домашние кинотеатры, музыкальные центры и др. виды.', price: 'ОТ 4500 ₸.' },
    { id: 4, title: 'Ремонт микроволновки', desc: 'Замена слюды, магнетрона, восстановление кнопок и др', price: 'ОТ 2500 ₸.' },
  ];

  return (
    <div className="blue-wrapper">
      <div className="container-s3">
        <h2 className="main-title">
          Сервис <span className="red-text">INDESIT</span> предлагает лучшие цены
        </h2>
        
        <div className="grid-s3">
          {/* Birinchi qator: Oq kartochkalar */}
          {services.map((s) => (
            <div key={s.id} className="white-card">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="price">{s.price}</span>
            </div>
          ))}

          {/* Ikkinchi qator: Pastki maxsus bloklar */}
          <div className="white-card">
            <h3>Ремонт микроволновки</h3>
            <p>Замена слюды, магнетрона, восстановление кнопок и др</p>
            <span className="price">ОТ 2500 ₸.</span>
          </div>

          <div className="promo-card master">
            <div className="promo-overlay">
              <h3>Выезд мастера</h3>
              <p>В удобное для Вас <br /> время. На дом или <br />   в офис!</p>
              <div className="free">БЕСПЛАТНО</div>
            </div>
          </div>

          <div className="promo-card diag">
            <div className="promo-overlay2">
              <h3>Диагностика</h3 >
              <p>С использованием <br /> современного <br /> оборудования</p>
              <div className="free">БЕСПЛАТНО</div>
            </div>
          </div>

          <div className="promo-card shield">
            <div className="promo-overlay3">
              <h3>Расширенная гарантия</h3>
              <p>На все запчасти и <br /> выполненные <br /> услуги</p>
              <div className="free">БЕСПЛАТНО</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;