import React from "react";
import star from '../assets/star.png'
import popeye from '../assets/popeye.jpeg'
import '../css/CardPeople.css'

function CardPeople(props) {
    return (
        <div className='card-people'>
            <img src={popeye} alt={props.title} className='img-celebritie' />
            <h2 className="name-celebritie">{props.nameCelebritie}</h2>
        </div>
    );
}

export default CardPeople;