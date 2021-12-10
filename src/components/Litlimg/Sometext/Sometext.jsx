import React from 'react';
import s from './Sometext.module.css';

const Sometext = () => {
    return (
        <div className={s.sometext}>
            <div>
                <h4>What is an AICasso Communal Fund?</h4>
                <p className={s.item}>50% of all proceeds from sale of NFTs and 50% of 
                    all royalties will be allocated to an AiCasso 
                    Communal Fund - this funds will be staked/farmed
                     to produce contanst cash flow income from which 
                     50% will be added back to AiCasso Communal Fund 
                     and 50% will be distributed to holders
                </p>
                <h4>What is a AiCasso Development Fund?</h4>
                <p>We want to pursue our goal of improving AiCasso 
                    and his works but it requires a lot of man 
                    hours to do so and a constant effort - to 
                    make sure this work goes on we want to 
                    create a fund that will be stacked/farmed 
                    and will provide a steady income to finance 
                    the development of AICasso. 25% of all sale 
                    proceeds and 25% of all royalties will be 
                    allocated to this fund.
                </p>
            </div>
            <div className={s.someimg}>
                <img src="/img/21.png"/>
                <div>
                    <h4>What are your plans for AiCasso?</h4>
                    <p className={s.item}>We have big plans for this project and 
                        there are multiple things we are 
                        considering teaching AiCasso - one 
                        of the ideas is to help him improve 
                        his fields of knowledge so he can create 
                        truly unique styled ART - we are also 
                        looking into moving towrds realism from 
                        abstractionism which is an extremly hard 
                        task with an Ai but its something we 
                        wish to tackle - we are also looking 
                        into teaching AiCasso of doing animations 
                        and short videos.
                    </p>
                    <h4>Will there AiCasso publish more of its work?</h4>
                    <p>Absolutly as we plan to develop and improve 
                        AiCasso we want to showcase his work to 
                        public - 10% of all new work will be 
                        airdropped to current holders as lottery
                    </p>
                </div>
                
            </div>
            <div>
                    <h4>Why create our own tokens?</h4>
                    <p className={s.item}>
                    Creation of deflationary tokens that will
                     be airdropped to original minters and 
                     holders at the moment of token creation 
                     will allow us to much easier reward as 
                     well as distribute yield gains from 
                     AiCasso Communal Funds

                    </p>
                    <h4>What are the guarantees that you will not rug us? </h4>
                    <p>
                    As we want to remain Anon for this project 
                    to keep striving we can not offer conventional 
                    guarantess but we swer on our honour of 
                    Anon that   we will maintin this project 
                    in good faith and if unforseen events 
                    will force us to disperse both Communal 
                    and Development funds will be fully 
                    airdropped to holders.
                    </p>
            </div>

        </div>
    )
}

export default Sometext;