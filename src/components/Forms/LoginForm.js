import {Button, Form, FormText} from "react-bootstrap";
import { useState, useContext } from 'react';
import { UserContext } from "../../context";
import UserAPI from '../../API/UserAPI';

const LoginForm = ({extensionOnSubmit}) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [dangerousText, setDangerousText] = useState("");
    const {loginUser} = useContext(UserContext);
    
    const clickLoginHandler = async () =>{
        try{
            const user = await UserAPI.Auntificate(login,password);
            loginUser(user);
            extensionOnSubmit && extensionOnSubmit();
        }
        catch(e){
            setDangerousText("Пользователь не найден");
        }
    }

    return(<Form>
        <Form.Group controlId={"fromBasicNickName"}>
            <Form.Control type={"email"} placeholder={"Имя"}
                        onChange={event => setLogin(event.target.value)}/>
        </Form.Group>
        <Form.Group className={"mt-2"} controlId={"fromBasicPassword"}>
            <Form.Control type={"Пароль"} placeholder={"Пароль"}
                        onChange={event => setPassword(event.target.value)}/>
        </Form.Group>
        <Form.Group controlId={"fromBasicPassword"}>
            <FormText className={"text-danger"}>{dangerousText}</FormText>
        </Form.Group>
        <Form.Group controlId={"fromBasicPassword"}>
            <Button className="mt-2" onClick={clickLoginHandler}>Авторизоваться</Button>
        </Form.Group>
    </Form>
    )
}

export {LoginForm};