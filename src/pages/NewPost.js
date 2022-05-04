import React, {useContext, useState} from "react";
import {Button, Container} from "react-bootstrap";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import {URL_API} from "../constans/constans";
import {UserContext} from "../context";

export function NewPost() {

    const {user, setUser} = useContext(UserContext);

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState("");
    const [author, setAuthor] = useState("");

    const username = 'user'
    const password = 'user'

    //const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

    const navigate = useNavigate();

    async function PostRequest() {
        const response = await axios.post(URL_API + '/article/create/', {
            title: title,
            body: body,
            authorId: user.id,
            tags: tags
        }, {
            headers: { Authorization: `Bearer ${user.jwt}` }
        })
        console.log(user.jwt)
        navigate(`/post/${response.data.data.id}`)
    }

    return (
        <Container className="mt-5">
            <>
                <div className={"mb-3"}>
                    <Button className="btn btn-primary me-2" onClick={PostRequest}>Опубликовать</Button>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Заголовок"
                           aria-describedby="basic-addon2" onChange={event => setTitle(event.target.value)}/>
                </div>

                <div className="input-group mb-3">
                    <textarea className="form-control" placeholder="Статья"
                              onChange={event => setBody(event.target.value)}/>
                </div>

                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Теги"
                           aria-describedby="basic-addon2" onChange={event => setTags(event.target.value)}/>
                </div>
            </>
        </Container>
    )
}