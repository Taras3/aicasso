import React from 'react';
import s from './Banner.module.css';
import logo from '../../../public/img/logo.png'

const Text = () => {
    return (
        <div className={s.text}>
            <h1>An AI learning to be an Artist</h1>
            <h2>Join the Family and help Ai 
                Casso become <br/> a world renown Artist
            </h2>
            <h3>75% of proceeds from sales and royalties <br/>
                will go to creating Communal and <br/> Development Fund
            </h3>
            <button>Mint</button>
            <img src={logo}/>

        </div>
    )
}

export default Text;
