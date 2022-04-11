import React from "react";
import {BsLinkedin, BsGithub, BsDribbble} from "react-icons/bs";

function HeaderSocials(props) {
    return (
        <div className="header__socials">
            <a href="www.linkedin.com/in/maksym-medvediev-93b208132" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com" target="_blank"><BsGithub/></a>
            <a href="https://dribble.com" target="_blank"><BsDribbble/></a>
        </div>
    );
}

export default HeaderSocials;