import React, {useContext, useEffect, useState} from "react";
import {Button, Container} from "react-bootstrap";
import axios from "axios";
import {useParams} from "react-router-dom";
import Comment from "./Comment";
import {URL_API} from "../constans/constans";
import {UserContext} from "../context";


export function NewComment(props) {

    const [body, setBody] = useState("");

    const {user, setUser} = useContext(UserContext);

    const [comments, setComments] = useState([]);

    const params = useParams()

    useEffect(() => {
        getComments()
    }, [])

    async function PostRequest() {
        setBody("")
        await axios.post(URL_API + '/comment/create', {
            articleId: params.id,
            text: body,
            authorId: user.id
        }, {
            headers: { Authorization: `Bearer ${user.jwt}` }
        })

        await getComments()
    }

    async function getComments() {
        const response = await axios.get(URL_API + `/comment/${params.id}`)
        setComments(response.data.data.items)
    }

    return (
        <div>
            {user &&
                (<div>

                <div className="input-group mb-2">
                    <textarea className="form-control" placeholder="Новый комментарий" value={body}
                            onChange={event => setBody(event.target.value)}/>
                </div>

                <Button className="mb-4" onClick={PostRequest}>Прокомментировать</Button></div>)
                }
            Комментарии
            <Container>
                {comments.map(comment =>
                    <Comment comment={comment} key={comment.id}/>
                )}
            </Container>
        </div>
    )
}
