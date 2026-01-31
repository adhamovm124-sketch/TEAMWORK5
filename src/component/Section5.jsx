    import './Section5.css'
    import shag1 from '../assets/shag1.png'
    import shag2 from '../assets/shag2.png'
    import shag3 from '../assets/shag3.png'
    import shag4 from '../assets/shag4.png'
    import shag5 from '../assets/shag5.png'
    import shag6 from '../assets/shag6.png'

    export const Section5 = () => {
    return (
        <section className='section5'>
            <h1>Схема работы</h1>
            <div className="info1">
                <div className='scheme'>
                <div className="shags">
                    <h2>1 ШАГ</h2>
                </div>
                <div className='advices'>
                <img src={shag1} alt="" />
                <div>
                    <h3>Консультация</h3>
                    <p>Персональный менеджер <br /> ответит на все ваши вопросы и <br /> будет держать вас в курсе всех <br /> этапов работ</p>
                </div>
                </div>
            </div>
            <div className='scheme'>
                <div className="shags">
                    <h2>2 ШАГ</h2>
                </div>
                <div className='advices'>
                <img src={shag2} alt="" />
                <div>
                    <h3>Доставка</h3>
                    <p>Курьер приедет в течении 1 часа <br /> или мы можем принять <br /> устройство в сервисе</p>
                </div>
                </div>
            </div>
            <div className='scheme'>
                <div className="shags">
                    <h2>3 ШАГ</h2>
                </div>
                <div className='advices'>
                <img src={shag3} alt="" />
                <div>
                    <h3>Диагностика</h3>
                    <p>Осуществим диагностику за счет <br /> компании, даже если вы <br /> откажетесь от ремонтае</p>
                </div>
                </div>
            </div>
            </div>
            <div className="info1">
                        <div className='scheme'>
                <div className="shags">
                    <h2>4 ШАГ</h2>
                </div>
                <div className='advices'>
                <img src={shag4} alt="" />
                <div>
                    <h3>Согласование</h3>
                    <p>Персональный менеджер <br /> согласует с вами сроки и <br /> стоимость ремонта</p>
                </div>
                </div>
            </div>
                    <div className='scheme'>
                <div className="shags">
                    <h2>5 ШАГ</h2>
                </div>
                <div className='advices'>
                <img src={shag5} alt="" />
                <div>
                    <h3>Выдача</h3>
                    <p>Бесплатно доставим устройство <br /> к вам домой или вы можете <br /> забрать его сами</p>
                </div>
                </div>
            </div>
                    <div className='scheme'>
                <div className="shags">
                    <h2>6 ШАГ</h2>
                </div>
                <div className='advices'>
                <img src={shag6} alt="" />
                <div>
                    <h3>Диагностика</h3>
                    <p>Осуществим диагностику за счет <br /> компании, даже если вы <br /> откажетесь от ремонтае</p>
                </div>
                </div>
            </div>

            </div>
        </section>
    )
    }
