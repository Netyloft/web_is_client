import React, {useContext, useEffect, useState} from "react";
import {Nav, Navbar, Button, Container, Modal, ModalHeader, ModalBody, Form, FormText} from "react-bootstrap";
import {Link, Route, useNavigate, Outlet} from "react-router-dom";
import styled from "styled-components";
import {adminNavi, publicNavi, privatNavi} from "../router";
import {UserContext} from "../context";
import axios from "axios";
import {URL, URL_API} from "../constans/constans";
import style from '../App.module.scss';
import UserAPI from "../API/UserAPI";
import { ModalWindow } from "./ModalWindow";
import { LoginForm } from "./Forms/LoginForm";
import { RegistrationForm } from "./Forms/RegistrationForm";

const Styles = styled.div`
  a, .navbar-brand, .navbar-nav, .nav-link {
    color: #adb1b8;
    text-decoration: none;

    &:hover {
      color: white
    }
  }
`

export function NaviBar() {
    const {user, logoutUser} = useContext(UserContext);

    const [showLogIn, setShowLogIn] = useState(false);
    const [showSigIn, setShowSigIn] = useState(false);
    const navigate = useNavigate();

    function LogOut() {
        logoutUser()
        navigate('/');
    }

    const handleCloseLogIn = () => {
        setShowLogIn(false);
    }
    const handleShowLogIn = () => setShowLogIn(true)

    const handleCloseSigIn = () => {
        setShowSigIn(false);
    }

    const handleShowSigIn = () => setShowSigIn(true)

    return (
        <>
            <Styles>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand><Nav.Link><Link to="/">FORUM</Link></Nav.Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                {
                                    user &&
                                    ( (user.role === "USER" ? privatNavi : adminNavi).map(navi =>
                                        <Nav.Link><Link to={navi.to}>{navi.text}</Link></Nav.Link>))
                                }
                                {
                                     publicNavi.map(navi =>
                                        <Nav.Link><Link to={navi.to}>{navi.text}</Link></Nav.Link>)
                                }

                            </Nav>
                            <Nav>
                                {user
                                    ?
                                    <>
                                        <Button className="me-2" onClick={LogOut}>Выход</Button>
                                        <Button className="me-2" onClick={() => navigate(`/user/${user.id}`)}>Профиль</Button>
                                    </>
                                    :
                                    <>
                                        <Button className="me-2" onClick={handleShowLogIn}>Авторизация</Button>
                                        <Button className="me-2" onClick={handleShowSigIn}>Регистрация</Button>
                                    </>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Styles>
            <ModalWindow title={showLogIn ? 'Авторизация' : 'Регистрация'}
                visible={showLogIn || showSigIn} 
                handleClose={() => setShowLogIn(false)}>
                    {showLogIn && <LoginForm extensionOnSubmit={() => setShowLogIn(false)} />}
                    {showSigIn && <RegistrationForm extensionOnSubmit={() => setShowSigIn(false)} />}
            </ModalWindow>
        </>)
}