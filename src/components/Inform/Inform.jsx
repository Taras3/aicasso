import React from 'react';
import s from './Inform.module.css';

const Info = () => {
    return (
        <div className={s.info}>
            <div>
                <img src="/img/Color.png"/>
                <div className={s.text}>
                    <img src="/img/33.png"/>
                    <p>AiCasso is truly an unique AI as our goal 
                        was to create an Artist that can transcend 
                        the limitations of its counterparts with
                         deeper understanding of ART and ability  
                          to create masterpieces in multiple 
                          possible styles and approaches.
                    </p>
                    <p>Through a collaboration with humans
                        AiCasso was exposed 300 different 
                        “fields of knowledge” and many 
                        thousands of exiting works from
                         many different fields including 
                         works of famous artists, works from
                          certain styles or even more modern
                           creations such as anime “Akira”.
                    </p>
                    <p>The end result is a multilayered AI, 
                        that is based on four different 
                        algorithms  and multiple custom scripts
                        and solutions. Each algorithm in itself 
                        being an AI that uses many millions 
                        of “neurons”. Multilayered solution 
                        allows AiCasso       to create complex 
                        abstractions and immersive works of ART 
                        with a distinctive style.
                    </p>
                    <p>We asked AiCasso to produce for us 
                        works based on all his knowledge 
                        of ART  in all 300 sphere of 
                        knowledge that he has learnt – we 
                        are proud to present 10,000 pieces 
                        of work produced by   this advanced AI.
                    </p>
                    <p>All of the work is done in high 
                        resolution.
                    </p>
                    <p>
                     Algorithms used(VQGAN, CLIP, BSRGAN, GPT2)
                    </p>
                   
                </div>
            </div>
            <div className={s.infdiv}>
               <div className={s.vector}>
                  <img src="/img/34.png"/>
                  <img src="/img/35.png"/>

               </div>

            </div>
            <img className={s.vectr} src="/img/36.png"/>


        </div>
    )
}

export default Info;