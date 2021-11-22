import React from 'react';

const Navbar = ({array, getIndex}) => {
    return (
        <div>
            {array.map((item, index)=>(
                <strong onClick={()=>getIndex(index)} key={index} style={{margin: '10px', cursor:'pointer'}}>{item}</strong>
            ))}
        </div>
    );
};

export default Navbar;