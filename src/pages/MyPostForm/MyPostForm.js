import React, {useContext, useEffect, useState} from "react";
import {Button, Container} from "react-bootstrap";
import {PostForm} from "../../components/PostForm";
import axios from "axios";
import {NewComment} from "../../components/NewComment";
import {useNavigate, useParams} from "react-router-dom";
import {URL_API} from "../../constans/constans";
import {UserContext} from "../../context";

export function MyPostForm(props) {

    const {user, setUser} = useContext(UserContext);

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState("");
    const [author, setAuthor] = useState("");

    const [up, setUp] = useState(true);

    const params = useParams()

    const navigate = useNavigate();

    useEffect(() => {
        if (up) {
            setTitle(props.post.title)
            setBody(props.post.body)
            setTags(props.post.tags)
            setUp(false)
        }
    })

    async function PostRequest() {
        const response = await axios.put(URL_API + '/article/update/', {
            id: params.id,
            title: title,
            body: body,
            authorId: user.id,
            tags: tags
        }, {
            headers: { Authorization: `Bearer ${user.jwt}` }
        })
    }

    async function DeleteRequest() {
        const response = await axios.delete(URL_API + `/article/${params.id}`, {
            headers: { Authorization: `Bearer ${user.jwt}` }
        })
        navigate("/")
    }

    return (
        <Container className="mt-5">
            <div className={"mb-3"}>
                <Button className="btn btn-primary me-2" onClick={PostRequest}>Редактировать</Button>
                <Button className="btn btn-danger" onClick={DeleteRequest}>Удалить</Button>
            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Заголовок" value={title}
                       aria-describedby="basic-addon2" onChange={event => setTitle(event.target.value)}/>
            </div>

            <div className="input-group mb-3">
                    <textarea className="form-control" placeholder="Статья" value={body}
                              onChange={event => setBody(event.target.value)}/>
            </div>

            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Теги" value={tags}
                       aria-describedby="basic-addon2" onChange={event => setTags(event.target.value)}/>
            </div>
        </Container>

    )
}