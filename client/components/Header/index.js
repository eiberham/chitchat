import React from 'react';
import './header.scss';
import { FaCommentDots } from 'react-icons/fa';

const Header = () => {
    return (
        <div className="header">
           <FaCommentDots color="white"/>
           <span> ChitChat</span>
           <p>Connect with people from all over the globe ...</p>
        </div>
    )
};

export default Header;