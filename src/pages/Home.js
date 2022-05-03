import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import {PostItem} from "../components/PostItem";
import PostServices from "../services/PostService";
import axios from "axios";
import {URL_API} from "../constans/constans";

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
        <Container>
            {posts.map(post =>
                <PostItem post={post} key={post.id}/>
            )}
        </Container>
    )
}


