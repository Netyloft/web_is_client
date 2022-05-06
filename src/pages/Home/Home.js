import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import {PostItem} from "../../components/PostItem/PostItem";
import axios from "axios";
import {URL_API} from "../../constans/constans";
import style from '../../App.module.scss';

export function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts()
    },[])

    async function getPosts() {
        const response = await axios.get(URL_API +'/article/')
        setPosts(response.data.data.items)
    }

    return (
        <Container className={style.Body}>
            {posts.map(post => <PostItem key={`/post/${post.id}`} post={post}/>)}
        </Container>
    )
}


