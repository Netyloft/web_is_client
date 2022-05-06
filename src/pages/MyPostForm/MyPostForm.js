import React, {useContext, useState } from "react";
import {Button, Container} from "react-bootstrap";
import {useNavigate, useParams } from "react-router-dom";
import {UserContext} from "../../context";
import AppStyle from '../../App.module.scss';
import PostAPI from "../../API/PostAPI";

export function MyPostForm({post}) {

    const {user} = useContext(UserContext);
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);
    const [tags, setTags] = useState(post.tags);

    const navigate = useNavigate();

    const clickSaveHandler = () => {
        PostAPI.updatePost(post.id,{title,body,user, tags})
        setIsEditing(false);
    }

    const clickDeleteHandler = () => {
        PostAPI.deletePost(post.id, user);
        navigate('/');
    }

    const clickCancelHandler = () => {
        setTitle(post.title);
        setBody(post.body);
        setTags(post.tags);
        setIsEditing(false);
    }


    return (
        <Container className={AppStyle.Body} >
            <div className={"mb-3"}>
                {isEditing ?<>
                            <Button className="btn btn-primary me-2" onClick={clickCancelHandler}>Оменить</Button>  
                            <Button className="btn btn-primary me-2" onClick={clickSaveHandler}>Сохранить</Button>
                            </>:
                            <Button className="btn btn-primary me-2" onClick={() => setIsEditing(true)}>Редактировать</Button>}
                <Button className="btn btn-danger" onClick={clickDeleteHandler}>Удалить</Button>
            </div>
            <div className="input-group mb-3">
                {isEditing ? <input type="text" className="form-control" placeholder="Заголовок" value={title}
                    aria-describedby="basic-addon2" onChange={event => setTitle(event.target.value)}/>
                    : <h2>{title}</h2>}
            </div>

            <div className="input-group mb-3">
            {isEditing ?  <textarea className="form-control" value={body}
                            onChange={event => setBody(event.target.value)}/>:
                            <div >
                                {body}
                            </div>}
            </div>

            <div className="input-group mb-3">
                {isEditing ? <input type="text" className="form-control" placeholder="Теги" value={tags}
                        aria-describedby="basic-addon2" onChange={event => setTags(event.target.value)}/>:
                            <div>
                                {tags}
                            </div>
                        }
            </div>
        </Container>

    )
}