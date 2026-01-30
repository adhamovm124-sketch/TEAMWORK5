import "./Section2.css"
import car1 from "../assets/m.png"
import dim from "../assets/dim.png"
import pilisos from "../assets/pilisos.png"
import gaz from "../assets/gaz.png"
import idish from "../assets/idish.png"

function Section2(){
    return(
        <section className="sec2">
            <h1>Ремонт любых побутовой техники INDESIT</h1>
            <div className="container">
                <div className="car">
                    <img src={car1} alt="" />
                    <h2>Ремонт стиральных <br /> машин</h2>
                </div>
                <div className="wr2">
                    <div className="dim">
                        <img src={dim} alt="" />
                        <h2>Вытяжки</h2>
                    </div>
                    <div className="dim ">
                        <img src={pilisos} alt="" />
                        <h2>Пылесосы</h2>
                    </div>
                </div>
                <div className="wr2">
                    <div className="dim">
                        <img src={idish} alt="" />
                        <h2>Посудомойки</h2>
                    </div>
                    <div className="pilisos">
                        <img src={gaz} alt="" />
                        <h2>Варочные панели</h2>
                    </div>
                </div>
            </div>

            <div className="sec2textwr">
                <div className="sec2text">
                    <h2>Не нашли свой продукт в списке, или остались вопросы?</h2>
                    <h3>Свяжитесь с менеджером по телефону +7 (778) 065-12-46 или</h3>
                </div>
                <button className="btn1">Заказать звонок</button>
            </div>
        </section>
    )
}
export default Section2