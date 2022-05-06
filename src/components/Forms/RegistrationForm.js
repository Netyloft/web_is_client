import {Button, Form, FormText} from "react-bootstrap";
import { useState } from 'react';
import UserAPI from '../../API/UserAPI';

const RegistrationForm = ({extensionOnSubmit}) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [dangerousText, setDangerousText] = useState("");

    const clickRegistrateHandler = async() => {
        if (login.trim().length > 0 && email.trim().length > 0 && password.trim().length > 0) {
            try{
                const res = await UserAPI.Registrate(login,email,password);
                console.log(res);
                extensionOnSubmit && extensionOnSubmit();
            }
            catch(e){
                setDangerousText("Имя: {nick}  занято!!!");
            }
        }
        else{
            setDangerousText("Все поля должны быть заполнены");
        }
    }

    return(
        <Form>
            <Form.Group controlId={"fromBasicNickName"}>
                <Form.Control type={"email"} placeholder={"Имя"}
                                onChange={event => setLogin(event.target.value)}/>
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
                <Button className="mt-2" onClick={clickRegistrateHandler}>Зарегистрироваться</Button>
            </Form.Group>
        </Form>
    )
}

export {RegistrationForm};