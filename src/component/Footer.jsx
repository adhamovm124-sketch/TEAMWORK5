import './Footer.css'
import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import logo1 from "../assets/logo1.png"




export const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footerimg">
            <div className="footertext">
                <h1>Контакты</h1>
                <div className="text1">
                    <FaLocationDot />
                    <p>Ваш город: <span>Алматы</span></p>
                </div>
                <div className="text1">
                    <IoMdTime />
                    <div>
                    <p>Время работы:</p>
                    <p>с 9:30 до 18:00 Пн-Пт</p>
                    </div>
                    
                </div>
                <div className="text1">
                    <FaPhoneAlt />
                    <div>
                    <p>+7(863) 203 60 48</p>
                    <p>с+7(863) 203 70 33</p>
                    </div>
                </div>
                <button>Заказать звонок</button>
            </div>
        </div>
        <div className="downfoot">
            <div className="downfoot1">
                <img src={logo1} alt="" />
                <p>Ремонт бытовой техники в Алматы. <br /> Обслуживание по Европейским стандартам качества</p>
            </div>
            <div className="downfoot1">
                <p>Все права защищены,Алматы 2019</p>
            </div>
        </div>
    </footer>
  )
}
