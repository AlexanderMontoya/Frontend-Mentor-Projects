import iconClose from '../assets/img/icon-close.svg'
import iconHamburguer from '../assets/img/icon-hamburger.svg'
import logo from '../assets/img/logo.svg'
import './Header.css'

import { useState } from 'react'
export function Header(){
    const [isOpen, setIsOpen ]=useState(false);
    return (
        <header className='header'>
            <nav className='header__nav'>
                <a href="#" className='header__link--logo'>
                    <img src={logo} alt="Imagen" width={50} className='header__logo'/>
                </a>
                <div className="header__links">
                    <a href="#" className='header__link'>PRODUCT</a>
                    <a href="#" className='header__link'>FEATURES</a>
                    <a href="#" className='header__link'>PRICING</a>
                    <div className="header__space"></div>
                    <a href="#" className='header__link header__link--login'>LOGIN</a>
                </div>
                <button onClick={()=>{setIsOpen(!isOpen);}} className='btn'>
                    {!isOpen?<img src={iconHamburguer} alt="Imagen" width={40} className='btn__image'/>:<img src={iconClose} alt="Imagen" width={100} className='btn__image'/>}
                </button>
                <div className={!isOpen?'header__links--mobile':'header__links--mobile show'}>
                    <a href="#" className='header__link'>PRODUCT</a>
                    <a href="#" className='header__link'>FEATURES</a>
                    <a href="#" className='header__link'>PRICING</a>
                    <div className="header__space"></div>
                    <a href="#" className='header__link header__link--login'>LOGIN</a>
                </div>
            </nav>
        </header>
    )
}