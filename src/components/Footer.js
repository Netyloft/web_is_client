import React from "react";
import {Container} from "react-bootstrap";
import AppStyle from '../App.module.scss'

export const Footer = () => {
    return (<Container className={AppStyle.Footer} fluid>
                <p>
                    <a href="vk.com" className={"footer-text"}>vk.com</a>
                    <a href="telegram.org" className={"footer-text"}>telegram.org</a>
                    <a href="discord.api" className={"footer-text"}>discord.api</a>
                </p>
            </Container>)
}