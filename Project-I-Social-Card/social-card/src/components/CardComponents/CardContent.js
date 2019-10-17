import React from 'react';
import './Card.css';

function CardContent( {heading, text, source} ) {
    return(
        <div className="card-content">
            <h3>{heading}</h3>
            <p>{text}</p>
            <h4>{source}</h4>
        </div>
    );
}

export default CardContent;