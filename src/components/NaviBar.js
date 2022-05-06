import React, {useContext, useEffect, useState} from "react";
import {Nav, Navbar, Button, Container, Modal, ModalHeader, ModalBody, Form, FormText} from "react-bootstrap";
import {Link, Route, useNavigate, Outlet} from "react-router-dom";
import styled from "styled-components";
import {adminNavi, publicNavi, privatNavi, publicRoutes, privateRoutes} from "../router";
import {UserContext} from "../context";
import style from '../App.module.scss';
import { ModalWindow } from "./ModalWindow";
import { LoginForm } from "./Forms/LoginForm";
import { RegistrationForm } from "./Forms/RegistrationForm";

export function NaviBar() {
    const {user, logoutUser} = useContext(UserContext);

    const [showLogIn, setShowLogIn] = useState(false);
    const [showSigIn, setShowSigIn] = useState(false);
    const navigate = useNavigate();
    const LinksToRender = [...publicNavi, 
                            ...(!!user ? privatNavi: []), 
                            ...( user?.role === 'ADMIN' ? adminNavi: []) ]
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
        <div>
            <Navbar className={style.NavBar} collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <Link to="/">FORUM</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {
                                LinksToRender.map((navi,index) =><Link key={`link/${index}`} className={style.Link} to={navi.to}>{navi.text}</Link>)
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
        <ModalWindow title={showLogIn ? 'Авторизация' : 'Регистрация'}
            visible={showLogIn || showSigIn} 
            handleClose={() => setShowLogIn(false)}>
                {showLogIn && <LoginForm extensionOnSubmit={() => setShowLogIn(false)} />}
                {showSigIn && <RegistrationForm extensionOnSubmit={() => setShowSigIn(false)} />}
        </ModalWindow>
    </div>)
}