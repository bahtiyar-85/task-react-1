import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = ({array, getIndex}) => {
    const style={
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center'
    }
    return (
      
        <div style={style}>
            <h2 style={{fontSize:'50px', opacity:'.5',fontWeight:'700'}}>OOP</h2>
           <Navbar array ={array} getIndex={getIndex}/>
           
            {/* <ul>
                <li>Полиморфизм</li>
                <li>Инкапсуляция</li>
                <li>Наследование</li>
            </ul> */}
        </div>
    );
};

export default Header;