import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";

function Header(props) {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I`m</h5>
                <h1>Maksym Medvediev</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA/>

                <div className="me">
                    <img src={ME} alt="Image of me."/>
                </div>

                <a href="#contacts" className="scroll_down">Scroll Down</a>
            </div>
        </header>
    );
}

export default Header;