import classNames from "classnames";
import React from "react";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import AppStyle from '../App.module.scss'
import cn from 'classnames';

export const Footer = () => {
    return (

        <Container className={cn("mt-5",AppStyle.Footer)} fluid style={{backgroundColor: '#212529', color: '#fff'}}>
            <Container style={{display: 'flex', justifyContent: 'center', padding: '4px'}}>
                <p>
                    <a href="vk.com" className={"footer-text"}>vk.com</a>
                    <a href="telegram.org" className={"footer-text"}>telegram.org</a>
                    <a href="discord.api" className={"footer-text"}>discord.api</a>
                </p>
            </Container>
        </Container>

    )
}