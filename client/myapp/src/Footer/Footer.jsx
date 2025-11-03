import React from 'react';
import footerstyles from './Footer.module.css';
const Footer = () => {
    return (
        <footer className={footerstyles.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">2025 Sigma infotec</div>
                    <div className="col-md-6 ms-auto text-end">
                        &reg; All Rights Reserved by Ash
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
