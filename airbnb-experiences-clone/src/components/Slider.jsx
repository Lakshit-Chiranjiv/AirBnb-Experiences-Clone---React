import React from 'react';
import SliderCard from './SliderCard';
import data from './../data.js';

const Slider = () => {
    return (
        <div className='slider'>
            {data.map((dataItem)=>{
                return <SliderCard key={dataItem.id} {...dataItem}/>
            })}

        </div>
    );
};

export default Slider;
