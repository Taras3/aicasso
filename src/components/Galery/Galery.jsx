import React from 'react';
import s from './Galery.module.css';
import Img from './Img/Img';

const Galery = (props) => {
    let galInf = props.galeryInfo.map(obj => <Img title={obj.title} num={obj.num} 
                                                  bg={obj.bg} name={obj.name} artcle={obj.artcle}/> )
    return (
        <div className={s.galery}>
            <img className={s.grad} src="/img/31.png"/>
            <img className={s.grad2} src="/img/32.png"/>
            <div className={s.righcont}>
                <div></div>
                <div></div>
                <div>
                    <p>"I am always doing that which 
                        I cannot do, <br/> in order that I
                         may learn how to do it."
                    </p>
                    <span>Pablo Picasso</span>
                </div>
            </div>
            <div className={s.container}>
               {galInf}
            </div>            

        </div>
    )
}

export default Galery;
