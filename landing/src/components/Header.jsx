import React from 'react';
import './Header.css';
import './Root.css';
import backgroundImage from './images/soccer pics/abigail-keenan-8-s5QuUBtyM-unsplash.jpg';

function Header() {
    return (
        <>
            <header style={{ background: `url(${backgroundImage}) bottom/cover no-repeat`, backgroundAttachment: 'fixed' }}>
                <div className="container">
                    <div className="row">
                        <h1><i>TifoXR</i><sup>&trade;</sup></h1>
                        <p>Your fandom, immersed.<br />Club revenue, digitized.</p>
                        <a href="#card">
                            <span>Explore</span>
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
