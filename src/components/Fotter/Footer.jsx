import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <div className={s.container}>
               <div className={s.leftcont}>
                   <img src='/img/logo.png' alt="logo"/>
                   <p>Leading the way in exploring Ai ART
                   </p>
                </div>
                <div className={s.nav}>
                   <img src="/img/Twit.png" alt="Twit"/>
                   <img src="/img/Disc.png" alt="Disc"/>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer;