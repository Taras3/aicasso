import React from 'react';
import s from './Litlimg.module.css';
import Robby from './Robby/Robby';
import Sometext from './Sometext/Sometext';

const Litlimg = (props) => {
    return (
        <div className={s.litlimg}>
            <img className={s.grad3} src="/img/37.png"/>
            <img className={s.grad4} src="/img/38.png"/>
            <img className={s.grad5} src="/img/38.png"/>
            <img className={s.grad6} src="/img/38.png"/>
            <h3>RoadMap</h3>
            <div>
                <span>Planned</span>
                <span>Progress</span>
                <span>Live</span>
            </div>
            <Robby imgDataLeft={props.imgDataLeft} imgDataRight={props.imgDataRight}/>
            <Sometext />

        </div>
    )
}

export default Litlimg;