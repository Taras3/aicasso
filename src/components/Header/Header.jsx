import React from 'react';
import s from './Header.module.css';
import Menu from './Nav/Menu';
import logo from '../../img/013.png'




const Header = (props) => {

    return (
        <header>
            <div className={s.container}>
               <div className={s.leftcont}>
                   <img src={logo} alt="logo"/>
                   <p>Leading the way in exploring Ai ART
                   </p>
                </div>
                <Menu list={props.list} />
                
            </div>
            
        </header>
    )
}

export default Header;
