import React from "react";
import './Card.css';
import './Root.css';

function Card(props) {
    return (
        <div className="row">
            {!props.isReversed ? (
                <>
                    <div className="col-lg-6 col-md-6 col-sm-12 p-0">
                        <img src={props.src} className="img-fluid" alt="Card" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center px-5 py-lg-0 py-md-0 py-5">
                        <p>{props.description}</p>
                    </div>
                </>
            ) : (
                <>
                    <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center px-5 py-lg-0 py-md-0 py-5">
                        <p>{props.description}</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 p-0">
                        <img src={props.src} className="img-fluid" alt="Card" />
                    </div>
                </>
            )}
        </div>
    );
}

export default Card;
