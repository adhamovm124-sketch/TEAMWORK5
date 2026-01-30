import "./Section1.css"
import hero from "../assets/hero.png"

function Section1(){
    return(
        <section className="sec1">   
            <div className="sec1text">
                <h1>Сервисный центер  <br /> <span>INDESIT</span> в Алматы</h1>
                <h3>Обходитесь без лишних затрат</h3>
                <button className="btn2">Вызвать мастера</button>
                <p><span className="orange">*</span> Выезд и диагностика бесплатно <br /> при условии ремонта</p>
               <div className="wr1">
                <div className="zero">
                    <span>0</span>
                    <div>
                        <h2>₸</h2>
                        <h2>диагностика</h2>
                    </div>
                </div>
                <div className="zero">
                    <span>1</span>
                    <div>
                        <h2>день </h2>
                        <h2>ремонта</h2>
                    </div>
                </div>
                <div className="zero">
                    <span>3</span>
                    <div>
                        <h2>года</h2>
                        <h2>гарантии</h2>
                    </div>
                </div>
               </div>
            </div>
            <img className="hero" src={hero} alt="" />
        </section>
    )
}
export default Section1