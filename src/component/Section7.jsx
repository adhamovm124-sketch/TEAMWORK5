import './Section7.css'
import per1 from '../assets/per1.png'
import per2 from '../assets/per2.png'
import per3 from '../assets/per3.png'

export const Section7 = () => {
  return (
    <section className='Section7'>
        <h1>Отзывы</h1>
        <div className="namecon">
            <div className="person1">
                <img src={per1} alt="" />
                <h3>Константин </h3>
                <p>С сайтом и сервисом этой компании всё просто отлично! Качество товара соответствует заявленному. Буду и впреть пользоваться товарами с этого сайта, и смело могу рекомендовать его людям.</p>
            </div>
            <div className="person1">
                <img src={per2} alt="" />                
                <h3>Алина</h3>
                <p>Хочу выразить благодарность компании за качественно выполненную работу по ремонту стиральной машины! Все было качественно и оперативно: от принятия заявки диспетчером до работы мастера! </p>
            </div>
            <div className="person1">
                <img src={per3} alt="" />
                <h3>Дмитрий</h3>
                <p>Благодарны за качественное и профессиональное обслуживание, быстро откликнулись. Мастер Сергей приехал в назначенное время, сделал все хорошо</p>                
            </div>
        </div>
    </section>
  )
}
