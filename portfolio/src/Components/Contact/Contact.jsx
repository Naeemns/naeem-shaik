import React from "react";
import ReactGitHubCalendar from 'react-ts-github-calendar';
import "./Contact.css";
import { FaPhoneAlt } from 'react-icons/fa';
import { IoLocationSharp, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import { GrMail } from 'react-icons/gr';



export const Contact = () => {
    return (
        <div className="stats__contact">
            <div className="github" >
                <h1>GitHub Stats</h1>
                <div>
                    <ReactGitHubCalendar userName="Naeemns" responsive={true} />
                </div>
                <a className="library" target="_blank" href="https://www.npmjs.com/package/react-ts-github-calendar" rel="noreferrer">Sometimes, Streak & Contribution do not working well.</a>
            </div>
            <div className="contact__container">
                <h1>Get In Touch</h1>
                <div className="contact__container__details">
                    <div>
                        <FaPhoneAlt className="contact__container__details__icon" />
                        <span>+91 9542688163</span>
                    </div>
                    <div>
                        <IoLocationSharp className="contact__container__details__icon" />
                        <span>Vijayawada, Andhra Pradesh</span>
                    </div>
                    <div>
                        <GrMail className="contact__container__details__icon" />
                        <span>naeemshaik894@gmail.com</span>
                    </div>
                </div>
                <div className="contact__container__social">
                    <a target="_blank" rel="noreferrer" href="https://github.com/Naeemns"><IoLogoGithub /></a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/naeem-shaik/"><IoLogoLinkedin /></a>
                </div>
            </div>
        </div>
    )
}