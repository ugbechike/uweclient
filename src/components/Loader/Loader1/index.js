import React from 'react';
import './loader.css';
import logo from '../../assets/logo_mark.png'

export default function Loader() {
    return (
        <div className='loaderWrap'>
            <div className='loader-container'>
                <img src={logo} alt='' style={{ margin: 'auto' }} /> <br />
                <div style={{ display: 'inline-flex' }}>
                    <div className="dash uno"></div>
                    <div className="dash dos"></div>
                    <div className="dash tres"></div>
                    <div className="dash cuatro"></div>
                </div>
            </div>
        </div>
    )
}
