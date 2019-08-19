import React from 'react';
import './footer.scss';
import { FaComments, FaBookReader, FaBrain } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer">
            <div className="item">
                <FaBrain />
                Practice
            </div>
            <div className="item">
                <FaBookReader />
                Improve
            </div>
            <div className="item">
                <FaComments/>
                Succeed
            </div>
        </div>
    )
};

export default Footer;