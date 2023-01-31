import React from 'react'
import { srcImages } from './Images'

export default function Footer() {
    return (
        <>

            <div className="bottomNav">
                <div className="content">

                    <div className="div">
                        <img src={srcImages[9]} alt="" />
                    </div>
                    <div className="div">
                        <img src={srcImages[10]} alt="" />
                    </div>
                    <div className="div">
                        <img src={srcImages[11]} alt="" />
                    </div>
                    <div className="div">
                        <img src={srcImages[7]} alt="" />
                    </div>
                    <div className="div">
                        <img src={srcImages[8]} alt="" />
                    </div>
                </div>
            </div>

            <div className="footer" style={{ display: 'block' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <p> <i className="fa-solid fa-globe" /> English (US)</p>
                            <p>$ USD</p>
                            <p>Support & Resources <i class="fa-solid fa-chevron-up" /></p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
