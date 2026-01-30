import React from 'react';
import './Header.css';
import { Settings, MapPin, Clock, Phone } from 'lucide-react'
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        
        {/* Logo qismi */}
        <div className="logo-section">
          <div className="logo-icon-wrapper">
            <img src={logo} alt="" />
          </div>
        </div>

        {/* Shahar tanlash */}
        <div className="info-block">
          <MapPin className="icon blue-text" size={18} />
          <div className="info-text">
            <span>Ваш город: </span>
            <span className="city-select">Алматы</span>
          </div>
        </div>

        {/* Ish vaqti */}
        <div className="info-block">
          <Clock className="icon blue-text" size={18} />
          <div className="info-text">
            <div className="label">Время работы:</div> <br />
            <div className="time">с 9:30 до 18:00 Пн-Пт</div>
          </div>
        </div>

        {/* Telefon raqamlar */}
        <div className="info-block">
          <Phone className="icon blue-text" size={18} />
          <div className="info-text">
            <div className="phone-number">+7(863) 203 60 48</div> <br />
            <div className="phone-number">+7(863) 203 70 33</div>
          </div>
        </div>

        {/* Tugma */}
        <button className="callback-btn">
          Заказать звонок
        </button>

      </div>
    </header>
  );
};

export default Header;