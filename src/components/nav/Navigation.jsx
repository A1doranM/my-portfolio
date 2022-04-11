import React from "react";
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import {BiBook} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";
import {TiContacts} from "react-icons/ti";

function Navigation(props) {
    return (
        <nav>
            <a href="#"><AiOutlineHome/></a>
            <a href="#about"><AiOutlineUser/></a>
            <a href="#experience"><BiBook/></a>
            <a href="#services"><RiServiceLine/></a>
            <a href="#contacts"><TiContacts/></a>
        </nav>
    );
}

export default Navigation;