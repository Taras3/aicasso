import React from 'react';
import s from './Nav.module.css';

const Menu = (props) => {
    let menu = props.list.map( list => ( <li><a href="#">{list}</a></li> ) )
    return (
        <div className={s.menu}>
            <ul>
                {menu}
              
            </ul>
            <div className={s.nav}>
                <img src="/img/Twit.png" alt="Twit"/>
                <img src="/img/Disc.png" alt="Disc"/>
            </div>
        </div>
    )
}

export default Menu;