import React from 'react';
import './header.scss';
import { FaRocketchat } from 'react-icons/fa';

const Header = () => {
    return (
        <div className="header">
           <FaRocketchat color="white"/>
           <span> ChitChat</span>
           <p>Spread nonsense and never get banned ...</p>
        </div>
    )
};

export default Header;