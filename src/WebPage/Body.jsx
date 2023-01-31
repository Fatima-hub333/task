import React, { useState } from 'react'
import { srcImages } from './Images'

export default function Body() {

    let [activeCls, setActiveCls] = useState('bottomBox');

    let [bgActvL, setBgActveL] = useState('loc');
    let [bgActvP, setBgActveP] = useState('prope');

    const setCls1 = () => {
        activeCls === 'bottomBox' ? setActiveCls('bottomBox activeCls') : setActiveCls('bottomBox');
 }
        
        let items = document.querySelectorAll('#srchItems');
        items.forEach(item => {
            item.addEventListener('click', function () {
                items.forEach(elem => elem.classList.remove('bgActvCls'));
                this.classList.toggle('bgActvCls');
            });
        });
    

        let buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', function () {
                buttons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            })
        });


        return (
            <>
                <section className="body">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 content mx-auto">

                                <h1>Discover a <span>place</span> you'll love to live</h1>
                                <div className="btns">
                                    <button activeClassNamee='active'>Buy</button>
                                    <button activeClassNamee='active'>Rent</button>
                                </div>

                                <div className="searchBox">
                                    <input type="text" className='searchBar' />
                                    <div id='srchItems' className={bgActvL} onClick={setCls1}>
                                        <div>
                                            <h6>Location</h6>
                                            <p>Bahria Town, Islamabad</p>
                                        </div>
                                    </div>

                                    <div id='srchItems' className={bgActvP} onClick={setCls1}>
                                        <div>
                                            <h6>Property</h6>
                                            <p>Appartment</p>
                                        </div>
                                    </div>

                                    <div className="filter">
                                        <img src={srcImages[3]} alt="" />
                                    </div>

                                    <div className="search">
                                        <img src={srcImages[4]} alt="" />
                                    </div>
                                    <div className={activeCls} style={{ height: '300px' }} />
                                </div>


                                <div className="wanted">
                                    <p>Wanted</p>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam accusantium debitis doloribus.</p>
                                </div>
                                <div className="submitReq">
                                    <div className="imgBox">
                                        <img src={srcImages[5]} alt="" />
                                    </div>
                                    <div className="cont">
                                        <h6>Submit your requirements</h6>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam accusantium debitis doloribus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bottomImg">
                            <img src={srcImages[6]} alt="" />
                        </div>

                    </div>
                </section>
            </>
        )
    }
