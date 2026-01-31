import './Section6.css'
import mach1 from '../assets/mach1.png'
import mach2 from '../assets/mach2.png'
import mach3 from '../assets/mach3.png'


export const Section6 = () => {
  return (
    <section className='section6'>
        <div className="machinetext">
            <h2>Получите скидку 15% прямо <br /> сейчас!</h2>
            <p>Вы выбираете LG, а мы в знак благодарности дарим Вам <br /> скидку 15% на все виды ремонтных работ в нашем центре!</p>
            <button>Получить скидку 15%</button>
        </div>
        <div className='machineimg'>
            <img className='mach1' src={mach1} alt="" />
            <img className='mach2' src={mach2} alt="" />
            <img className='mach3' src={mach3} alt="" />
        </div>
    </section>
  )
}
