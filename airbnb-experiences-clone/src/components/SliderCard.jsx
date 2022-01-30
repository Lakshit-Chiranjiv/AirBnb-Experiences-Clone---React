import React from 'react';

const SliderCard = (props) => {
    const cardTagValue = (props.openSpots==0)?"SOLD OUT":"ONLINE";
    return (
        <div className='card'>
            {cardTagValue && <div className="tag">{cardTagValue}</div>}
            <img src={`./../assets/${props.coverImg}`} alt="card image" className='cardcover'/>
            <div className="card-info">
                <img src="./../assets/star.png" alt="star image" />
                <p>{props.stats.rating} ({props.stats.reviewCount}) . {props.location}</p>
            </div>
            <p>{props.title}</p>
            <p> <span className='bold'>From ${props.price}</span> / person</p>
        </div>
    );
};

export default SliderCard;
