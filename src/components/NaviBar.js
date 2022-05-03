import React, {useContext, useEffect, useState} from "react";
import {Nav, Navbar, Button, Container, Modal, ModalHeader, ModalBody, Form, FormText} from "react-bootstrap";
import {Link, Route, useNavigate} from "react-router-dom";
import styled from "styled-components";
import {adminNavi, publicNavi, privatNavi} from "../router";
import {UserContext} from "../context";
import axios from "axios";
import {URL, URL_API} from "../constans/constans";

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
    const {user, setUser} = useContext(UserContext);

    const [showLogIn, setShowLogIn] = useState(false);
    const [showSigIn, setShowSigIn] = useState(false);
    const [dangerousText, setDangerousText] = useState("");

    const [nick, setNick] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
    })

    const navigate = useNavigate();

    async function Registration() {
        if (nick.trim().length > 0 && email.trim().length > 0 && password.trim().length > 0) {
            await axios.post(URL_API + '/user/create', {
                nickName: nick,
                password: password,
                email: email
            }).then(response => {
                handleCloseSigIn()
            }).catch(err => {
                setDangerousText("Имя: {nick}  занято!!!");
            })
        } else {
            setDangerousText("Все поля должны быть заполнены");
        }
    }

    async function LogIn() {
        await axios.post(URL + '/authenticate', {
            name: nick,
            password: password
        }).then(response => {
            GetUser(response.data)
            handleCloseLogIn()
        }).catch(err => {
            setDangerousText("Пользователь не найден");
        })
    }

    async function GetUser(JWT) {
        const responseGet = await axios.get(URL_API + `/user/jwt/${JWT}`)
        const id = responseGet.data.data.id
        const role = responseGet.data.data.role
        const nick = responseGet.data.data.nickName
        const password = responseGet.data.data.password
        console.log(role)
        setUser({id: id, role: role, jwt: JWT, auth: true})
        // localStorage.setItem("auth", "true")
        // localStorage.setItem("nick", nick)
        // localStorage.setItem("password", password)
    }

    function LogOut() {
        setUser({auth: false})
        localStorage.removeItem("auth")
        localStorage.removeItem("nick")
        localStorage.removeItem("password")
        navigate('/');
    }

    const handleCloseLogIn = () => {
        setShowLogIn(false);
        setDangerousText("")
    }
    const handleShowLogIn = () => setShowLogIn(true)

    const handleCloseSigIn = () => {
        setShowSigIn(false);
        setDangerousText("")
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
                                    user.role === "USER" ?
                                        privatNavi.map(navi =>
                                            <Nav.Link><Link to={navi.to}>{navi.text}</Link></Nav.Link>)
                                        :
                                        user.role === "ADMIN" ?
                                            adminNavi.map(navi =>
                                                <Nav.Link><Link to={navi.to}>{navi.text}</Link></Nav.Link>)
                                            :
                                            publicNavi.map(navi =>
                                                <Nav.Link><Link to={navi.to}>{navi.text}</Link></Nav.Link>)
                                }

                            </Nav>
                            <Nav>
                                {user.auth
                                    ?
                                    <>
                                        <Button className="me-2" onClick={LogOut}>Выход</Button>
                                        <Button className="me-2" onClick={() => navigate(`/user/${user.id}`)}>Профиль</Button>
                                    </>
                                    :
                                    <>
                                        <Button className="me-2" onClick={handleShowLogIn}>Авторизация</Button>
                                        <Button className="me-2"
                                                onClick={handleShowSigIn}>Регистрация</Button>
                                    </>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Styles>
            <Modal show={showLogIn} onHide={handleCloseLogIn}>
                <Modal.Header closeButton>
                    <Modal.Title>Авторизация</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId={"fromBasicNickName"}>
                            <Form.Control type={"email"} placeholder={"Имя"}
                                          onChange={event => setNick(event.target.value)}/>
                        </Form.Group>
                        <Form.Group className={"mt-2"} controlId={"fromBasicPassword"}>
                            <Form.Control type={"Пароль"} placeholder={"Пароль"}
                                          onChange={event => setPassword(event.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId={"fromBasicPassword"}>
                            <FormText className={"text-danger"}>{dangerousText}</FormText>
                        </Form.Group>
                        <Form.Group controlId={"fromBasicPassword"}>
                            <Button className="mt-2" onClick={LogIn}>Авторизоваться</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>

            <Modal show={showSigIn} onHide={handleCloseSigIn}>
                <Modal.Header closeButton>
                    <Modal.Title>Регистрация</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId={"fromBasicNickName"}>
                            <Form.Control type={"email"} placeholder={"Имя"}
                                          onChange={event => setNick(event.target.value)}/>
                        </Form.Group>
                        <Form.Group className={"mt-2"} controlId={"fromBasicNickName"}>
                            <Form.Control type={"email"} placeholder={"Почта"}
                                          onChange={event => setEmail(event.target.value)}/>
                        </Form.Group>
                        <Form.Group className={"mt-2"} controlId={"fromBasicPassword"}>
                            <Form.Control type={"Пароль"} placeholder={"Пароль"}
                                          onChange={event => setPassword(event.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId={"fromBasicPassword"}>
                            <FormText className={"text-danger"}>{dangerousText}</FormText>
                        </Form.Group>
                        <Form.Group controlId={"fromBasicPassword"}>
                            <Button className="mt-2" onClick={Registration}>Зарегистрироваться</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>)
}