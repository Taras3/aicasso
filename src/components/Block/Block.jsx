import React from 'react';
import s from './Block.module.css';

const Block = () => {
    return (
        <div className={s.block}>
            <h3>Choose to Mint Randomly or choose your Category</h3>
            <div>
                <div className={s.grup}>
                   <div>
                       <p>Randomly</p>
                       <span>100/10000</span>
                   </div>
                   <div>
                       <span>Categories</span>
                       <span>5/32</span>
                       <img src='/img/Arrow.png'/>
                   </div>
                </div>
                <div className={s.but}>
                    <button>Mint</button>
                    <button>Mint</button>
                </div>
                <img className={s.img} src="/img/gif.png"/>
            </div>
        </div>
    )
}

export default Block;