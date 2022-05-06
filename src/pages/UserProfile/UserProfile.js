import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {UserInfo} from "../../components/UserInfo";
import {Container} from "react-bootstrap";
import {PostItem} from "../../components/PostItem/PostItem";
import {URL_API} from "../../constans/constans";
import AppStyle from '../../App.module.scss'


export function UserProfile() {
    const [user, setUser] = useState({});

    useEffect(() => {
        getUser()
    }, [])

    const params = useParams()

    async function getUser() {
        const response = await axios.get(URL_API + `/user/${params.id}`)
        setUser(response.data.data)
    }

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts()
    }, [])

    async function getPosts() {
        const response = await axios.get(URL_API + `/article/?authorId=${params.id}`)
        setPosts(response.data.data.items)
    }

    return (
        <Container className = {AppStyle.Body}>
            <UserInfo user={user}/>

            {posts.map(post =>
                <PostItem post={post} key={post.id}/>
            )}

        </Container>

    )
}

