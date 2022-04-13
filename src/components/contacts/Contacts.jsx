import React from "react";
import "./contacts.css";
import {MdOutlineEmail} from "react-icons/md";
import {RiMessengerLine} from "react-icons/ri";
import {RiTelegramLine} from "react-icons/ri";

function Contacts(props) {
    return (
        <section id="contacts">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>medmmax@gmail.com</h5>
                        <a href="mailto:medmmax@gmail.com" target="_blank">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <RiTelegramLine className="contact__option-icon"/>
                        <h4>Telegram</h4>
                        <h5>@Medevac137</h5>
                        <a href="" target="_blank">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon"/>
                        <h4>Messanger</h4>
                        <h5>medmmax</h5>
                        <a href="" target="_blank">Send a message</a>
                    </article>
                </div>
                <form action="">
                    <input type="text" name="name" placeholder="Your Full Name" required/>
                    <input type="email" name="email" placeholder="Your email" required/>
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contacts;