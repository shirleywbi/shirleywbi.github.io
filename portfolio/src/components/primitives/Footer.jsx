import React from 'react';
import "../../styles/Footer.css"

const Footer = () => {
    const getYear = () => {
        return new Date().getFullYear();
    }

    return <footer className="footer-area bg-black">
        <div className="container">
            <div className="footer-content d-flex align-items-center justify-content-between">
                <div className="copywrite-text">
                    Copyright &copy;2018-{getYear()} Shirley W Bi. All rights reserved. | Created with React and React Bootstrap
                </div>
            </div>
        </div>
    </footer>
}

export default Footer;