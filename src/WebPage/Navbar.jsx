import React from 'react'
import { srcImages } from './Images'

export default function Navbar() {
    return (
        <>
        <div className="topBar">
            <img src={srcImages[12]} alt="" />
        </div>
            <div className="Navbar">
                <div className="container">
                    <div className="box">
                        <img src={srcImages[0]} alt="" />

                        <div className="admin">
                            <p>+ Add Property</p>
                            <div className="dash">
                                <img src={srcImages[1]} alt="" />
                                <img src={srcImages[2]} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
