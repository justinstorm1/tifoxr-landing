import React from "react";
import './Header.css';
import './Root.css';

function Header() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <h1><i>TifoXR</i><sup>&trade;</sup></h1>
                        <p>Your fandom, immersed.<br />Club revenue, digitized.</p>
                        <a href="#">
                            <span>Explore</span>
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;