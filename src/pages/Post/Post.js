import React, {useContext, useLayoutEffect, useState} from "react";
import {Button, Container} from "react-bootstrap";
import {PostForm} from "../../components/PostForm";
import axios from "axios";
import {NewComment} from "../../components/NewComment";
import {useParams} from "react-router-dom";
import {URL_API} from "../../constans/constans";
import {UserContext} from "../../context";
import {MyPostForm} from "../MyPostForm/MyPostForm";
import AppStyle from '../../App.module.scss'
import PostAPI from "../../API/PostAPI";

export function Post() {
    const [post, setPost] = useState({});
    const {user} = useContext(UserContext);

    const [userIsAuthor, setUserIsAuthor] = useState(false)
    const [author, setAuthor] = useState("")

    const {id} = useParams()

    useLayoutEffect(() => {
        (async() => {
            try{
                const postFromQuery = await PostAPI.getPostById(id);
                if(postFromQuery){
                    setPost(postFromQuery);
                    setAuthor(postFromQuery.author.nickName);
                    setUserIsAuthor(postFromQuery.author.id === user?.id)
                }
            }
            catch(e){
                console.log(e);
            }
        })()
    }, [id, user])



    return (
        <Container className={AppStyle.Body}>
            {userIsAuthor ?
                <MyPostForm post={post}/>
                :
                <PostForm post={post} author={author}/>
                }
            <NewComment post={post}/>
            {/*<CommentArea post={post}/>*/}
        </Container>

    )
}