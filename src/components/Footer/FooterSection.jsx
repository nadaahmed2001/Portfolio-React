import React from "react";
// import './Footer.css';

function Footer() {
    return (
        <footer className="footer" id="footer">
                <div className="footer-text" style={{textAlign: "center"}}>
                    <h5 >Made with 
                        <i style={{color: "red" }}
                        className="fas fa-heart"></i> by Nada Ahmed
                    </h5>
                </div>
        </footer>
    );
}

export default Footer;