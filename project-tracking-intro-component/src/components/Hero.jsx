import illustration from '../assets/img/illustration-devices.svg'
import style from './Hero.css'
export function Hero(){
    return (
        <div className='hero'>
            <div className="hero__content">
                <div className="hero__blob"></div>
                <img src={illustration} alt="" className='hero__illustration' width={500}/>    
            </div>
        </div>
    )
}