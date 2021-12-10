import React from 'react';
import s from './Img.module.css';

const Img = (props) => {
    return (
        <div className={s.img}>
            <img src={props.bg}/>
            
            <div>
                <div>
                    <span>{props.title}</span>
                    <p>{props.num}</p> 
                </div>
                <div>
                    <span>{props.name}</span>
                    <p>{props.artcle}</p>
                </div>
            </div>
        </div>
    )
}

export default Img;