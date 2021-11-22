import React from 'react';
import './Section.css'

const Section = ({getIndex}) => {

    return (
        <div className ='contant' >
            <h1>Объеектно-ориентиированное программиирование </h1>
            
            <p onClick={()=>getIndex()} >{getIndex()}</p>
        </div>
    );
};

export default Section;