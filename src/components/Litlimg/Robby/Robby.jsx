import React from 'react';
import s from './Robby.module.css';

const Robby = (props) => {

    let infLeft = props.imgDataLeft.map( obj => (<div>
                                                     <p>{obj.text}</p>
                                                     <img src={obj.img}/>

                                                 </div>) )

    let infRight = props.imgDataRight.map( obj => (<div>                                                     
                                                     <img src={obj.img}/>
                                                     <p>{obj.text}</p>

                                                 </div>) )
                                                 
    return (
        <div className={s.robby}>
            <div>
               {infLeft}
                
            </div>
            <div>
               {infRight}
            </div>

        </div>
    )
}

export default Robby;