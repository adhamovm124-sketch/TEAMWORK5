import "./Section3.css"
import usta from "../assets/usta.png"
import usta2 from "../assets/usta2.png"
import usta3 from "../assets/usta3.png"

function Section3(){
    return(
        <section className="sec3">
            <div className="usta">
                <div className="sec3text">
                    <h1>Заказать бесплатный выезд <br />мастера за 30 мин!</h1>
                    <p>Выезд мастера и диагностика бесплатно, при условии ремонта,  <br />Мы следим за качеством облуживания.К вам приедет мастер с опытом  <br />работы не менее пяти лет.У нас быстро, от 30 минут выезд мастера.</p>
                    <button className="btn3">Заказать звонок</button>
                </div>
                <img className="usta3" src={usta2} alt="" />
                <img className="aa" src={usta} alt="" />
                <img className="usta2" src={usta3} alt="" />
            </div>
        </section>
    )
}
export default Section3