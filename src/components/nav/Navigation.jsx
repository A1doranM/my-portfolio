import React, {useState} from "react";
import "./navigation.css";
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import {BiBook} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";
import {TiContacts} from "react-icons/ti";

function Navigation(props) {
    const [active, setActive] = useState("#");

    return (
        <nav>
            <a href="#"
               onClick={() => setActive("#")}
               className={active === "#" ? "active" : ""}
            >
                <AiOutlineHome/>
            </a>
            <a href="#about"
               onClick={() => setActive("#about")}
               className={active === "#about" ? "active" : ""}
            >
                <AiOutlineUser/>
            </a>
            <a href="#experience"
               onClick={() => setActive("#experience")}
               className={active === "#experience" ? "active" : ""}
            >
                <BiBook/>
            </a>
            <a href="#services"
               onClick={() => setActive("#services")}
               className={active === "#services" ? "active" : ""}
            >
                <RiServiceLine/>
            </a>
            <a href="#contacts"
               onClick={() => setActive("#contacts")}
               className={active === "#contacts" ? "active" : ""}
            >
                <TiContacts/>
            </a>
        </nav>
    );
}

export default Navigation;