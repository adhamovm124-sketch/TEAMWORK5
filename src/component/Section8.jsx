import './Section8.css'
import { FaAngleDown } from "react-icons/fa";


export const Section8 = () => {
  return (
    <section className='section8'>
        <h1>Ответы и вопросы</h1>
        <div className='answers'>
            <div className="answers1">
                 <div className="answer1">
                    <p> Как узнать стоимость ремонта?</p>
                    <FaAngleDown />
                </div>
                <div className="answer1">
                    <p>Сколько будет длиться диагностика?</p>
                    <FaAngleDown />
                </div>
                <div className="answer1">
                    <p>Даете ли вы гарантию на ремонт?</p>
                    <FaAngleDown />
                </div>
            </div>
            <div className="answers2">
                <div className="answer1">
                    <p>Можно ли вызвать мастера на дом или в офис?</p>
                    <FaAngleDown />
                </div>
                <div className="answer2">
                   <div>
                     <p>Не появятся ли новые проблемы после ремонта?</p>
                    <small>После ремонта устройства проходят контроль качества выполненной работы по <br />47 пунктам. Это означает, что после ремонта вы получите устройство с </small>
                   </div>
                    <FaAngleDown />
                </div>

            </div>
               
        </div>
    </section>
  )
}
