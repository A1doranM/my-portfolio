import React from "react";
import "./footer.css";
import {FiTwitter, FiFacebook, FiInstagram} from "react-icons/fi";

function Footer(props) {
    return (
        <footer>
            <a href="#" className="footer__logo">MEDMMAX</a>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contacts</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://facebook.com"><FiFacebook/></a>
                <a href="https://instagram.com"><FiInstagram/></a>
                <a href="https://linkedin.com"><FiTwitter/></a>
            </div>

            <div className="footer_copyright">
                <small>&copy; MEDMMAX. All rights reserved.</small>
            </div>
        </footer>
    );
}

export default Footer;