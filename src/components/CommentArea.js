import React, {useEffect, useState} from "react";
import {Button, Container} from "react-bootstrap";
import PostItem from "./PostItem";
import Comment from "./Comment";
import axios from "axios";
import {useParams} from "react-router-dom";

export function CommentArea(props) {


    const params = useParams()

    return (
        <Container>
            {/*{comments.map(comment =>*/}
            {/*    <Comment comment={comment} key={comment.id}/>*/}
            {/*)}*/}
        </Container>
    )
}