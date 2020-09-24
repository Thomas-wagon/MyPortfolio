import React from "react"
import "./contact.scss"
import { Icon } from '@iconify/react';
import linkedinRect from '@iconify/icons-brandico/linkedin-rect';
import gmailIcon from '@iconify/icons-mdi/gmail';
import githubSquare from '@iconify/icons-fa-brands/github-square';

export default function Contact() {
    return (
        <div className="contact">
            <h2>Contact</h2>
            <div className="social-media">
                <div className="icons">
                    <Icon icon={linkedinRect} className="icon" />
                </div>
                <div className="icons">
                    <Icon icon={gmailIcon} className="icon" />
                </div>
                <div className="icons">
                    <Icon icon={githubSquare} className="icon" />
                </div>
            </div>
        </div>
    )
}