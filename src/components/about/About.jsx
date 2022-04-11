import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg"
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";

function About(props) {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="Image about me"/>
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Experience</h5>
                            <small>3+ Years working</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon"/>
                            <h5>Current work place</h5>
                            <small>Exadel</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon"/>
                            <h5>Projects</h5>
                            <small>6+ Projects</small>
                        </article>
                    </div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam doloribus harum itaque iure
                        iusto maxime modi molestiae nam neque placeat ratione recusandae repellat, saepe sit, suscipit
                        tempora vitae voluptatibus!
                    </p>

                    <a href="#contact" className="btn btn-primary">Let`s Talk</a>
                </div>
            </div>


        </section>
    );
}

export default About;