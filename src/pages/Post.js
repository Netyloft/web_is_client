import React, {useContext, useEffect, useState} from "react";
import {Button, Container} from "react-bootstrap";
import {PostForm} from "../components/PostForm";
import axios from "axios";
import {NewComment} from "../components/NewComment";
import {useParams} from "react-router-dom";
import {URL_API} from "../constans/constans";
import {UserContext} from "../context";
import {MyPostForm} from "./MyPostForm";

export function Post() {
    const [post, setPost] = useState({});

    const {user, setUser} = useContext(UserContext);

    const [boo, setBoo] = useState(false)
    const [author, setAuthor] = useState("")

    const params = useParams()

    useEffect(() => {
        getPosts()

        console.log(user.id)
        console.log(params.id)
        console.log(user.id === params.id)
    }, [])

    async function getPosts() {
        const response = await axios.get(URL_API + `/article/${params.id}`)
        setPost(response.data.data);

        setBoo(user.id === response.data.data.author.id)
        setAuthor(response.data.data.author.nickName)
        console.log(user.id === response.data.data.author.id)

    }

    return (
        <Container className="mt-5">
            {boo ?
                <MyPostForm post={post}/>
                :
                <PostForm post={post} author={author}/>
                }
            <NewComment post={post}/>
            {/*<CommentArea post={post}/>*/}
        </Container>

    )
}